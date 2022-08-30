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

const VideoPlayer = ({ navigation, route }) => {
  let videoId = route.params;

  const [loading, setLoading] = React.useState(true);
  const [videoShow, setVideoShow] = React.useState(false);

  setTimeout(() => {
    try {
      setLoading(false);
      setVideoShow(true);
    } catch (error) {
      Alert.alert("Error", "Something went wrong");
    }
  }, 5000);

  const Loader = ({ visible = true }) => {
    return (
      visible && (
        <View
          style={{ height: 50, width: "100%", marginLeft: 20, marginRight: 20 }}
        >
          <View
            style={{
              height: 70,
              backgroundColor: COLORS.white,
              marginHorizontal: 50,
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <ActivityIndicator size="large" color="#00ff00" animating={true} />
            <Text style={{ marginLeft: 10, fontSize: 16 }}>Please Wait...</Text>
          </View>
        </View>
      )
    );
  };

  const ShowVideo = ({ visible = false }) => {
    return (
      visible && (
        <YoutubePlayer height={300} play={false} videoId={videoId} style={{}} />
      )
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#000000"
        translucent={false}
      />

      <View style={styles.container}>
        <Loader visible={loading} />
        <ShowVideo visible={videoShow} />
      </View>
    </SafeAreaView>
  );
};

export default VideoPlayer;

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
