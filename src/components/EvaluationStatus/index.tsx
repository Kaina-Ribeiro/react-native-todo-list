import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type EvaluationStatusProps = { created: number; finished: number };

export function EvaluationStatus({ created, finished }: EvaluationStatusProps) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperScore}>
        <Text style={styles.created}>Criadas</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{created}</Text>
        </View>
      </View>

      <View style={styles.wrapperScore}>
        <Text style={styles.finished}>Concluídas</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{finished}</Text>
        </View>
      </View>
    </View>
  );
}
