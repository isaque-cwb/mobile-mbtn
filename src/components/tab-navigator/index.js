import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Contact } from '../../pages/contact';
import { Fotos } from '../../pages/fotos';
import { Home } from '../../pages/home';
import { Settings } from '../../pages/setting';

const Tab = createMaterialBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator

      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad', }}
      shifting={true}
    >
      <Tab.Screen
        name='home'
        component={Home}

        options={{
          tabBarColor: '#7a7265',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={25}

            />
          )
        }}
      />
      <Tab.Screen
        name='Contact'
        component={Contact}
        options={{
          tabBarColor: '#7a7288',
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'account-box' : 'account-box-outline'}
              color={color}
              size={25}
            />
          )
        }}
      />
      <Tab.Screen
        name='fotos'
        component={Fotos}
        options={{
          tabBarColor: '#c0b9dd',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'camera' : 'camera-outline'}
              color={color}
              size={25}
            />
          )
        }}
      />
      <Tab.Screen
        name='setting'
        component={Settings}
        options={{
          tabBarColor: '#80a1d4',
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              color={color}
              size={25}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}