import HomeLink from "@/components/HomeLink";
import Slogan from "@/components/Slogan";
import { ThemedText } from "@/components/ui/ThemedText";
import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <Image source={require("@/assets/images/home.png")} />
        <View>
          <Slogan />
        </View>
        <HomeLink />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  view: {
    flex: 1,
    justifyContent: "space-around",
  },
  title: {
    textAlign: "center",
  },
});
