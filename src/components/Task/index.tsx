import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type TaskProps = { name: string; onRemove: () => void };

export function Task({ name, onRemove }: TaskProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
