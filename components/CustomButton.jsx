import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Text, TouchableOpacity } from 'react-native'
import { FIREBASE_AUTH } from '../FirebaseConfig'

const CustomButton = ({ title, handlePress }) => {
  const provider = new GoogleAuthProvider();
  // const handlePress = async () => {
  //   // console.log(auth);
  //   try {
  //     const user = await signInWithPopup(FIREBASE_AUTH, provider)
  //     if (user) {
  //       console.log(user);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      // className={`${inLoading ? 'opacity-50' : ''}`}
      // disabled={inLoading}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e51d25',
        minHeight: 62,
        borderRadius: 12,
        width: '100%',
        marginTop: 8,
        position: 'absolute',
        bottom: 50
      }}
      className='border border-white'
    >
      <Text className='' style={{ color: '#ffffff', fontSize: 18, fontWeight: '700' }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton