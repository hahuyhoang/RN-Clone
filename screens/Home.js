import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';
import { useFonts } from "expo-font";

import ProDucts from './ProDucts';
import SearchBars from './SearchBar';


const Home = ({ navigation }) => {

  return (

    <SafeAreaView className="flex-1 mt-6 bg-white">
      <ScrollView>
        <View style={styles.width}>
          <View className="items-center">
            <Image className="w-7 h-8" source={require('../assets/images/Group.png')} />
            <View className="flex-row items-center">
              <Octicons name="location" size={24} color="black" />
              <Text className="ml-2" style={styles.font}>Dhaka, Banassre</Text>
            </View>
          </View>
          <SearchBars />
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
            <ProDucts />
            <ProDucts />
            <ProDucts />
          </View>
        </View>
      </ScrollView>
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