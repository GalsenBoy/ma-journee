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
  textStyle: any;
};

export default function ThemedButton({
  // style,
  textStyle,
  type = "default",
  title,
  ...rest
}: ThemedButtonProps) {
  return (
    <TouchableOpacity
      style={[
        type === "default" ? styles.default : undefined,
        type === "withoutBackground" ? styles.withoutBackground : undefined,
        // style,
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
    backgroundColor: Colors.light.darkText,
    paddingVertical: 15,
    borderRadius: 12,
  },
  withoutBackground: {
    padding: 10,
    borderRadius: 12,
  },
});
