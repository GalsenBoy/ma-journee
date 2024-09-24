import HomeLink from "@/components/HomeLink";
import Slogan from "@/components/Slogan";
import { ImageBackground, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
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
    backgroundColor: "rgba(100, 110, 110, 0.6)",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    flex: 1,
  },
});
