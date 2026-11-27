import { View, Text, FlatList, StyleSheet } from 'react-native';

const medicoes = [
  { id: 1, temp: 30, hum: 50, vento: 20, mes: 'Jan' },
  { id: 2, temp: 32, hum: 58, vento: 24, mes: 'Fev' },
  { id: 3, temp: 28, hum: 60, vento: 25, mes: 'Mar' },
  { id: 4, temp: 23, hum: 70, vento: 22, mes: 'Abr' },
];

function ItemLista({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.mes}>{item.mes}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.info}>🌡️ Temperatura: {item.temp}°C</Text>
        <Text style={styles.info}>💧 Umidade: {item.hum}%</Text>
        <Text style={styles.info}>🌬️ Vento: {item.vento} km/h</Text>
      </View>
    </View>
  );
}

export default function Relatorio() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Relatório de Medições Meteorológicas
      </Text>

      <FlatList
        data={medicoes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ItemLista item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FB',
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1E3A5F',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  mes: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0077B6',
    marginBottom: 10,
  },

  infoContainer: {
    gap: 5,
  },

  info: {
    fontSize: 16,
    color: '#333',
  },
});