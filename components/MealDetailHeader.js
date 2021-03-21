import React, { useContext } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { favoritesContext } from "../utils/context";
import { toggleFavorites } from "../utils/favorites";
import CustomHeaderButton from "./HeaderButton";

export default function MealDetailHeader({ selectedMeal }) {
  const { favMeals, setFavMeals } = useContext(favoritesContext);
  const idMaps = favMeals.map((item) => item.id);

  const handleFavorite = async () => {
    await toggleFavorites(selectedMeal.id);
    if (idMaps.includes(selectedMeal.id)) {
      let newFavorites = favMeals.filter((item) => item.id !== selectedMeal.id);
      setFavMeals(newFavorites);
    } else {
      setFavMeals([...favMeals, selectedMeal]);
    }
  };

  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Favorite"
        iconName={
          idMaps.includes(selectedMeal.id) ? "ios-star" : "ios-star-outline"
        }
        onPress={handleFavorite}
      />
    </HeaderButtons>
  );
}
