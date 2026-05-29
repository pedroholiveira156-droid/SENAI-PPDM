import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
// Mudei o nome da importação fictícia para fazer mais sentido, ajuste se necessário
import { profissionais } from '../dados/profissionais'; 

export default function Profissionais() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Equipe Médica 🩺</Text>
            
            <FlatList 
                data={profissionais || []} // Fallback caso esteja vazio
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.profName}>Dr(a). {item.nome || 'Profissional'}</Text>
                        <Text style={styles.specialtyText}>{item.especialidade || 'Veterinário(a)'}</Text>
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
        borderLeftWidth: 5,
        borderLeftColor: '#4A90E2', // Detalhe azul na lateral do card
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 3,
    },
    profName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2D3748',
        marginBottom: 4,
    },
    specialtyText: {
        fontSize: 14,
        color: '#718096',
        fontWeight: '500',
    },
});