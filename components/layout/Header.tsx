import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ui/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function Header() {
  return (
    <View style={styles.container}>
      <ThemedText>Bonjour 👋 Noémie</ThemedText>
      <Ionicons name="notifications-outline" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
