import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './components/Home';
import Details from './components/Details';

const screens = {
    Home:{
        screen:Home
    },
    Details:{
        screen:Details
    },
}
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);