import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <SafeAreaView className='bg-primary-100' style={{ backgroundColor: '#211f24', height: '100%' }}>
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View style={{ paddingHorizontal: 16 }}>
                    <Text className='text-white'>profile</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})