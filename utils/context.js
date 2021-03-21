import React, { createContext } from "react";
import { useFavorites, useSettings } from "./hook";

// favorites wrapper

const favoriteMealInitialState = [];

const favoritesContext = createContext(favoriteMealInitialState);

const { Provider: FavProvider } = favoritesContext;

const FavoriteProvider = ({ children }) => {
  const [favMeals, setFavMeals] = useFavorites();

  return (
    <FavProvider value={{ favMeals, setFavMeals }}>{children}</FavProvider>
  );
};

// settings wrapper

const settingsInitialState = [];

const settingsContext = createContext(settingsInitialState);

const { Provider: SetProvider } = settingsContext;

const SettingProvider = ({ children }) => {
  const [settings, setSettings] = useSettings();
  return (
    <SetProvider value={{ settings, setSettings }}>{children}</SetProvider>
  );
};

export { FavoriteProvider, favoritesContext, SettingProvider, settingsContext };
