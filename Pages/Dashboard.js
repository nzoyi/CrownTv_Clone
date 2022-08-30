import { useEffect, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  View,
  Image,
  Animated,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../Colors/Colors";
import { firebase } from "../Connection/firebase";
import { db } from "../Connection/firebase";

const Notification = ({ navigation, route }) => {
  /* let user = firebase.auth().currentUser;
  if (!user) {
    navigation.replace("Login");
  }*/

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#000000"
        translucent={false}
      />

      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{}}
        ></ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue_200,
  },
  footer: {
    height: "8%",
    backgroundColor: "#0d1338",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    elevation: 10,
  },
  floating: {
    flex: 1,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});
