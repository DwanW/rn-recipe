import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSettings = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@settings");
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (err) {
    console.log("could not get settings");
  }
};

export const toggleSettings = async (value) => {
  if (!value) {
    return;
  }

  try {
    const settings = await getSettings();
    if (settings.length === 0) {
      await AsyncStorage.setItem("@settings", JSON.stringify([value]));
    } else {
      const existingItemIdx = settings.indexOf(value);
      if (existingItemIdx > -1) {
        // remove existing item
        settings.splice(existingItemIdx, 1);
      } else {
        // add item
        settings.push(value);
      }
      await AsyncStorage.setItem("@settings", JSON.stringify(settings));
    }
  } catch (err) {
    console.log("could not store settings");
  }
};
