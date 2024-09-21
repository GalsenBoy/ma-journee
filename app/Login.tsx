import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput>
        <Text>
          <Text style={{ fontWeight: 900 }}>La page de connexion</Text>
        </Text>
      </TextInput>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
});
