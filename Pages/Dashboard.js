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
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../Colors/Colors";
import { firebase } from "../Connection/firebase";
import { db } from "../Connection/firebase";
import { Video } from "expo-av";
import { Linking } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import WebView from "react-native-webview";
import { Button } from "react-native";
import * as VideoThumbnails from "expo-video-thumbnails";

function showToast(msg) {
  if (Platform.OS === "android") {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  } else {
    AlertIOS.alert(msg);
  }
}

const Dashboard = ({ navigation, route }) => {
  /* let user = firebase.auth().currentUser;
  if (!user) {
    navigation.replace("Login");
  }*/

  const [loadVideos, setLoadVideos] = useState([]);
  const video = React.useRef(null);

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const itemsRef2 = db.ref("CrownTv/Videos");

  function VideoLoader() {
    let isMounted = true;
    itemsRef2.on("value", (snapshot) => {
      if (isMounted) {
        var loadVideos = [];
        snapshot.forEach((child) => {
          loadVideos.push({
            id: child.key,
            key: child.val(),
          });
        });
        setLoadVideos(loadVideos);
        //console.log(loadVideos);
      }
    });
    return () => {
      isMounted = false;
    };
  }

  useEffect(() => {
    VideoLoader();
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const [image, setImage] = useState([]);

  const generateThumbnail = async (url) => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(url, {
        time: 15000,
      });
      setImage(uri);
      console.log(uri);
    } catch (e) {
      console.warn(e);
    }
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            blurRadius={5}
            imageStyle={{
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
              elevation: 5,
            }}
            style={{
              height: 300,
              width: "100%",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
            }}
            source={require("../assets/imagebg.jpg")}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                position: "absolute",
                borderRadius: 30,
              }}
            >
              <Image
                source={require("../assets/CrownTV.png")}
                style={{
                  width: 80,
                  height: 80,
                }}
              />
            </View>
          </ImageBackground>
          {loadVideos.map((videos, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("VideoPlayer", videos.key.url)}
              key={index}
            >
              <View
                style={{
                  margin: 5,
                  borderRadius: 20,
                  backgroundColor: COLORS.white,
                  elevation: 10,
                  minHeight: 200,
                }}
              >
                <ImageBackground
                  source={{
                    uri: `https://i.ytimg.com/vi/${videos.key.url}/hqdefault.jpg`,
                  }}
                  style={{
                    width: "100%",
                    height: 200,
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  imageStyle={{ borderRadius: 20 }}
                >
                  <Icon
                    name="play-circle-outline"
                    size={60}
                    style={{ color: "red" }}
                  />
                </ImageBackground>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.footer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              alignSelf: "center",
              width: "100%",
            }}
          >
            <Pressable onPress={() => navigation.replace("Dashboard")}>
              <View
                style={{
                  flexDirection: "column",
                  alignContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="home" size={25} style={{ color: "white" }} />
                <Text style={{ color: "white" }}>Home</Text>
              </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Streaming")}>
              <View
                style={{
                  flexDirection: "column",
                  alignContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="movie-creation"
                  size={25}
                  style={{ color: "white" }}
                />
                <Text style={{ color: "white" }}>Streaming</Text>
              </View>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Programs")}>
              <View
                style={{
                  flexDirection: "column",
                  alignContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="notes" size={25} style={{ color: "white" }} />
                <Text style={{ color: "white" }}>Programs</Text>
              </View>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Profile")}>
              <View
                style={{
                  flexDirection: "column",
                  alignContent: "center",
                  alignSelf: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="account-circle"
                  size={25}
                  style={{ color: "white" }}
                />
                <Text style={{ color: "white" }}>Profile</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  floating: {
    flex: 1,
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  footer: {
    height: "8%",
    backgroundColor: "red",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    elevation: 10,
  },
});
