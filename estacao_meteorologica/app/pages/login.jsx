import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import Logo from "../../assets/images/estacao.jpg";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <Text style={styles.titulo}>Bem-vindo</Text>
      <Text style={styles.subtitulo}>Faça login para continuar</Text>

      <TextInput
        style={styles.input}
        placeholder="Insira seu e-mail"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.replace("Principal")}
      >
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        onPress={() => navigation.navigate("Registro")}
      >
        <Text style={styles.textoSecundario}>Criar Conta</Text>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F8FB",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },

  logo: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E3A5F",
  },

  subtitulo: {
    fontSize: 15,
    color: "#666",
    marginBottom: 25,
  },

  input: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#D9E2EC",
  },

  botao: {
    width: "100%",
    backgroundColor: "#2D89EF",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  textoBotao: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  botaoSecundario: {
    marginTop: 15,
  },

  textoSecundario: {
    color: "#2D89EF",
    fontWeight: "bold",
  },
});