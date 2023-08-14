import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { REGIONS } from "./constants";

type IRegionSelectProps = {
  selectedLocations: string[];
  handleLocationPressed: (location: string) => void;
};

export const RegionSelect = ({
  selectedLocations,
  handleLocationPressed,
}: IRegionSelectProps) => {
  return (
    <>
      {REGIONS.map((region) => (
        <TouchableOpacity
          key={region.title}
          onPress={() => handleLocationPressed(region.title)}
          style={{
            backgroundColor: selectedLocations.includes(region.title)
              ? "blue"
              : "white",
            padding: 10,
            margin: 10,
            borderColor: "black",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: selectedLocations.includes(region.title)
                ? "bold"
                : "normal",
            }}
          >
            {region.title}
          </Text>
        </TouchableOpacity>
      ))}
    </>
  );
};
