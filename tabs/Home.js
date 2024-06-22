import { StyleSheet, ScrollView, SafeAreaView, Text, View } from "react-native";
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text style={{color:'white'}}>Home</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  }
})