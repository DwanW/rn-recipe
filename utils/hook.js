import { useEffect, useState } from "react";
import { MEALS } from "../data/dummy-data";
import { getFavorites } from "./storage";

export const useFavorites = () => {
  const [favMeals, setFavMeals] = useState([]);

  useEffect(() => {
    async function getLocalData() {
      const favoritesIds = await getFavorites();
      const newFavMeals = MEALS.filter((meal) =>
        favoritesIds.includes(meal.id)
      );
      setFavMeals(newFavMeals);
    }
    if (favMeals.length === 0) {
      getLocalData();
    }
  }, [favMeals]);

  return [favMeals, setFavMeals];
};
