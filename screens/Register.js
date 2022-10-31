import { View, Text, SafeAreaView, ImageBackground, Image, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
const Register = ({ navigation }) => {
    const [getPasswordVisible, setPasswordVisible] = useState(false)
    return (

        <KeyboardAvoidingView className="flex-1">

            <View className="flex-1">
                <View className="flex-1" >
                    <ImageBackground className="w-screen h-screen" source={require('../assets/images/MaskGroup.png')} resizeMode="cover" />
                </View>
                <View className="flex-1 items-center">
                    <Image className="" source={require('../assets/images/Group.png')} />
                </View>
            </View>
            <View className="ml-5 mr-5">
                <View>
                    <Text style={styles.font} className="text-2xl mb-3">Register</Text>
                    <Text style={styles.font} className="text-gray-500">Enter your emails and password</Text>
                </View>
            </View>
            <View className=" ml-5 mt-10  mr-5">
                <View>
                    <Text style={styles.font} className="text-gray-500 mb-3">Email</Text>
                    <TextInput className="border-b border-b-gray-300" style={styles.font} placeholder='Nhap email cua ban' />
                </View>
                <View className="mt-8">
                    <Text style={styles.font} className="text-gray-500 mb-3">Password</Text>
                    <TextInput className="border-b border-b-gray-300 " style={styles.font} placeholder='Nhap password cua ban' secureTextEntry={getPasswordVisible ? false : true} />
                    <TouchableOpacity className="absolute right-0 bottom-1"
                        onPress={() => {
                            setPasswordVisible(!getPasswordVisible)
                        }}>
                        {
                            getPasswordVisible ?
                                <Feather name="eye" size={24} color="gray" />
                                :
                                <Feather name="eye-off" size={24} color="gray" />
                        }
                    </TouchableOpacity>
                </View>
                <View className="mt-8">
                    <Text style={styles.font} className="text-gray-500 mb-3">Password Confirm</Text>
                    <TextInput className="border-b border-b-gray-300 " style={styles.font} placeholder='Nhap lai password cua ban' secureTextEntry={getPasswordVisible ? false : true} />
                    <TouchableOpacity className="absolute right-0 bottom-1"
                        onPress={() => {
                            setPasswordVisible(!getPasswordVisible)
                        }}>
                        {
                            getPasswordVisible ?
                                <Feather name="eye" size={24} color="gray" />
                                :
                                <Feather name="eye-off" size={24} color="gray" />
                        }
                    </TouchableOpacity>
                </View>
                <View className=" items-center mt-3">
                    <TouchableOpacity className="">
                        <Text style={styles.font} className="float-right text-gray-700">By continuing you agree to our Terms of Service
                            and Privacy Policy.</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="flex-1 items-center">

                <TouchableOpacity style={styles.green} className="items-center h-14 justify-center rounded-2xl mt-5 w-11/12 " onPress={() => { navigation.navigate('Checkcode') }}>
                    <View>
                        <Text style={styles.font} className="text-white text-lg">Register</Text>
                    </View>
                </TouchableOpacity>

                <View className="flex-row mt-3">
                    <Text style={styles.font}>
                        You have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.font} className="ml-1 text-green-500">
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>




    )
}

export default Register
const styles = StyleSheet.create({
    font: {
        fontFamily: 'Gilroy-Light'
    },
    green: {
        backgroundColor: '#53b175'
    }
})