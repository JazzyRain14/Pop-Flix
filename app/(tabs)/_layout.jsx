import Ionicons from '@expo/vector-icons/Ionicons';
import { Redirect, Stack, Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          // tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#211F24',
            borderTopColor: '#232533',
            borderTopWidth: 1,
            height: 65
          },
          headerShown:false
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <Ionicons size={28} color='#FDB94A'
                name={focused ? 'home' : 'home-outline'}
              />
            ),
            tabBarLabelStyle: {
              fontSize: 14,
              marginBottom:10,
              fontWeight: 'bold',
              color: '#ffffff'
            }
          }}
        />
        <Tabs.Screen
          name='premium'
          options={{
            title: 'Premium',
            tabBarIcon: ({ focused }) =>
            (<Ionicons size={28} color='#FDB94A'
              name={focused ? 'ribbon' : 'ribbon-outline'}
            />),
            tabBarLabelStyle: {
              fontSize: 14,
              marginBottom:10,
              fontWeight: 'bold',
              color: '#ffffff'
            }
          }}
        />
        <Tabs.Screen
          name='downloads'
          options={{
            title: 'Downloads',
            tabBarIcon: ({ focused }) => (<Ionicons size={28} color='#FDB94A'
              name={focused ? 'download' : 'download-outline'}
            />),
            tabBarLabelStyle: {
              fontSize: 14,
              marginBottom:10,
              fontWeight: 'bold',
              color: '#ffffff'
            }
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            tabBarIcon: ({ focused }) => (<Ionicons size={28} color='#FDB94A'
              name={focused ? 'person' : 'person-outline'}
            />),
            tabBarLabelStyle: {
              fontSize: 14,
              marginBottom:10,
              fontWeight: 'bold',
              color: '#ffffff'
            }
          }}
        />
      </Tabs >
    </>
  )
}
export default TabsLayout