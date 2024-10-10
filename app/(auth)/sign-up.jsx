import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';
import { FIREBASE_AUTH, doc } from "../../FirebaseConfig"


const styles = StyleSheet.create({
  SAV: {
    backgroundColor: '#211f24',
    height: "100%"
  },
  Auth_Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15
  },
  Auth_Header_Text: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: '#ffffff'
  },
  Auth_Header_Img: {
    width: 100,
    height: 80
  },
  Auth_Footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    flexDirection: 'row',
    gap: 8
  }

})

const SignUp = () => {
  const LogoName = require('../../assets/images/Logo2.png');
  // const [form, setForm] = useState({
  //   username: "",
  //   email: "",
  //   password: ""
  // })
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  useEffect(() => {
    console.log('Text input value:', username);
  }, [])
  
  const handleSignUp = () => {
    
  }
  return (
    <SafeAreaView style={styles.SAV}>
      <ScrollView >
        <View style={{ paddingHorizontal: 16, marginVertical: 24, minHeight: 700, justifyContent: 'space-between', width: '100%' }}>
          <View style={styles.Auth_Header}>
            <Text style={styles.Auth_Header_Text}>
              Sign Up
            </Text>
            <Image
              source={LogoName}
              resizeMode='contain'
              style={styles.Auth_Header_Img}
            />
          </View>
          <View className='flex-1'>
            <FormField
              title="Username"
              placeholder="username"
              value={username}
              handleChangeText={(username) => setUsername(username)}
              keyboardType="default"
            />
            <FormField
              title="Email"
              placeholder="eg:pop@mail.com"
              value={email}
              handleChangeText={(email) => setEmail(email)}
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              placeholder="**********"
              value={password}
              handleChangeText={(password) => setPassword(password)}
            />
            <CustomButton
              title="Sign In"
              handlePress={handleSignUp}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />
          </View>
          <View style={styles.Auth_Footer}>
            <Text style={{ fontSize: 18, lineHeight: 28, fontFamily: 'Poppins-ARegular', color: '#cdcde0' }}>Have an account already?</Text>
            <Link href="/sign-in" style={{ fontSize: 18, lineHeight: 28, fontFamily: 'Poppins-ARegular', color: '#fdb94a' }}>Sign in</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp