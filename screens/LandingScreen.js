import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function LandingScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>🌦️ HumedApp</Text>
        <Text style={styles.subtitle}>Monitoreo ambiental con Raspberry</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover", justifyContent: "center" },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 40, color: "white", fontWeight: "bold" },
  subtitle: { fontSize: 18, color: "white", marginVertical: 10 },
  button: {
    marginTop: 20,
    backgroundColor: "#4caf50",
    padding: 12,
    borderRadius: 10,
  },
  buttonText: { color: "white", fontSize: 18 },
});
