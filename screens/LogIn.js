import { View, Text, SafeAreaView, ImageBackground, Image, TextInput } from 'react-native'
import React from 'react'

const LogIn = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <ImageBackground className="w-screen h-screen" source={require('../assets/images/MaskGroup.png')} resizeMode="cover" />
      </View>
      <View className="flex-1 items-center">
        <Image className="" source={require('../assets/images/Group.png')} />
      </View>
      <View className="flex-1 ml-5 mr-5">
        <View>
          <Text>Loging</Text>
          <Text>Enter your emails and password</Text>
        </View>
      </View>
        <View className="flex-1 ml-5 mr-5">
          <View>
            <Text>Email</Text>
            <TextInput className="border-b-2" placeholder='nhap email cua ban' />
          </View>
        </View>
    </SafeAreaView>
  )
}

export default LogIn