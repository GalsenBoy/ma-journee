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
      style: { marginTop: 10 },
    },
  ];
  return (
    <View>
      <ThemedText style={{ textAlign: "center" }} type="title">
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
  slogan: {
    marginTop: 25,
    alignItems: "center",
  },
});
