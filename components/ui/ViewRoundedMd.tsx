import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

type ViewRoundedMdProps = {
  children: React.ReactNode;
};

export default function ViewRoundedMd({ children }: ViewRoundedMdProps) {
  return <View style={styles.view}>{children}</View>;
}

const styles = StyleSheet.create({
  view: {
    borderRadius: 12,
    // backgroundColor: Colors.light.background,
    flex: 1,
    overflow: "hidden",
  },
});
