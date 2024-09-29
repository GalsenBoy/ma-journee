import Card from "@/components/cards/Card";
import CardChildren from "@/components/cards/CardChildren";
import Header from "@/components/layout/Header";
import { ThemedText } from "@/components/ui/ThemedText";
import { GlobalStyle } from "@/constants/GlobalStyle";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.cardOne}>
        <ThemedText type="subtitle">Citation du jour</ThemedText>
        <ThemedText>
          “La vie est un mystère qu’il faut vivre, et non un problème à
          résoudre.”
        </ThemedText>
        <AntDesign name="arrowright" size={30} color="black" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <ThemedText style={{ marginBottom: 24 }} type="title">
          Mes 7 derniers jours
        </ThemedText>
        <Card type="stresse">
          <CardChildren
            title="Lundi"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati a,quod pariatur numquam harum sed non corrupti aliquid enim esse quamexcepturi repudiandae nesciunt deserunt explicabo fugit animi eligendiratione?"
          />
        </Card>
        <Card type="fatigue">
          <CardChildren
            title="Lundi"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati a,quod pariatur numquam harum sed non corrupti aliquid enim esse quamexcepturi repudiandae nesciunt deserunt explicabo fugit animi eligendiratione?"
          />
        </Card>
        <Card type="anxieux">
          <CardChildren
            title="Lundi"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati a,quod pariatur numquam harum sed non corrupti aliquid enim esse quamexcepturi repudiandae nesciunt deserunt explicabo fugit animi eligendiratione?"
          />
        </Card>
      </ScrollView>
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
    backgroundColor: "#df9726",
    borderRadius: GlobalStyle.borderRadius,
    justifyContent: "space-around",
    marginBottom: 60,
  },
});
