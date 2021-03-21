import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

const CustomHeaderButton = (props) => {
  const { colors } = useTheme();
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : colors.primary}
    />
  );
};

export default CustomHeaderButton;
