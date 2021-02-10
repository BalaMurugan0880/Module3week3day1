import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput,ImageBackground, Button,FlatList,TouchableOpacity, Image } from 'react-native';

export default function Home({navigation}) {
  const [movies, setMovies] = useState([]);
  const [searchText, setsearchText] = useState('');

  
  const image = { uri: "https://i.stack.imgur.com/LOwyR.png" };

//this is how u do api call on page load
// useEffect(()=>{
//     alert('hi');
// },[])

const callApi = () => {
    fetch('http://www.omdbapi.com/?s='+searchText+'&apiKey=87d10179') 
    .then((response) => response.json()) 
    .then((json) => { setMovies(json.Search); }) 
    .catch((error) => { console.error(error); }); 
}
const Item = ({item}) => (
    <View style={styles.flatlist}>
              
                   <Image
            style={{
                width: 200,
                height: 200,
                resizeMode: 'contain',
                
            }}
            source={{
                uri:item.Poster,
            }}
        />
    
        <TouchableOpacity onPress={()=>navigation.push('Details', 
        {itemId:item.imdbID,title:item.Title,year:item.Year,poster:item.Poster,})}>
        
            <Text style={styles.flatlisttext}>Title : {item.Title}</Text> 
            <Text style={styles.flatlisttext}>Year : {item.Year}</Text> 
            <Text style={styles.flatlisttext}>imbD ID : {item.imdbID}</Text>  
            
        </TouchableOpacity>   
           </View>
)


  return (
    <View style={styles.outerContainer}>
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>Movie List</Text>
      <View style={styles.innerContainer}>
      <TextInput 
      placeholder="Enter Movie Name"
      placeholderTextColor="white"
      style={styles.textinput}
      onChangeText={text => setsearchText(text)}
      value={searchText} 
      />
      <Button onPress={callApi}  title="Search"  />
      </View>
      
      <FlatList
      style={styles.item}
           data={movies}
           renderItem={({ item }) => <Item item={item}/>
           }/>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: "row"
  },
  innerContainer: {
    flex: 0.5,
    flexDirection: 'row',
    textAlign: "center",
    justifyContent: "center",
    alignContent: 'center',
    flexWrap:'wrap',
    
  },
  textinput:{
    fontWeight: 'bold', 
    height:  40, 
    color: 'white', 
    textAlign: 'center',
    backgroundColor: "#000000a0",
    borderWidth: 1,
    borderColor:'white',

  },
  text:{
    color: "black",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,

    
  },
  flatlist:{
    color: 'white', 
    backgroundColor: "#000000a0",
    borderWidth: 1,
    borderColor:'white',
    flex: 2,
    flexDirection: 'row',
    justifyContent: "center",
    flexWrap:'wrap',

    
    
  },
  flatlisttext:{
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    
  }

});
