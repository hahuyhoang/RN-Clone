import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProDucts = () => {
  return (
    <SafeAreaView className="bg-white mt-6 ">
      <View style={styles.width}>
        <TouchableOpacity className="rounded-2xl w-36 h-56 border-2 border-gray-400">
            <View className="items-center pt-5">
              <Image source={require('../assets/images/product_2.png')} />
            </View>
            <Text className="pl-2 pt-3 " style={styles.font}>
                Hello
            </Text>
            <Text className="pl-2 text-gray-400" style={styles.font}>
                7prc,1kg
            </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ProDucts
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