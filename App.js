import React from "react";
import SignUp from "./src/SignUp";
import LoginScreen from './src/LoginScreen'

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const App = createStackNavigator(
  {
    SignUp: { screen: SignUp },
    Login: {screen:LoginScreen}
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(App);
