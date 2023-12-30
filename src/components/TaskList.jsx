import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import useTasks from "./hooks/useTask";

export const TaskList = ({ data }) => {
  const deleteTask = useTasks((state) => state.deleteTask);

  return (
    <Animatable.View
      style={styles.container}
      animation="bounceIn"
      useNativeDriver
    >
      <TouchableOpacity onPress={() => deleteTask(data)}>
        <Ionicons name="md-checkmark-circle" size={30} color="#121212" />
      </TouchableOpacity>
      <View>
        <Text style={styles.taskText}>{data.task}</Text>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 7,
    elevation: 0.5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  taskText: {
    color: "#121212",
    fontSize: 20,
    paddingLeft: 8,
    paddingRight: 20,
  },
});
