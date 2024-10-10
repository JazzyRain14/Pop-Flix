import * as React from 'react';
import { router } from 'expo-router';
import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, View, Text, Button } from 'react-native';
import '../global.css'
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export default function HomeScreen() {
  const MovieNight = require('../assets/images/MovieNight.png');
  const LogoName = require('../assets/images/Logo2.png');
  const UnderLinePath = require('../assets/images/path.png');
  return (
    <SafeAreaView className='bg-primary-100' style={{backgroundColor:'#211f24', height:'100%'}}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View style={{ paddingHorizontal: 16 }} className='w-full flex-col justify-center items-center h-full relative'>
          <View className='w-full flex-row justify-center items-center absolute' style={{ top: 50 }}
          >
            <Text className='text-popred font-pbold text-4xl'>
              POP
            </Text>
            <Image
              source={LogoName}
              style={{ width: 100, height: 80 }}
              resizeMode='contain'
            />
            <View className='relative'>
              <Text className='text-popred font-pbold text-4xl'>
                FLIX
              </Text>
              <Image
                source={UnderLinePath}
                style={{ width: 65, position: 'absolute', bottom: -12 }}
                resizeMode='contain'
              />
              <Image
                source={UnderLinePath}
                style={{
                  width: 65, position: 'absolute', bottom: -14, transform: [{
                    rotate: '-6deg'
                  }]
                }}
                resizeMode='contain'
              />
            </View>
          </View>
          <Image
            source={MovieNight}
            resizeMode='contain'
            style={{ maxWidth: 380, width: '100%', height: 300 }}
          />
          <Text className='font-bold' style={{ color: '#cdcde0', fontSize: 16, textAlign: 'center', position: 'absolute', bottom: 150 }}>
            A world of movies at your fingertips.
          </Text>
          <CustomButton
            title="Continue with email"
            handlePress={()=> router.push('/sign-in')}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}


