import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{color:'white'}}>Search</Text>
      </View>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})