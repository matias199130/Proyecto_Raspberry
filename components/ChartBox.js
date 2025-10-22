import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function ChartBox({ title, data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <LineChart
        data={{
          labels: data.labels || ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
          datasets: [
            {
              data: data.values || [45, 52, 47, 55, 60],
              color: () => '#34c759', // color de línea
              strokeWidth: 2,
            },
          ],
        }}
        width={Dimensions.get('window').width - 40}
        height={220}
        yAxisSuffix="%"
        chartConfig={{
          backgroundColor: '#1c1c1e',
          backgroundGradientFrom: '#1c1c1e',
          backgroundGradientTo: '#2c2c2e',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 12,
          },
          propsForDots: {
            r: '5',
            strokeWidth: '2',
            stroke: '#34c759',
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c2c2e',
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 4,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chart: {
    borderRadius: 12,
  },
});
