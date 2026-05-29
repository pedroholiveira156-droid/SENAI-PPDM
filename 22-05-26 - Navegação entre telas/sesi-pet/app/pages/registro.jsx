import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

export default function Registro({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfiSenha] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Cadastro 📝</Text>
                <Text style={styles.subtitle}>Crie sua conta no Sesi Pet</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Insira seu e-mail'
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />    
                <TextInput
                    style={styles.input}
                    placeholder='Insira sua senha'
                    placeholderTextColor="#999"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    placeholder='Confirme sua senha'
                    placeholderTextColor="#999"
                    value={confSenha}
                    onChangeText={setConfiSenha}
                    secureTextEntry
                />
    
                <TouchableOpacity style={styles.buttonPrimary} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonPrimaryText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonSecondaryText}>Voltar para o Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#FFF',
        borderRadius: 16,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1A202C',
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: '#718096',
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        backgroundColor: '#EDF2F7',
        borderRadius: 8,
        padding: 14,
        fontSize: 16,
        color: '#2D3748',
        marginBottom: 16,
    },
    buttonPrimary: {
        backgroundColor: '#2ECC71', // Verde para sucesso/cadastro
        borderRadius: 8,
        padding: 14,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonPrimaryText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonSecondary: {
        marginTop: 16,
        alignItems: 'center',
    },
    buttonSecondaryText: {
        color: '#718096',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});