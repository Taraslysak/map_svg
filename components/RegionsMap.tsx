import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { REGIONS } from "./constants";
import { JudeaAndSamaria } from "../assets";

type IRegionsMapProps = {
  selectedLocations: string[];
};

const RegionsMap = ({ selectedLocations }: IRegionsMapProps) => {
  return (
    <View
      style={{ position: "relative", height: Dimensions.get("screen").height }}
    >
      {REGIONS.map(({ title, Icon }) => {
        console.log(
          { selectedLocations, title },
          selectedLocations.includes(title)
        );

        return (
          <View
            key={title}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
            }}
          >
            {selectedLocations.includes(title) && <Icon />}
          </View>
        );
      })}
    </View>
  );
};

export default RegionsMap;
