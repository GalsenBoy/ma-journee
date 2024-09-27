import { feelings } from "@/constants/Feelings";
import { GlobalStyle } from "@/constants/GlobalStyle";
import { StyleSheet, View } from "react-native";

type CardProps = {
  type: keyof typeof feelings;
  children: React.ReactNode;
};

export default function Card({ type, children }: CardProps) {
  const bgColor = feelings[type];
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>{children}</View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: GlobalStyle.borderRadius,
    paddingLeft: 24,
    paddingRight: 10,
    paddingVertical: 13,
    marginBottom: 30,
  },
});
