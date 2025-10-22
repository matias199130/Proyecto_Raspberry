import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SensorCard({ icon, label, value, unit, color }) {
  return (
    <View style={[styles.card, { borderLeftColor: color || '#34c759' }]}>
      <Ionicons name={icon} size={30} color={color || '#34c759'} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>
          {value}
          <Text style={styles.unit}> {unit}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2c2c2e',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    borderLeftWidth: 5,
    width: '90%',
    alignSelf: 'center',
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    color: '#ccc',
    fontSize: 14,
  },
  value: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  unit: {
    color: '#aaa',
    fontSize: 16,
  },
});
