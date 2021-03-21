import React, { createContext } from "react";
import { useFavorites } from "./hook";

const favoriteMealInitialState = [];

const favoritesContext = createContext(favoriteMealInitialState);

const { Provider } = favoritesContext;

const FavoriteProvider = ({ children }) => {
  const [favMeals, setFavMeals] = useFavorites();

  return <Provider value={{ favMeals, setFavMeals }}>{children}</Provider>;
};

export { FavoriteProvider, favoritesContext };
