import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobalStyle";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

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
      <AntDesign name="home" size={30} color="black" {...props} />
    ),

    Agenda: (props: any) => (
      <AntDesign name="calendar" size={30} color="black" {...props} />
    ),
    Post: (props: any) => (
      <AntDesign
        name="pluscircle"
        size={50}
        color={Colors.light.bgVive}
        {...props}
      />
    ),

    Statistiques: (props: any) => (
      <AntDesign name="barschart" size={30} color="black" {...props} />
    ),

    Settings: (props: any) => (
      <AntDesign name="setting" size={30} color="black" {...props} />
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
            style={[
              styles.tab,
              route.name === "Post" ? styles.postTab : styles.tab,
            ]}
          >
            {icons[route.name as keyof typeof icons]({
              color: isFocused ? "#4B2D9F" : "#70726E",
            })}

            {/* <Text style={{ color: isFocused ? "#4B2D9F" : "#70726E" }}>
              {label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    shadowColor: Colors.light.text,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginHorizontal: 24,
    borderRadius: GlobalStyle.borderRadius,
    backgroundColor: "white",
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  postTab: {
    top: -40,
  },
});
