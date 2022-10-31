import { View, Text, SafeAreaView, ImageBackground, Image, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
import Register from './Register';
const Checkcode = ({ navigation }) => {
    const [getPasswordVisible, setPasswordVisible] = useState(false)
    return (

        <KeyboardAvoidingView className="flex-1">



            <ImageBackground className="w-screen h-screen absolute" source={require('../assets/images/MaskGroup.png')} resizeMode="cover" />

            <TouchableOpacity className="mt-8 ml-2 p-2" onPress={() => navigation.navigate("Register")}>
                <Feather name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
            <View className="">
                <Text>Enter your 5-digit code</Text>
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