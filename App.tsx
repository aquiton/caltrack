import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const API_URL = Constants.manifest2.extra.API_URL;

interface MealInfo {
  calories: number;
  created_at: string;
  id: number;
  name: string;
  user_id: string;
}

const getMeals = async () => {
  console.log("hello");
  try {
    const res = await fetch(`${API_URL}/api/meals`);
    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching meals: ", error);
  }
};

export default function App() {
  const [mealInfo, setMealInfo] = useState<MealInfo | null>(null);
  const handleGetMeals = () => {
    getMeals().then((meal: MealInfo) => setMealInfo(meal));
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: mealInfo != null ? "flex" : "none",
          flex: 1,
          // backgroundColor: "#eb4034",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Text>Meal Name: {mealInfo?.name}</Text>
        <Text>Calories: {mealInfo?.calories}</Text>
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Button onPress={handleGetMeals} title="Click Me for Robux!" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
