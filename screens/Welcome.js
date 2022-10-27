import { View, Text, ImageBackground, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const Welcome = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    'Gilroy-Light': require('../assets/font/Gilroy-SemiBold.ttf')
  });
  if (!fontsLoaded) {
    return console.log('loi roi kia')
  }
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 w-screen h-screen">
        <Image className="w-screen h-screen" source={require('../assets/images/back.jpg')} />
      </View>
      <View className="flex-1 pt-16 items-center">
        <Image source={require('../assets/images/logo.png')} />
        <Text style={styles.font} className="text-white text-2xl pt-1" >Welcome</Text>
        <Text style={styles.font} className="text-white text-2xl">to our store</Text>
        <Text style={styles.font} className="text-slate-300">Ger your groceries in as fast as one hour</Text>
        <View className="mt-14 w-11/12">
          <TouchableOpacity className="bg-green-500 items-center h-14 justify-center rounded-2xl" onPress={() => { navigation.navigate('Login') }}>
            <View>
              <Text style={styles.font} className="text-white text-lg">Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Welcome
const styles = StyleSheet.create({
  font: {
    fontFamily: 'Gilroy-Light'
  },
  width: {
    marginHorizontal: 20
  },
  icon: {
    position: 'absolute',
    top: '30%',
    left: '2%'
  },
  button: {
    width: '50%'
  }
})