import Overlay from "@/components/ui/Overlay";
import ThemedButton from "@/components/ui/ThemedButton";
import { ThemedText } from "@/components/ui/ThemedText";
import ViewRounded from "@/components/ui/ViewRounded";
import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedText
        type="title"
        style={[styles.title, { color: Colors.light.text }]}
      >
        Ma Journée
      </ThemedText>
      <ViewRounded>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("@/assets/images/heroHome.jpg")}
          />
          <Overlay />
        </View>
        <View>
          {["Raconter votre journée", "Un souvenir à la fois"].map(
            (text, index) => (
              <ThemedText
                key={index}
                type="italic"
                style={{ color: Colors.light.background }}
              >
                {text}
              </ThemedText>
            )
          )}
        </View>
        <View style={styles.buttonContainer}>
          <ThemedButton title="bob" />
          <ThemedButton
            type="withoutBackground"
            title="bob"
            textStyle={{ color: Colors.light.background }}
          />
        </View>
      </ViewRounded>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  title: {
    textAlign: "center",
    padding: 20,
  },
  imageContainer: {
    position: "relative",
    width: 300,
    height: 332,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 12,
  },
  buttonContainer: {
    width: "100%",
  },
});
