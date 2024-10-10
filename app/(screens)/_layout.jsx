import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const ScreenLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name='screenhome'
                options={{headerShown:false}}
            />
            <Stack.Screen
                name='premium'
                options={{headerShown:false}}
            />
            <Stack.Screen
                name='downloads'
                options={{headerShown:false}}
            />
            <Stack.Screen
                name='profile'
                options={{headerShown:false}}
            />
        </Stack>
    )
}

export default ScreenLayout

const styles = StyleSheet.create({})