import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobalStyle";
import { StyleSheet, View } from "react-native";

type CardProps = {
  type?: string;
  children: React.ReactNode;
};

export default function Card({ type, children }: CardProps) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    height: 130,
    backgroundColor: Colors.light.bgVive,
    borderRadius: GlobalStyle.borderRadius,
    marginBottom: 24,
    overflow: "hidden",
  },
});
