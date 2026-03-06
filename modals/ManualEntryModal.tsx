import { Ionicons } from "@expo/vector-icons";
import { SetStateAction } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
interface ManualEntryModalProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export const ManualEntryModal = ({ open, setOpen }: ManualEntryModalProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
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
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={handleClose}>
          <Ionicons name={"arrow-back-outline"} size={34} color={"#6b7494"} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.input}>
            <TextInput placeholder="Food Name..." />
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <TextInput placeholder="Calories..." />
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <TextInput placeholder="Protein..." />
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <TextInput placeholder="Carbs..." />
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <TextInput placeholder="Fats..." />
          </TouchableOpacity>
          <TouchableOpacity style={styles.input}>
            <TextInput placeholder="Servings..." />
          </TouchableOpacity>
        </View>
      </View>
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
    height: "100%",
    gap: 20,
  },
  inputContainer: {
    gap: 24,
  },
  input: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#2a3045",
    backgroundColor: "#1e2230",
    padding: 20,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
});
