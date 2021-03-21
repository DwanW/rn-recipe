import React, { useContext } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { useTheme } from "react-native-paper";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import { settingsContext } from "../utils/context";
import { toggleSettings } from "../utils/settings";

const FilterSwitch = ({ label, state, onChange }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ true: colors.primary }}
        thumbColor={Platform.OS === "android" ? colors.primary : ""}
        value={state}
        onValueChange={onChange}
      />
    </View>
  );
};

const filterSwitchMap = [
  { label: "Gluten-free", name: "isGlutenFree" },
  { label: "Lactose-free", name: "isLactoseFree" },
  { label: "Vegan", name: "isVegan" },
  { label: "Vegetarian", name: "isVegetarian" },
];

const FiltersScreen = () => {
  const { settings, setSettings } = useContext(settingsContext);

  const handleFilterSwitch = async (settingName) => {
    if (settings.includes(settingName)) {
      let newSettings = settings.filter((name) => name !== settingName);
      setSettings(newSettings);
    } else {
      setSettings([...settings, settingName]);
    }
    await toggleSettings(settingName);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>

      {filterSwitchMap.map((item, index) => (
        <FilterSwitch
          key={index}
          label={item.label}
          state={settings.includes(item.name)}
          onChange={() => handleFilterSwitch(item.name)}
        />
      ))}
    </View>
  );
};

FiltersScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
});

export default FiltersScreen;
