import { StyleSheet, Text, View } from "react-native";

export default function Statistiques() {
  return (
    <View style={styles.container}>
      <Text>Statistiques</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
