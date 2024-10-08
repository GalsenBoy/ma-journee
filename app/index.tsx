import HomeLink from "@/components/HomeLink";
import Slogan from "@/components/Slogan";
import { ImageBackground, StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("@/assets/images/hero2.jpeg")}
      >
        <View style={styles.view}>
          <Slogan />
          <HomeLink />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    paddingTop: 100,
    backgroundColor: "rgba(251, 251, 251, 0.2)",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
});
