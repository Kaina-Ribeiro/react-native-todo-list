import { StatusBar } from "react-native";
import Home from "./src/screens/Home";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Inter: require("./assets/fonts/Inter.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <>
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
