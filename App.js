
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from " '@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons';
import CreateStory from   "./screens/createStory"
import Feed from   "./screens/feed"

const Tab= createBottomTabNavigator()
export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route})=>({tabBarIcon:({focused,color,size})=>{
        let iconName 
        if(route.name === "Feed"){iconName=focused? "book": "book-outline"}
        else if(route.name === "createStory"){iconName=focused? "create": "create-outline"}
        return <Ionicons name={iconName} size={size} color={color}/>
      },
      })}
      
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Feed" component={Feed}/>
        <Tab.Screen name="createStory" component={CreateStory}/>

      </Tab.Navigator>
    </NavigationContainer>
  )
}

}