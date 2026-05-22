import {FlatList,Image, Text, View, StyleSheet, SafeAreaView} from "react-native";
import Header from './componentes/Header';
import tarefas from './dados/tarefas'

function ItemTarefa({item}){
  return(
    <View style={estilos.card}>
      <Image source={{uri: item.photo}} 
      style={estilos.foto}/>
      <View style={estilos.conteudo}>
        <View style={estilos.linha}>
          <Text style={estilos.titulo}>{item.title}</Text>
          <Text style={estilos.status}>{item.status}</Text>
        </View>
        <Text style={estilos.desc}>{item.description}</Text>
      </View>
    </View>
  )
}

export default function Index() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header titulo='Senai Tasks'/>
      <FlatList 
        data={tarefas}
        KeyExtractor={(item) => String(item.id)}
        renderItem={({item}) => <ItemTarefa item={item}/>}
        />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },

  lista: {
    padding: 16,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    marginBottom: 18,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,

    elevation: 5,
  },

  foto: {
    width: "100%",
    height: 180,
  },

  conteudo: {
    padding: 16,
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0F172A",
    flex: 1,
    marginRight: 10,
  },

  badge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
  },

  concluido: {
    backgroundColor: "#22C55E",
  },

  pendente: {
    backgroundColor: "#F59E0B",
  },

  status: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
  },

  desc: {
    fontSize: 15,
    color: "#475569",
    lineHeight: 22,
  },
});