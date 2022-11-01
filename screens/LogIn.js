import { View, Text, SafeAreaView, ImageBackground, Image, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useContext, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import Register from './Register';
import { AuthContext } from './context/AuthContext';
const LogIn = ({ navigation }) => {
  const { isLoading, login } = useContext(AuthContext)
  const [getPasswordVisible, setPasswordVisible] = useState(false)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1">

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
          <Text style={styles.font} className="text-2xl mb-3">Login</Text>
          <Text style={styles.font} className="text-gray-500">Enter your emails and password</Text>
        </View>
      </View>
      <View className=" ml-5 mt-10  mr-5">
        <View>
          <Text style={styles.font} className="text-gray-500 mb-3">Email</Text>
          <TextInput
            className="border-b border-b-gray-300"
            style={styles.font}
            placeholder='Nhap email cua ban'
            value={email}
            onChangeText={text => handleCheckEmail(text)} />
        </View>
        {checkValidEmail ? (
          <Text style={styles.textFailed}>Wrong format email</Text>
        ) : (
          <Text style={styles.textFailed}> </Text>
        )}
        <View className="mt-8">
          <Text style={styles.font} className="text-gray-500 mb-3">Password</Text>
          <TextInput 
          className="border-b border-b-gray-300 "
           style={styles.font} 
           placeholder='Nhap password cua ban' 
           secureTextEntry={getPasswordVisible ? false : true}
           onChangeText={text => setPassword(text)} />
          
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
        <View className=" ml-5 mr-5 items-center mt-3">
          <TouchableOpacity className="ml-auto">
            <Text style={styles.font} className="float-right text-gray-700">Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-1 items-center">

        <TouchableOpacity style={styles.green} className="items-center h-14 justify-center rounded-2xl mt-5 w-11/12 " onPress={() => { login(email, password) }}>
          <View>
            <Text style={styles.font} className="text-white text-lg">LogIn</Text>
          </View>
        </TouchableOpacity>

        <View className="flex-row mt-3">
          <Text style={styles.font}>
            Don’t have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(Register)}>
            <Text style={styles.font} className="ml-1 text-green-500">
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>




  )
}

export default LogIn
const styles = StyleSheet.create({
  font: {
    fontFamily: 'Gilroy-Light'
  },
  green: {
    backgroundColor: '#53b175'
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
    fontFamily:'Gilroy-Light'
  },
})