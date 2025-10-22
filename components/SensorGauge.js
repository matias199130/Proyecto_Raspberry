import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Ionicons } from '@expo/vector-icons';

export default function SensorGauge({ icon, label, value, unit, color, maxValue = 100 }) {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={150}
        width={12}
        fill={(value / maxValue) * 100}
        tintColor={color}
        backgroundColor="#333"
        rotation={0}
        lineCap="round"
        duration={1200}
      >
        {() => (
          <View style={styles.center}>
            <Ionicons name={icon} size={28} color={color} />
            <Text style={styles.value}>
              {value}
              <Text style={styles.unit}>{unit}</Text>
            </Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 6,
  },
  unit: {
    fontSize: 14,
    color: '#aaa',
  },
  label: {
    color: '#ddd',
    fontSize: 16,
    marginTop: 8,
  },
});
