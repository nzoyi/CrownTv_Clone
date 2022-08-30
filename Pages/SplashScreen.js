import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, ToastAndroid, AlertIOS } from "react-native";
import LottieView from "lottie-react-native";
import { auth } from "../Connection/firebase";
import firebase from "firebase";

const SplashScreen = ({ navigation, route }) => {
  setTimeout(() => {
    /*let user = firebase.auth().currentUser;
    if (user) {
      navigation.replace("Home");
    } else {
      navigation.replace("Login");
    }*/
    navigation.replace("Dashboard");
  }, 5000);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ffffff",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image style={styles.image} source={require("../assets/CrownTV.png")} />
      <LottieView
        style={styles.Anime}
        source={require("../assets/loading_anim.json")}
        autoPlay
        loop={true}
        width={200}
        resizeMode="contian"
        onAnimationFinish={() => {
          console.log("Animation Finished!");
          //this.props.navigation.replace('Login');
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  Anime: {
    justifyContent: "center",
    width: 200,
    alignItems: "center",
    alignContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    alignContent: "center",
  },
});
