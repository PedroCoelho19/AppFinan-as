import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";


const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,90",
    date: "05/09/2022",
    type: 0, //despesas
  },
  {
    id: 2,
    label: "PIX Cliente X",
    value: "2.500,00",
    date: "05/09/2022",
    type: 1, //receita/ entradas
  },
  {
    id: 3,
    label: "Salário",
    value: "7.500,00",
    date: "05/09/2022",
    type: 1, //receita/ entradas
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Pedro Coelho" />
      <Balance balance="9.250,00" spending="700.00" />
      <Actions/>
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
