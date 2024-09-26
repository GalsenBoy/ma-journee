import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ui/ThemedText";
import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobalStyle";

export default function Calendar() {
  return (
    <View style={styles.calendar}>
      <ThemedText type="subtitle">{new Date().getDate()}</ThemedText>
      <ThemedText type="subtitleLight">
        {new Date()
          .toLocaleString("fr-FR", { weekday: "short" })
          .replace(".", "")}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    height: 85,
    width: 75,
    backgroundColor: Colors.light.textTwo,
    borderRadius: 18,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
