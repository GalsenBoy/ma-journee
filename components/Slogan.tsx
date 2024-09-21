import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ui/ThemedText";

export default function Slogan() {
  const slogansText: { text: string; type: "italic"; style: {} }[] = [
    {
      text: "Racontez votre journée,",
      type: "italic",
      style: {},
    },
    {
      text: "un souvenir à la fois.",
      type: "italic",
      style: { marginTop: 13 },
    },
  ];
  return (
    <View>
      <ThemedText style={styles.title} type="title">
        Bienvenue sur Ma journée
      </ThemedText>
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
  title: {
    textAlign: "center",
    marginBottom: 70,
  },
  slogan: {
    alignItems: "center",
  },
});
