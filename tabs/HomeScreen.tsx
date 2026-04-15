import { View, Text, StyleSheet, Button } from "react-native";
import { CalorieRing } from "../components/ui/CalorieRing";
import { useState } from "react";

export const HomeScreen = () => {
  const [current, setCurrent] = useState(500);

  return (
    <View style={layoutStyles.mainContainer}>
      <View style={headerStyles.container}>
        <Text style={headerStyles.title}>Today</Text>
        <Text style={headerStyles.subTitle}>Tue, Feb 24 . 2,100 cal goal</Text>
      </View>
      {/* <Button title="PRES ME" onPress={() => setCurrent(current + 25)} /> */}
      <CalorieRing current={current} goal={2750} />
      <View style={macroStyles.container}>
        <View style={macroStyles.pill}>
          <Text style={[macroStyles.pillValue, macroStyles.protienTextColor]}>
            142g
          </Text>
          <Text style={macroStyles.pillSubTitle}>PROTEIN</Text>
          <View>
            <View style={[macroStyles.pillBar, macroStyles.protienBGColor]} />
            <View style={macroStyles.pillTrack} />
          </View>
        </View>
        <View style={macroStyles.pill}>
          <Text style={[macroStyles.pillValue, macroStyles.carbsTextColor]}>
            186g
          </Text>
          <Text style={macroStyles.pillSubTitle}>CARBS</Text>
          <View>
            <View style={[macroStyles.pillBar, macroStyles.carbsBGColor]} />
            <View style={macroStyles.pillTrack} />
          </View>
        </View>
        <View style={macroStyles.pill}>
          <Text style={[macroStyles.pillValue, macroStyles.fatsTextColor]}>
            48g
          </Text>
          <Text style={macroStyles.pillSubTitle}>FATS</Text>
          <View>
            <View style={[macroStyles.pillBar, macroStyles.fatsBGColor]} />
            <View style={macroStyles.pillTrack} />
          </View>
        </View>
      </View>
      <View>
        <Text style={mealLogStyles.title}>MEAL LOG</Text>
      </View>
      <View>
        <View style={mealLogStyles.container}>
          <View style={mealLogStyles.mealContainer}>
            <Text style={mealLogStyles.mealTitle}>Breakfast</Text>
            <Text style={mealLogStyles.mealSubTitle}>420 cal</Text>
          </View>
          <View style={mealLogStyles.mealContainer}>
            <Text style={mealLogStyles.mealTitle}>Oatmeal w/ Berries</Text>
            <Text style={mealLogStyles.mealSubTitle}>320 cal</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

// Layout
const layoutStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#161920",
    paddingTop: 80,
    paddingHorizontal: 30,
    flex: 1,
    width: "100%",
    gap: 20,
  },
});

// Header
const headerStyles = StyleSheet.create({
  container: {
    gap: 4,
  },
  title: {
    color: "#e8eaf0",
    fontSize: 32,
    fontWeight: 700,
  },
  subTitle: {
    color: "#6b7494",
    fontSize: 16,
    fontWeight: 300,
  },
});

// Macros
const macroStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
  pill: {
    backgroundColor: "#252a3a",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 18,
    flex: 1,
    gap: 8,
    borderWidth: 1,
    borderColor: "#2a3045",
  },
  pillValue: {
    fontWeight: 800,
    fontSize: 18,
  },
  pillSubTitle: {
    color: "#6b7494",
  },
  pillTrack: {
    backgroundColor: "#3a4060",
    width: "100%",
    height: 1,
    padding: 2,
    borderRadius: 4,
    position: "absolute",
  },
  pillBar: {
    width: "50%",
    height: 1,
    padding: 2,
    borderRadius: 4,
    zIndex: 10,
  },
  protienBGColor: {
    backgroundColor: "#4f8ef7",
  },
  carbsBGColor: {
    backgroundColor: "#f5a623",
  },
  fatsBGColor: {
    backgroundColor: "#2ecc8a",
  },
  protienTextColor: {
    color: "#4f8ef7",
  },
  carbsTextColor: {
    color: "#f5a623",
  },
  fatsTextColor: {
    color: "#2ecc8a",
  },
});

const mealLogStyles = StyleSheet.create({
  title: {
    color: "#6b7494",
  },
  container: {
    backgroundColor: "#252a3a",
    borderRadius: 12,
    borderColor: "#6b7494",
    borderWidth: 1,
  },
  mealContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    borderBottomWidth: 1 /* need to do inline borderBottomWidth 0 for the last index*/,
    borderBottomColor: "#6b7494",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  mealTitle: {
    color: "#e8eaf0",
    fontSize: 18,
    fontWeight: 600,
  },
  mealSubTitle: {
    color: "#6b7494",
    fontSize: 18,
    fontWeight: 200,
  },
});
