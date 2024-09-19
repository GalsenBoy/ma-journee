import { Colors } from "@/constants/Colors";
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";
import { ThemedText } from "./ThemedText";

type ThemedButtonProps = TouchableOpacityProps & {
  type?: "default" | "withoutBackground";
  title: string;
  textStyle?: any;
};

export default function ThemedButton({
  // style,
  type = "default",
  textStyle,
  title,
  ...rest
}: ThemedButtonProps) {
  return (
    <TouchableOpacity
      style={[
        type === "default" ? styles.default : undefined,
        type === "withoutBackground" ? styles.withoutBackground : undefined,
      ]}
      {...rest}
    >
      <ThemedText type="link" style={textStyle}>
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    backgroundColor: Colors.light.text,
    padding: 10,
    borderRadius: 12,
  },
  withoutBackground: {
    padding: 10,
    borderRadius: 12,
  },
});
