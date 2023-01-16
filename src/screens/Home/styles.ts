import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingBottom: 24,
  },
  wrapper: {
    position: "relative",
    width: "100%",

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 50,
    marginBottom: 55,
  },
  list: {
    padding: 24,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  form: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    bottom: -28,
  },
  input: {
    flex: 1,
    marginRight: 4,
    height: 56,
    backgroundColor: "#262626",
    border: "1px solid #0D0D0D",
    borderRadius: 6,
    color: "#FDFCFE",
    padding: 16,
    fontSize: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
});
