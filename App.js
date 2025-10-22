import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import SensorScreen from "./screens/SensorScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DashboardScreen from "./screens/DashboardScreen";
import AboutScreen from "./screens/AboutScreen";
import LecturaAmbienteScreen from "./screens/LecturaAmbienteScreen";
import DashboardDatosScreen from "./screens/DashboardDatosScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer style={styles.safeArea}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Sensor" component={SensorScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="DashboardDatos" component={DashboardDatosScreen} />
          <Stack.Screen name="LecturaAmbiente" component={LecturaAmbienteScreen}  />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0202edff",
    paddingTop: 40,
    paddingBottom: 40,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});
