import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';
import { useFonts } from "expo-font";
import { EvilIcons } from '@expo/vector-icons';
import ProDucts from './ProDucts';
const Home = ({ navigation }) => {
  
  return (
    <SafeAreaView className="flex-1 mt-6 bg-white">
      <View style={styles.width}>
        <View className="items-center">
          <Image className="w-7 h-8" source={require('../assets/images/Group.png')} />
          <View className="flex-row items-center">
            <Octicons name="location" size={24} color="black" />
            <Text className="ml-2" style={styles.font}>Dhaka, Banassre</Text>
          </View>
        </View>
        <View className="mt-3">
          <TextInput style={styles.input} className="rounded-xl bg-gray-200 h-12 pl-9" placeholder='Search Store' />
          <EvilIcons style={styles.icon} className="mt-2" name="search" size={24} color="black" />
        </View>
        <View>
          <Image className="w-full h-40 mt-5" source={require('../assets/images/banner.png')} />
        </View>
        <View >
          <View className="flex-row justify-between mt-7">
            <Text className="text-lg" style={styles.font}>Exclusive Offer</Text>
            <TouchableOpacity>
              <Text className="text-green-300" style={styles.font}>See All</Text>
            </TouchableOpacity>
          </View>
          <ProDucts />
        </View>
      </View>
    </SafeAreaView>
  )
}


export default Home

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
  }
})