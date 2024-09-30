import TabBar from "@/components/TabBar";
import { Colors } from "@/constants/Colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Accueil",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Agenda"
        options={{
          headerShown: false,
          title: "Agenda",
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Post"
        options={{
          headerShown: false,
          title: "Créer",
          tabBarIcon: ({ color }) => (
            <AntDesign
              style={styles.plus}
              name="pluscircle"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Statistiques"
        options={{
          headerShown: false,
          title: "Statistiques",
          tabBarIcon: ({ color }) => (
            <Ionicons name="stats-chart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          headerShown: false,
          title: "Paramètres",
          tabBarIcon: ({ color }) => (
            <View style={styles.iconPostContainer}>
              <AntDesign name="pluscircle" size={40} color="black" />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconPostContainer: {
    height: 60, // Augmente la hauteur de l'icône
    justifyContent: "center", // Centre verticalement
    alignItems: "center", // Centre horizontalement
    marginBottom: 5, // Ajoute de l'espace en bas pour l'ajuster
  },
});
