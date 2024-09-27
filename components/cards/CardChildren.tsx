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
        <ThemedText type="miniTitle" style={{ marginBottom: 5 }}>
          {title}
        </ThemedText>
        <ThemedText numberOfLines={2} ellipsizeMode="tail">
          {description}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  titles: {
    flexShrink: 1,
  },
});
