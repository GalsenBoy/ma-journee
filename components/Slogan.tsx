import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ui/ThemedText";

export default function Slogan() {
  const slogansText: { text: string; type: "italic"; style?: {} }[] = [
    {
      text: "Racontez votre journée,",
      type: "italic",
    },
    {
      text: "un souvenir à la fois.",
      type: "italic",
      style: { marginTop: 13 },
    },
  ];
  return (
    <View>
      <View style={styles.slogan}>
        {slogansText.map((slogan, index) => (
          <ThemedText style={slogan.style} key={index} type={slogan.type}>
            {slogan.text}
          </ThemedText>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slogan: {
    alignItems: "center",
  },
});
