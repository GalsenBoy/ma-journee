import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ui/ThemedText";
import { Colors } from "@/constants/Colors";

export default function Calendar() {
  return (
    <View style={styles.calendar}>
      <ThemedText type="subtitleLight">
        {new Date().toLocaleString("fr-FR", { weekday: "short" }).toUpperCase()}
      </ThemedText>
      <ThemedText type="miniTitle">{new Date().getDate()}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    height: 80,
    width: 75,
    backgroundColor: Colors.light.textTwo,
    borderRadius: 18,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
