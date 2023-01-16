import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderTopColor: "#333333",
    borderTopWidth: 1,
    marginTop: 20,
    paddingTop: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  clipboard: {
    marginBottom: 16,
  },
  listEmptyText: {
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
