import { useEffect, useState } from "react";
import { MEALS } from "../data/dummy-data";
import { getFavorites } from "./favorites";
import { getSettings } from "./settings";

export const useFavorites = () => {
  const [favMeals, setFavMeals] = useState([]);

  useEffect(() => {
    async function getLocalFavData() {
      const favoritesIds = await getFavorites();
      const newFavMeals = MEALS.filter((meal) =>
        favoritesIds.includes(meal.id)
      );
      setFavMeals(newFavMeals);
    }
    if (favMeals.length === 0) {
      getLocalFavData();
    }
  }, [favMeals.length]);

  return [favMeals, setFavMeals];
};

export const useSettings = () => {
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    async function getLocalSettingData() {
      const settings = await getSettings();
      setSettings(settings);
    }
    getLocalSettingData();
  }, []);

  return [settings, setSettings];
};
