import { View, Text, StyleSheet } from 'react-native';
import ChartBox from '../components/ChartBox';

export default function DashboardDatosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard de Datos</Text>
      <ChartBox title="Histórico de Temperatura" data={{ values: [21, 22, 24, 23, 25] }} />
      <ChartBox title="Histórico de Humedad" data={{ values: [55, 57, 60, 58, 62] }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1e',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    marginVertical: 60,
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
