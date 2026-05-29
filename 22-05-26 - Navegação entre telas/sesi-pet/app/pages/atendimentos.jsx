import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { atendimentos } from '../dados/profissionais';

export default function Atendimentos() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Meus Atendimentos 🗓️</Text>
            
            <FlatList 
                data={atendimentos}
                keyExtractor={(item) => item.id.toString()} // Garante que o ID seja string
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.petName}>🐶 {item.pet}</Text>
                            <View style={styles.timeBadge}>
                                <Text style={styles.timeText}>{item.horario}</Text>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <Text style={styles.serviceText}>
                            <Text style={styles.boldLabel}>Serviço: </Text>{item.servico}
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1A202C',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    listContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    petName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2D3748',
    },
    timeBadge: {
        backgroundColor: '#EBF8FF',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
    },
    timeText: {
        color: '#2B6CB0',
        fontWeight: '600',
        fontSize: 14,
    },
    divider: {
        height: 1,
        backgroundColor: '#EDF2F7',
        verticalMargin: 12, // Nota: use marginVertical no RN antigo, ou marginBlock no mais recente.
        marginVertical: 12,
    },
    serviceText: {
        fontSize: 15,
        color: '#4A5568',
    },
    boldLabel: {
        fontWeight: '600',
        color: '#718096',
    },
});