import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "../ui/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.profil}>
        <Image
          source={require("@/assets/images/hero.jpeg")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <ThemedText style={{ marginBottom: 5 }} type="subtitle">
          Bonjour 👋{" "}
        </ThemedText>
        <ThemedText type="subtitle">Naomie</ThemedText>
      </View>
      <Ionicons name="notifications-outline" size={30} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 35,
  },
  profil: {
    width: 45,
    height: 45,
    borderRadius: 75,
    overflow: "hidden",
  },
});
