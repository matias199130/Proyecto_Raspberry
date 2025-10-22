import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import axios from "axios";

export default function SensorScreen({ navigation }) {
  const [data, setData] = useState({ humedad: null, temperatura: null });

  const obtenerDatos = async () => {
    try {
      const res = await axios.get("http://192.168.0.15:5000/sensor"); // IP de la Raspberry
      setData(res.data);
    } catch {
      alert("No se pudo conectar con el sensor.");
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lecturas del ambiente</Text>
      <Text style={styles.value}>💧 Humedad: {data.humedad ?? "--"}%</Text>
      <Text style={styles.value}>
        🌡️ Temperatura: {data.temperatura ?? "--"}°C
      </Text>
      <Button
        title="Ver Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  value: { fontSize: 22, marginBottom: 10 },
});
