import Overlay from "@/components/ui/Overlay";
import { ThemedText } from "@/components/ui/ThemedText";
import ViewRounded from "@/components/ui/ViewRounded";
import { Colors } from "@/constants/Colors";
import { TextHome } from "@/constants/home/TextHome";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeBtnText } from "../constants/home/HomeBtnText";
import ThemedLink from "@/components/ui/ThemedLink";
import { GlobalStyle } from "@/constants/GlobalStyle";

export default function Home() {
  return (
    <View style={styles.container}>
      <ThemedText type="title" style={styles.title}>
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
        <View style={styles.linkContainer}>
          {HomeBtnText.map((text, index) => (
            <ThemedLink
              href={"/Login"}
              type={text.type}
              key={index}
              title={text.content}
            />
          ))}
        </View>
      </ViewRounded>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: Colors.light.background,
  },
  title: {
    textAlign: "center",
    marginVertical: 80,
    color: Colors.light.text,
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
    borderRadius: GlobalStyle.borderRadius,
  },
  linkContainer: {
    width: "100%",
    textAlign: "center",
  },
});
