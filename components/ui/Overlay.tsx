import { Colors } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";

export default function Overlay() {
  return <View style={styles.overlay}></View>;
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    backgroundColor: "#4ba764",
    width: "100%",
    opacity: 0.2,
    height: "100%",
    borderRadius: 12,
  },
});
