import { Colors } from "@/constants/Colors";
import { ViewProps, View, StyleSheet, ScrollView } from "react-native";

type ViewRoundedProps = ViewProps & {
  children: React.ReactNode;
};

export default function ViewRounded({ children }: ViewRoundedProps) {
  return <View style={styles.view}>{children}</View>;
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: Colors.light.text,
    alignItems: "center",
    // justifyContent: "center",
    padding: 30,
    justifyContent: "space-between",
    // overflow: "hidden",
  },
});
