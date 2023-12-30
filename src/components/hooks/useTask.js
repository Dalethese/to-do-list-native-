import { create } from "zustand";

const useTasks = create((set) => ({
  tasks: [],
  input: "",
  modalIsOpen: false,
  setTasks: (data) => set((state) => ({ tasks: data })),
  addTask: (addedTask) =>
    set((state) => ({ tasks: [...state.tasks, addedTask] })),
  toggleModal: () => set((state) => ({ modalIsOpen: !state.modalIsOpen })),
  setInput: (data) => set((state) => ({ input: data })),
  deleteTask: (task) =>
    set((state) => ({ tasks: state.tasks.filter((item) => task !== item) })),
}));

export default useTasks;
