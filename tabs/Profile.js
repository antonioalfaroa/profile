import { StyleSheet, Text, View, SafeAreaView, ScrollView, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Options from '../components/Options';
import User from '../components/User';
import StarRating from 'react-native-star-rating-widget';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);

  const handleFeedbackPress = () => {
    setModalVisible(true);
  };

  const handlePanGesture = ({ nativeEvent }) => {
    if (nativeEvent.translationY > 50) {
      setModalVisible(false);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.elements}>
            <Text style={styles.title}>Account</Text>
            <User iconName='person' iconPen='pencil' />
            <Options iconName='book' title='How to use Portalys' onPress={() => {}} />
            <Options iconName='share-social' title='Share the app' onPress={() => {}} />
            <Options iconName='star' title='Rate the app' onPress={() => {}} />
            <Options iconName='chatbubble-ellipses' title='Give us your feedback' onPress={handleFeedbackPress} />
            <Options iconName='document-text' title='Terms and Conditions' onPress={() => {}} />
            <Options iconName='help-circle' title='Need help? Get in touch' onPress={() => {}} />
            <Options iconName='log-out' title='Log Out' onPress={() => {}} />
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <PanGestureHandler onGestureEvent={handlePanGesture}>
              <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                  <View style={styles.modalHandle} />
                  <Text style={styles.modalText}>How's portrait going for you?</Text>
                  <StarRating
                    rating={rating}
                    onChange={setRating}
                    color="white"
                    style={styles.stars}
                  />
                </View>
              </View>
            </PanGestureHandler>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 25,
    marginLeft: 20,
  },
  elements: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderColor: 'white',
    borderWidth: 0.5,
  },
  modalHandle: {
    width: 40,
    height: 5,
    backgroundColor: 'gray',
    borderRadius: 2.5,
    marginBottom: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  stars: {
    borderWidth: 1,
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    borderColor: 'white',
  },
});
