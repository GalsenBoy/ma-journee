import Overlay from "@/components/ui/Overlay";
import ThemedButton from "@/components/ui/ThemedButton";
import { ThemedText } from "@/components/ui/ThemedText";
import ViewRounded from "@/components/ui/ViewRounded";
import { Colors } from "@/constants/Colors";
import { TextHome } from "@/constants/home/TextHome";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <View style={styles.container}>
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
          {TextHome.map((text, index) => (
            <ThemedText
              key={index}
              type="italic"
              style={{
                color: Colors.light.darkText,
                marginBottom: text.marginBottom,
              }}
            >
              {text.content}
            </ThemedText>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <ThemedButton
            title="S'inscrire"
            textStyle={{ color: Colors.light.text }}
          />
          <ThemedButton
            textStyle={{ color: Colors.light.darkText, marginTop: 15 }}
            type="withoutBackground"
            title="Se connecter"
          />
        </View>
      </ViewRounded>
    </View>
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
    marginTop: 30,
    marginBottom: 50,
    width: 250,
    height: 282,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 12,
  },
  buttonContainer: {
    width: "100%",
    textAlign: "center",
  },
});
