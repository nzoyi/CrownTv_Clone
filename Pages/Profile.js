import React, { useEffect, useState, useCallback } from "react";
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
  Platform,
  ToastAndroid,
  Alert,
  ActivityIndicator,
} from "react-native";
import LottieView from "lottie-react-native";
import { auth } from "../Connection/firebase";
import firebase from "firebase";
import YoutubePlayer from "react-native-youtube-iframe";
import WebView from "react-native-webview";

import * as VideoThumbnails from "expo-video-thumbnails";
import COLORS from "../Colors/Colors";

const Profile = ({ navigation, route }) => {
  let data = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#000000"
        translucent={false}
      />

      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
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
