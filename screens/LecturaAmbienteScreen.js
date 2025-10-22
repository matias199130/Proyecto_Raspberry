import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text, Button, ActivityIndicator } from "react-native";
import axios from "axios";
import SensorGauge from "../components/SensorGauge";

export default function LecturaAmbienteScreen() {
  const [data, setData] = useState({ humedad: null, temperatura: null });
  const [loading, setLoading] = useState(true);
  const [conexionFallida, setConexionFallida] = useState(false);

  const obtenerDatos = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://192.168.0.15:5000/sensor"); // IP Raspberry
      setData(res.data);
      setConexionFallida(false); // Si responde bien, se limpia el estado de error
    } catch {
      // Solo muestra alerta una vez
      if (!conexionFallida) {
        alert("⚠️ No se pudo conectar con el sensor.\nVerificá la IP o la red.");
        setConexionFallida(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lectura del Ambiente</Text>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#34c759" />
          <Text style={styles.loadingText}>
            {conexionFallida
              ? "Sensor no disponible actualmente."
              : "Conectando con el sensor..."}
          </Text>
        </View>
      ) : (
        <>
          <View style={styles.row}>
            <SensorGauge
              icon="water"
              label="Humedad"
              value={data.humedad ?? 0}
              unit="%"
              color="#34c759"
              maxValue={100}
            />
            <SensorGauge
              icon="thermometer"
              label="Temperatura"
              value={data.temperatura ?? 0}
              unit="°C"
              color="#ff9f0a"
              maxValue={50}
            />
          </View>
        </>
      )}

      <View style={{ marginVertical: 20 }}>
        <Button
          title="Reintentar conexión"
          onPress={obtenerDatos}
          color="#007aff"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#1c1c1e",
    paddingBottom: 30,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 60,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  loadingText: {
    color: "#aaa",
    marginTop: 10,
    fontSize: 16,
  },
});
