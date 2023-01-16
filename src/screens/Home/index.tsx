import { useState } from "react";

import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { EmptyComponent } from "../../components/EmptyComponent";
import { EvaluationStatus } from "../../components/EvaluationStatus";
import { Task } from "../../components/Task";

import { styles } from "./styles";

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);

  const [taskName, setTaskName] = useState("");

  const handleTaskAdd = (name: string) => {
    if (name === "") {
      Alert.alert(
        "Insira um nome para a tarefa",
        "O nome da tarefa não pode estar vazia!"
      );
      return;
    } else if (tasks.includes(name)) {
      Alert.alert(
        "Tarefa já existente",
        "Já existe uma task na lista com esse nome!"
      );
      return;
    }

    setTasks((prevState) => [...prevState, name]);
    setTaskName("");
  };

  const handleTaskRemove = (name: string) => {
    Alert.alert("Remover", `Remover a tarefa ${name}?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) => prevState.filter((task) => task !== name));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <Image
            style={{ width: 110, height: 32 }}
            source={require("./logo.png")}
          />
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#6B6B6B"
            onChangeText={setTaskName}
            value={taskName}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleTaskAdd(taskName)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.list}>
        <EvaluationStatus created={1} finished={0} />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              name={item}
              onRemove={() => handleTaskRemove(item)}
            />
          )}
          ListEmptyComponent={() => <EmptyComponent />}
        />
      </View>
    </View>
  );
}
