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
      <Button title="press" onPress={() => setCurrent(current + 10)} />
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
});
