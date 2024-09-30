import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./ui/ThemedText";

export default function AgendaChildren() {
  return (
    <View>
      <View style={styles.agenda}>
        <ThemedText>
          {new Date()
            .toLocaleString("fr-FR", { weekday: "short" })
            .toUpperCase()}
        </ThemedText>
        <ThemedText type="subtitle">{new Date().getDate()}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  agenda: {
    alignItems: "center",
    gap: 10,
    borderRadius: 20,
    borderWidth: 1,
    fontSize: 24,
    width: 50,
    height: 70,
  },
});
