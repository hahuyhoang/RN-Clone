import { View, Text, SafeAreaView, ImageBackground, Image, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Button } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import Register from './Register';
const Checkcode = ({ navigation }) => {
    const [getPasswordVisible, setPasswordVisible] = useState(false)
    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
        >
            <ImageBackground className="w-screen h-screen absolute" source={require('../assets/images/MaskGroup.png')} resizeMode="cover" />
            <View className='flex-1'>
                <TouchableOpacity className="mt-8 ml-2 p-2" onPress={() => navigation.navigate("Register")}>
                    <Feather name="chevron-left" size={24} color="black" />
                </TouchableOpacity>
                <View className="ml-6 mt-6">
                    <Text style={styles.font} className="text-2xl">Enter your 5-digit code</Text>
                </View>
                <View className="ml-6 mt-6">
                    <Text style={styles.font} className="text-gray-500">
                        Code
                    </Text>
                </View>
                <View className="ml-6 mt-5 mr-6">
                    <TextInput
                        placeholder='Nhap code tai day'
                        className=" border-b border-neutral-500"
                        keyboardType='number-pad'
                        style={styles.font} />
                </View>
            </View>
            <View className='flex-1 ml-6 mr-6'>
                <View className='flex-row flex-1 justify-between'>
                    <TouchableOpacity className='mt-3'>
                        <Text style={styles.font} className='text-green-500'>Resend code</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  className='p-2 h-10 rounded-xl bg-green-600 justify-center'>
                        <Text style={styles.font} className='text-white'>Send Code</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </KeyboardAvoidingView>




    )
}

export default Checkcode
const styles = StyleSheet.create({
    font: {
        fontFamily: 'Gilroy-Light'
    },
    green: {
        backgroundColor: '#53b175'
    }
})