import { StyleSheet, View } from "react-native";
import Rotas from './routes/navigation';

export default function Index() {
    return (
        <View style={styles.container}>
            <Rotas />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA', // Mesma cor de fundo padrão das telas
    },
});