import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./Pages/Dashboard";
import SplashScreen from "./Pages/SplashScreen";
import VideoPlayer from "./Pages/VideoPlayer";
import Programs from "./Pages/Programs";
import Streaming from "./Pages/Streaming";
import { Profile } from "./Pages/Profile";
const { Navigator, Screen } = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="SplashScreen" component={SplashScreen}></Screen>
        <Screen name="Dashboard" component={Dashboard}></Screen>
        <Screen name="VideoPlayer" component={VideoPlayer}></Screen>
        <Screen name="Programs" component={Programs}></Screen>
        <Screen name="Streaming" component={Streaming}></Screen>
        <Screen name="Profile" component={Profile}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
