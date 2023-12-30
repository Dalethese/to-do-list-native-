import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171d31",
  },
  title: {
    marginTop: 30,
    paddingBottom: 10,
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
  },
  fab: {
    position: "absolute",
    bottom: 25,
    right: 25,
    width: 60,
    height: 60,
    backgroundColor: "#0094ff",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
});
