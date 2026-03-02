import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export const TrackScreen = () => {
  const searchRef = useRef<TextInput>(null);
  const [isVisible, setVisible] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Add Food</Text>
          <Text style={styles.headerSubTitle}>
            Search, scan, or log manually
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.searchBar}
            onPress={() => searchRef.current?.focus()}
          >
            <Ionicons name={"search-outline"} size={32} color={"#4f8ef7"} />
            <TextInput
              ref={searchRef}
              style={styles.searchText}
              placeholder="Search foods, brands..."
            />
          </TouchableOpacity>
          <View style={styles.horizontalButtonContainer}>
            <TouchableOpacity
              style={styles.horizontalButton}
              onPress={() => setVisible(true)}
            >
              <Ionicons name={"pencil-outline"} size={34} color={"#f5a623"} />
              <Text style={styles.horizontalButtonText}>Manual</Text>
              <Text style={styles.horizontalButtonSubText}>Enter details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.horizontalButton}>
              <Ionicons name={"camera-outline"} size={34} color={"#6b7494"} />
              <Text style={styles.horizontalButtonText}>Camera</Text>
              <Text style={styles.horizontalButtonSubText}>Scan barcode</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.mealsButton}>
            <View>
              <Text style={styles.mealsButtonText}>My meals</Text>
              <Text style={styles.mealButtonSubText}>
                Log a saved home cooked meal
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {isVisible && (
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                paddingTop: 80,
                borderRadius: 10,
                width: "100%",
                height: "100%",
              }}
            >
              <Ionicons
                name={"arrow-back-outline"}
                size={34}
                color={"#6b7494"}
              />
              <Text>Overlay content</Text>
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // semi-transparent overlay
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 12,
    width: "80%",
  },
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
  buttonContainer: {
    gap: 16,
  },
  searchBar: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#2a3045",
    backgroundColor: "#1e2230",
    padding: 20,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  searchText: {
    fontSize: 16,
    color: "#6b7494",
    flex: 1,
    height: "100%",
  },
  horizontalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    gap: 16,
  },
  horizontalButton: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#2a3045",
    backgroundColor: "#1e2230",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingVertical: 32,
    paddingHorizontal: 20,
    gap: 8,
  },
  horizontalButtonText: {
    textAlign: "center",
    color: "#e8eaf0",
    fontSize: 18,
    fontWeight: 600,
  },
  horizontalButtonSubText: {
    textAlign: "center",
    color: "#6b7494",
    fontWeight: 300,
  },
  mealsButton: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#2a3045",
    backgroundColor: "#1e2230",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    gap: 8,
  },
  mealsButtonTextContainer: {},
  mealsButtonText: {
    textAlign: "left",
    color: "#e8eaf0",
    fontSize: 18,
    fontWeight: 600,
  },
  mealButtonSubText: {
    textAlign: "center",
    color: "#6b7494",
    fontWeight: 300,
  },
});
