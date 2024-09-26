import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ui/ThemedText";
import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobalStyle";

export default function Calendar() {
  return (
    <View style={styles.calendar}>
      <ThemedText type="miniTitle">{new Date().getDate()}</ThemedText>
      <ThemedText type="subtitle">
        {new Date().toLocaleString("default", { weekday: "short" })}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    height: 65,
    width: 65,
    backgroundColor: Colors.light.textTwo,
    borderRadius: GlobalStyle.borderRadius,
    justifyContent: "center",
    alignItems: "center",
    // padding: 24,
    // marginBottom: 24,
  },
});
