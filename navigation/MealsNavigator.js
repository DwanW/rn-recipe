import React from "react";
import { Platform } from "react-native";
import colors from "../constants/colors";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoriteScreen from "../screens/FavoriteScreen";

// import { Ionicons } from "@expo/vector-icons";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : colors.primaryColor,
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator
      // navigationOptions: {
      //   tabBarIcon: (tabInfo) => {
      //     return (
      //       <Ionicons
      //         name="ios-restaurant"
      //         size={24}
      //         color={tabInfo.tintColor}
      //       />
      //     );
      //   },
      // },
    },
    Favorites: {
      screen: FavoriteScreen
      // navigationOptions: {
      //   tabBarIcon: (tabInfo) => {
      //     return (
      //       <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />
      //     );
      //   },
      // },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.accentColor,
    },
  }
);

export default createAppContainer(MealsFavTabNavigator);
