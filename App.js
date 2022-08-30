import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./Pages/Dashboard";
import SplashScreen from "./Pages/SplashScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="SplashScreen" component={SplashScreen}></Screen>
        <Screen name="SplashScreen" component={Dashboard}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
