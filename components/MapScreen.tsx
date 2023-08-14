import { View, Text, ScrollView } from "react-native";
import React from "react";
import { RegionSelect } from "./RegionSelect";
import RegionsMap from "./RegionsMap";

export const MapScreen = () => {
  const [selectedLocations, setSelectedLocations] = React.useState<string[]>(
    []
  );

  const handleLocationPressed = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter((l) => l !== location));
      return;
    }
    setSelectedLocations([...selectedLocations, location]);
  };

  return (
    <ScrollView>
      <RegionSelect
        selectedLocations={selectedLocations}
        handleLocationPressed={handleLocationPressed}
      />
      <RegionsMap selectedLocations={selectedLocations} />
    </ScrollView>
  );
};
