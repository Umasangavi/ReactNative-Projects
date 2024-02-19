import React from "react";
import { MovieDetail } from "./screens";
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native"
import 'react-native-gesture-handler';
import Tabs from "./navigation/tabs";

const stack = createStackNavigator()

const App= () =>{
    return(
    <NavigationContainer>
        <stack.Navigator 
        screenOptions={{headerShown: false,}}
        initialRouteName="Home">
            <stack.Screen name="Home" component={Tabs} />
            <stack.Screen name="MovieDetail" component={MovieDetail} />
        </stack.Navigator>
    </NavigationContainer>
    );

} ;
export default App;