import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  created: {
    fontWeight: "bold",
    color: "#4EA8DE",
    fontSize: 14,
  },
  finished: {
    color: "#8284FA",
    fontWeight: "bold",
    fontSize: 14,
  },
  counter: {
    marginLeft: 8,
    backgroundColor: "#333333",
    borderRadius: 999,
    paddingTop: 2,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 2,
  },
  counterText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  wrapperScore: { flexDirection: "row" },
});
