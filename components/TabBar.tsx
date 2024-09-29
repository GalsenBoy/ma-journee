import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobalStyle";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TabBarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

export default function TabBar({
  state,
  descriptors,
  navigation,
}: TabBarProps) {
  const icons = {
    index: (props: any) => (
      <AntDesign name="home" size={24} color="black" {...props} />
    ),

    Agenda: (props: any) => (
      <AntDesign name="calendar" size={24} color="black" {...props} />
    ),

    Statistiques: (props: any) => (
      <AntDesign name="barschart" size={24} color="black" {...props} />
    ),

    Settings: (props: any) => (
      <AntDesign name="setting" size={24} color="black" {...props} />
    ),
  };
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
          >
            {icons[route.name as keyof typeof icons]({
              color: isFocused ? "#4B2D9F" : "#70726E",
            })}

            <Text style={{ color: isFocused ? "#4B2D9F" : "#70726E" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 15,
    marginBottom: 20,
    shadowColor: Colors.light.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
});
