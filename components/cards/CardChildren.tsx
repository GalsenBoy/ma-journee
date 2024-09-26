import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobalStyle";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ui/ThemedText";
import Calendar from "../Calendar";

type CardChildrenProps = {
  title: string;
  description: string;
  //   children: React.ReactNode;
};

export default function CardChildren({
  title,
  description,
}: CardChildrenProps) {
  return (
    <View style={styles.card}>
      <Calendar />
      <View style={styles.titles}>
        <ThemedText type="miniTitle">{title}</ThemedText>
        <ThemedText>{description}</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    flexDirection: "row",
    // justifyContent: "center",
    gap: 24,
    width: "80%",
  },
  titles: {
    flexDirection: "column",
    // paddingHorizontal: 10,
  },
});
