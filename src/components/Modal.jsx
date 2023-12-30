import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import useTasks from "./hooks/useTask";

export const ModalComponent = () => {
  const { input, modalIsOpen } = useTasks((state) => ({
    input: state.input,
    tasks: state.tasks,
    modalIsOpen: state.modalIsOpen,
  }));

  const { toggleModal, addTask, setInput } = useTasks((state) => ({
    toggleModal: state.toggleModal,
    addTask: state.addTask,
    setInput: state.setInput,
  }));

  const handleAdd = () => {
    if (input === "") return;

    const data = {
      key: input,
      task: input,
    };

    addTask(data);
    toggleModal();
    setInput("");
  };

  return (
    <Modal animationType="slide" transparent={false} visible={modalIsOpen}>
      <SafeAreaView style={styles.modal}>
        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={toggleModal}>
            <Ionicons
              style={{ marginLeft: 5, marginRight: 5 }}
              name="md-arrow-back"
              size={40}
              color="#fff"
            />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Nova Tarefa</Text>
        </View>

        <View style={styles.modalBody}>
          <TextInput
            style={styles.input}
            multiline
            autoCorrect={false}
            placeholder="O que precisa fazer hoje?"
            placeholderTextColor="#747474"
            value={input}
            onChangeText={(text) => setInput(text)}
          />

          <TouchableOpacity style={styles.addBtn} onPress={handleAdd}>
            <Text style={styles.addBtnText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "#171d31",
  },
  modalHeader: {
    marginLeft: 10,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  modalTitle: {
    marginLeft: 15,
    fontSize: 23,
    color: "#fff",
  },
  modalBody: {
    marginTop: 15,
  },
  input: {
    height: 85,
    marginHorizontal: 10,
    marginTop: 30,
    padding: 9,
    backgroundColor: "#fff",
    borderRadius: 5,
    color: "#000",
    fontSize: 15,
    textAlignVertical: "top",
  },
  addBtn: {
    marginTop: 10,
    backgroundColor: "#0094ff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    height: 40,
    borderRadius: 5,
  },
  addBtnText: {
    fontSize: 20,
  },
});
