import { Colors } from "@/constants/Colors";
import { View, StyleSheet } from "react-native";
import { Link, LinkProps } from "expo-router";
import { GlobalStyle } from "@/constants/GlobalStyle";

type ThemedLinkProps = LinkProps<any> & {
  type?: "default" | "withoutBackground";
  title: string;
  href: string;
};

export default function ThemedLink({
  href,
  type = "default",
  title,
}: ThemedLinkProps) {
  return (
    <View style={type === "default" ? styles.wrapper : undefined}>
      <Link
        href={href}
        style={[
          styles.common,
          type === "default" ? styles.default : undefined,
          type === "withoutBackground" ? styles.withoutBackground : undefined,
        ]}
      >
        {title}
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: GlobalStyle.borderRadius,
    overflow: "hidden",
  },
  common: {
    textAlign: "center",
    fontSize: 20,
  },
  default: {
    backgroundColor: Colors.light.darkText,
    color: Colors.light.text,
    paddingVertical: 15,
  },
  withoutBackground: {
    color: Colors.light.darkText,
    marginTop: 20,
  },
});
