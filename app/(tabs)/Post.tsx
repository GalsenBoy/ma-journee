import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export default function Post() {
  return (
    <View style={styles.container}>
      <Text>Post</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.background,
  },
});
