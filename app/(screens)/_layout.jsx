import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ScreenLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name='moviedetails'
                    options={{ headerShown: false }} />
            </Stack>
        </>
    )
}

export default ScreenLayout