import { Colors } from "@/constants/Colors";
import { Text, type TextProps, StyleSheet } from "react-native";

export type ThemedTextProps = TextProps & {
  // lightColor?: string;
  // darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "italic";
};

export function ThemedText({
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "italic" ? styles.italic : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  bigTitle: {
    fontSize: 64,
    fontWeight: "bold",
    lineHeight: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 32,
  },
  miniTitle: {
    fontSize: 28,
    fontWeight: "semibold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
    fontSize: 32,
  },
  link: {
    lineHeight: 30,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.light.background,
  },
});
