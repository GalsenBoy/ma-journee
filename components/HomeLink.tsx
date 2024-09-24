import { Colors } from "@/constants/Colors";
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { GlobalStyle } from "@/constants/GlobalStyle";

export default function HomeLink() {
  return (
    <View style={styles.view}>
      <Link href={"/SignUp"} style={[styles.common, styles.default]}>
        S'inscrire
      </Link>
      <Link href={"/SignIn"} style={[styles.common, styles.withoutBackground]}>
        Se connecter
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    width: "100%",
  },
  common: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    overflow: "hidden",
  },
  default: {
    backgroundColor: Colors.light.text,
    color: Colors.light.background,
    borderRadius: GlobalStyle.borderRadius,
    paddingVertical: 13,

    width: "85%",
  },
  withoutBackground: {
    color: Colors.light.text,
    marginVertical: 20,
  },
});
