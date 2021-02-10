import React from 'react';
import { Text, View,StyleSheet,ImageBackground, Image } from 'react-native';

export default function Details ({navigation}){
    const image = { uri: "https://i.stack.imgur.com/LOwyR.png" };
    return(
        <View style={styles.outerContainer}>
             <ImageBackground source={image} style={styles.image}>
            <View style={styles.innerContainer}>
            <Image
            style={{
                width: 200,
                height: 200,
                resizeMode: 'contain',
                
            }}
            source={{
                uri:navigation.getParam('poster'),
            }}
        />
                <Text style={styles.flatlisttext}>Title : {navigation.getParam('title')}</Text>      
                <Text style={styles.flatlisttext}>Year : {navigation.getParam('year')}</Text>  
                <Text style={styles.flatlisttext}>imbd ID : {navigation.getParam('itemId')}</Text> 
                
            
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    outerContainer: {
      flex: 1,
      flexDirection: "row"
      
    },
    innerContainer: {
      flex: 0.5,
      alignContent: 'center',
      backgroundColor: "#000000a0",
      borderWidth: 1,
     borderColor:'white',
     alignItems:'center',
     padding:10,
     
      
    },
    image: {
        flex: 2,
        resizeMode: "cover",
        justifyContent: "center"
      },

      flatlisttext:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        
      }
  
  });
  