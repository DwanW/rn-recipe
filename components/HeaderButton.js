import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";

import colors from "../constants/colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      color={Platform.OS === "android" ? "white" : colors.primaryColor}
      {...props}
    />
  );
};

export default CustomHeaderButton;
