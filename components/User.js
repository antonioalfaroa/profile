import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const User = ({iconName, iconPen}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Ionicons name={iconName} size={24} color='white' style={styles.icon} />
      </View>
      <View style={styles.user}>
        <Text style={styles.text}>Nicolas Ramella</Text>
        <Text style={styles.number}>+1 201 304 6705</Text>
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name={iconPen} size={24} color='white' style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

export default User;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderRadius: 50,
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 16,
        justifyContent: 'space-between',
    },
    user:{
        flexDirection:'column',
        marginLeft: 70,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderColor: 'white',
        borderWidth: 1,
    },
    profileContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        position: 'absolute',
        marginLeft: 10,
    },
    text: {
        color:'white',
        fontWeight: '600',
        fontSize: 20,
    },
    number: {
        color:'white',
        fontWeight: '300',
        fontSize: 20,
    }

})