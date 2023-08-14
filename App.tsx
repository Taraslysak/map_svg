/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { SafeAreaView, Text } from "react-native";
import { MapScreen } from "./components/MapScreen";

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <MapScreen />
    </SafeAreaView>
  );
}

export default App;
