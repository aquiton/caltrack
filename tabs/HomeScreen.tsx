import { View, Text, StyleSheet, Button } from "react-native";
import { CalorieRing } from "../components/ui/CalorieRing";
import { useState } from "react";

export const HomeScreen = () => {
  const [current, setCurrent] = useState(1);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Today</Text>
        <Text style={styles.headerSubTitle}>Tue, Feb 24 . 2,100 cal goal</Text>
      </View>
      <CalorieRing current={current} goal={2750} />
      <View style={styles.macroContainer}>
        <View style={styles.macroPill}>
          <Text style={styles.macroProteinValue}>142g</Text>
          <Text style={styles.macroProteinSubTitle}>PROTEIN</Text>
          <View style={styles.macroProteinBar} />
        </View>
        <View style={styles.macroPill}>
          <Text>186g</Text>
          <Text>CARBS</Text>
          <View />
        </View>
        <View style={styles.macroPill}>
          <Text>48g</Text>
          <Text>FATS</Text>
          <View />
        </View>
      </View>
      <View>
        <Text>MEAL LOG</Text>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#161920",
    paddingTop: 80,
    paddingHorizontal: 30,
    flex: 1,
    width: "100%",
    gap: 20,
  },
  headerContainer: {
    gap: 4,
  },
  headerTitle: {
    color: "#e8eaf0",
    fontSize: 32,
    fontWeight: 700,
  },
  headerSubTitle: {
    color: "#6b7494",
    fontSize: 16,
    fontWeight: 300,
  },
  macroContainer: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: "",
  },
  macroPill: {
    backgroundColor: "#252a3a",
    borderRadius: 16,
    padding: 16,
    flex: 1,
    gap: 4,
  },
  macroProteinValue: {
    color: "#4f8ef7",
    fontWeight: 800,
    fontSize: 18,
  },
  macroProteinSubTitle: {
    color: "#3a4060",
  },
  macroProteinTrack: {},
  macroProteinBar: {
    backgroundColor: "#4f8ef7",
    flex: 1,
    height: 1,
    padding: 2,
    borderRadius: 4,
  },
});
