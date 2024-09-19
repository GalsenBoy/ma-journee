import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

export default function Overlay() {
  return <View style={styles.overlay}></View>;
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    backgroundColor: Colors.light.text,
    width: "100%",
    opacity: 0.5,
    height: "100%",
    borderRadius: 12,
  },
});
