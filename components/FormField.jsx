import { View, Text, TextInput, TouchableOpacity, Touchable } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
const styles = StyleSheet.create({
    Form: { marginVertical: 12, width: '100%', marginTop: 28 },
    Form_Text: { fontSize: 16, color: '#ffffff', fontFamily: 'Poppins-Medium' },
    Form_Input: { borderWidth: 2, borderColor: '#232533', alignItems: 'center', flexDirection:'row', borderRadius: 16, width: '100%', height: 64, paddingHorizontal: 16, backgroundColor: '#1e1e2d' },
    Form_Input_Focus: { borderColor: '#ff9c01' },
    Input: { flex: 1, color: '#ffffff', fontFamily: 'Poppins-SemiBold', fontSize: 16, lineHeight: 24, width: '100%' }
})
const FormField = ({ title, value, placeholder, handleChangeText, keyboardType }) => {
    const [isFocused, setIsFocused] = useState(false)
    const [showPassword, setIsShowPassword] = useState(false)
    return (
        <View style={styles.Form}>
            <Text style={styles.Form_Text}>{title}</Text>
            <View
                style={[styles.Form_Input]}
            >
                <TextInput
                    style={styles.Input}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChange={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                    keyboardType={keyboardType}
                />

                {
                    title === 'Password' && (
                        <TouchableOpacity
                            onPress={() => setIsShowPassword(!showPassword)}>
                            {!showPassword ? <Ionicons name='eye' size={24} color="white" /> : <Ionicons name='eye-off' size={24} color="white" />}
                        </TouchableOpacity>
                    )
                }

            </View>
        </View>
    )
}

export default FormField