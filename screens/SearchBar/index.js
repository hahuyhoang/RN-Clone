import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'


import { EvilIcons } from '@expo/vector-icons';
const SearchBars = () => {
    return (
        <View className="mt-3">
            <TextInput style={[styles.input, { fontFamily: 'Gilroy-Light' }]} className="rounded-xl bg-gray-200 h-12 pl-9" placeholder='Search Store' />
            <EvilIcons style={styles.icon} className="mt-2" name="search" size={24} color="black" />
            
        </View>
    )
}

export default SearchBars
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