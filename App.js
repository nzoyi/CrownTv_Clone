import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "../CrownTv/Pages/Dashboard";

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="SplashScreen" component={Dashboard}></Screen>
      </Navigator>
    </NavigationContainer>
  );
}
