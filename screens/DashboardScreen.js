import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function DashboardScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panel Principal</Text>

      <TouchableOpacity
        style={styles.cardButton}
        onPress={() => navigation.navigate('LecturaAmbiente')}
      >
        <Ionicons name="water-outline" size={28} color="#34c759" />
        <Text style={styles.cardTitle}>Lectura del Ambiente</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardButton}
       onPress={() => navigation.navigate('DashboardDatos')}>
      
        <Ionicons name="analytics-outline" size={28} color="#ff9f0a" />
        <Text style={styles.cardTitle}>Dashboard de Datos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardButton}
      onPress={() => navigation.navigate('About')}>
        <Ionicons name="information-circle-outline" size={28} color="#007aff" />
        <Text style={styles.cardTitle}>Acerca de la App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  cardButton: {
    backgroundColor: '#2c2c2e',
    padding: 20,
    borderRadius: 12,
    marginVertical: 10,
    width: '85%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
