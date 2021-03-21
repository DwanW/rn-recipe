import React, { useContext } from "react";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { settingsContext } from "../utils/context";

const CategoryMealScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const { settings } = useContext(settingsContext);

  const displayedMeals = MEALS.filter(
    (meal) =>
      meal.categoryIds.indexOf(catId) >= 0 &&
      settings.every((filterProp) =>
        filterProp ? meal[filterProp] === true : true
      )
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

CategoryMealScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;
