import AgendaChildren from "@/components/AgendaChildren";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Agenda() {
  return (
    <SafeAreaView style={styles.container}>
      <AgendaChildren />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
});
