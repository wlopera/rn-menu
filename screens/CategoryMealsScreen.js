import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/data-dummy";

const CategoryMealsScreen = (props) => {
  const categoryid = props.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((category) => category.id === categoryid);

  return (
    <View style={styles.screen}>
      <Text>Pantalla de comidas</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Detalles de las comidas"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetails" });
        }}
      />

      <Button
        title="Regresar"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  console.log(123, navigationData);

  const categoryid = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === categoryid);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
