// Tabs/Options.js
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Options = ({ title, iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={24} color='white' style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 30,
    padding: 15,
    marginVertical: 5,
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: 16,
  },
  iconContainer:{
    width: 40,
    height:40,
    borderRadius:20,
    backgroundColor:'gray',
    alignItems:'center',
    justifyContent:'center',
    marginRight:10,
    position:'absolute',
    left:6,
  },
  title: {
    fontSize: 18,
    color: 'white',
    marginLeft: 40,
  },
});
