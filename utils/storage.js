import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFavorites = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@favorites");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (err) {
    console.log("could not get favorites");
  }
};

export const toggleFavorites = async (value) => {
  if (!value) {
    return;
  }


  try {
    const favorites = await getFavorites();
    if (favorites.length === 0) {
      await AsyncStorage.setItem("@favorites", JSON.stringify([value]));
    } else {
      const existingItemIdx = favorites.indexOf(value);
      if (existingItemIdx > -1) {
        // remove existing item
        favorites.splice(existingItemIdx, 1);
      } else {
        // add item
        favorites.push(value);
      }
      await AsyncStorage.setItem("@favorites", JSON.stringify(favorites));
    }
  } catch (err) {
    console.log("could not store favorite");
  }
};
