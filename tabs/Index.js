import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Search from './Search';
import Tickets from './Tickets';
import Profile from './Profile';
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const Index = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black', borderTopWidth: 0 },
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: {
          display: 'none',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Tickets') {
            iconName = 'ticket';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
        <Tabs.Screen name='Home' component={Home}/>
        <Tabs.Screen name='Search' component={Search}/>
        <Tabs.Screen name='Tickets' component={Tickets}/>
        <Tabs.Screen name='Profile' component={Profile}/>
    </Tabs.Navigator>
  )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})