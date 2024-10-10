import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabsLayout from './_layout'
import { SafeAreaView } from 'react-native'
const Home = () => {
    return (
        <SafeAreaView className='bg-primary-100' style={{ backgroundColor: '#211f24', height: '100%' }}>
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View style={{ paddingHorizontal: 16 }}>
                    <Text className='text-white'>home</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})