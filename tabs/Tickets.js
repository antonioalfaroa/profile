import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const Tickets = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{color:'white'}}>Tickets</Text>
      </View>
    </SafeAreaView>
  )
}

export default Tickets

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})