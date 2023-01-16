import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function EmptyComponent() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.clipboard}
        source={require("../../../assets/clipboard.png")}
      />
      <Text style={styles.listEmptyText}>
        <Text style={{ fontWeight: "700" }}>
          Você ainda não tem tarefas cadastradas
        </Text>
      </Text>

      <Text style={styles.listEmptyText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
