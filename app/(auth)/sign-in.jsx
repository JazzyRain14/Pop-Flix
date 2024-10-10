import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';

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
    gap:8
  }

})

const SignIn = () => {
  const LogoName = require('../../assets/images/Logo2.png');
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  return (
    <SafeAreaView style={styles.SAV}>
      <ScrollView>
        <View style={{ paddingHorizontal: 16, marginVertical: 24, minHeight: 700, justifyContent: 'space-between', width: '100%' }}>
          <View style={styles.Auth_Header}>
            <Text style={styles.Auth_Header_Text}>
              Sign in
            </Text>
            <Image
              source={LogoName}
              resizeMode='contain'
              style={styles.Auth_Header_Img}
            />
          </View>
          <View className='flex-1'>
            <FormField
              title="Email"
              placeholder="eg:pop@mail.com"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              placeholder="**********"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
            />
            <CustomButton
              title="Sign In"
              handlePress={()=>router.push('/home')}
              containerStyles="mt-7"
              isLoading={isSubmitting}
            />
          </View>
          <View style={styles.Auth_Footer}>
            <Text style={{fontSize:18, lineHeight:28, fontFamily:'Poppins-ARegular', color:'#cdcde0'}}>Don't have an account?</Text>
            <Link href="/sign-up" style={{fontSize:18, lineHeight:28, fontFamily:'Poppins-ARegular', color:'#fdb94a'}}>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn