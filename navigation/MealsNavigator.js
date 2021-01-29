import { Platform } from "react-native";
import colors from "../constants/colors";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
        headerTitle: "Meal Categories"
    },
  },
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen,
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
          },
        headerTintColor:
            Platform.OS === "android" ? "white" : colors.primaryColor
    }
  },
);

export default createAppContainer(MealsNavigator);
