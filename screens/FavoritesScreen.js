import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavoritiesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Pantalla de comidas favoritas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritiesScreen;
