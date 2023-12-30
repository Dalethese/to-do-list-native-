import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { TaskList } from "./src/components/TaskList";
import { ModalComponent } from "./src/components/Modal";
import useTasks from "./src/components/hooks/useTask";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [tasks, setTasks, toggleModal] = useTasks((state) => [
    state.tasks,
    state.setTasks,
    state.toggleModal,
  ]);

  useEffect(() => {
    async function loadTasks() {
      const taskStorage = JSON.parse(await AsyncStorage.getItem("@task"));

      if (taskStorage) {
        setTasks(taskStorage);
      }
    }

    loadTasks();
  }, []);

  useEffect(() => {
    async function saveTasksOnStorage() {
      await AsyncStorage.setItem("@task", JSON.stringify(tasks));
    }

    saveTasksOnStorage();
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#171d31" />

      <View style={styles.content}>
        <Text style={styles.title}>Minhas Tarefas</Text>
      </View>

      {tasks.length < 1 ? (
        <Text style={{ color: "#fff", marginTop: 20, textAlign: "center" }}>
          Adicione uma tarefa !
        </Text>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          marginHorizontal={10}
          data={tasks}
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => <TaskList data={item} />}
        />
      )}

      <ModalComponent />

      <Animatable.View
        style={styles.fab}
        animation="bounceInUp"
        useNativeDriver
        duration={1500}
      >
        <TouchableOpacity
          onPress={() => {
            toggleModal();
          }}
        >
          <Ionicons name="ios-add" size={35} color="#fff" />
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
}
