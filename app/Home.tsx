import Card from "@/components/cards/Card";
import CardChildren from "@/components/cards/CardChildren";
import Header from "@/components/layout/Header";
import { ThemedText } from "@/components/ui/ThemedText";
import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobalStyle";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const truncate = (str: string) => {
    return str.length > 92 ? str.substring(0, 92) + "..." : str;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.cardOne}>
        <ThemedText>Citation du jour</ThemedText>
        <ThemedText>
          “La vie est un mystère qu’il faut vivre, et non un problème à
          résoudre.”
        </ThemedText>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>
      <ThemedText type="title">Mes 7 derniers jours</ThemedText>
      <Card>
        <CardChildren
          title="Lundi"
          description={truncate(
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati a,quod pariatur numquam harum sed non corrupti aliquid enim esse quamexcepturi repudiandae nesciunt deserunt explicabo fugit animi eligendiratione?"
          )}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  cardOne: {
    height: 150,
    paddingLeft: 24,
    backgroundColor: Colors.light.bgVive,
    borderRadius: GlobalStyle.borderRadius,
    justifyContent: "space-around",
  },
});
