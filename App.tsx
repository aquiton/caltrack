import React from "react";
import { Text, View } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { TrackScreen } from "./tabs/TrackScreen";
import { HomeScreen } from "./tabs/HomeScreen";

// const { API_URL } = Constants.expoConfig!.extra!;

type TabParamList = {
  Home: undefined;
  Food: undefined;
  Meals: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

interface MealInfo {
  calories: number;
  created_at: string;
  id: number;
  name: string;
  user_id: string;
}

// const getMeals = async () => {
//   try {
//     const res = await fetch(`${API_URL}/api/hello`);
//     if (!res.ok) {
//       throw new Error(`Server error: ${res.status}`);
//     }
//     const data = await res.json();

//     return data;
//   } catch (error) {
//     console.error("Error fetching meals: ", error);
//   }
// };

const MealsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Recipes</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Profile</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }: { color: string; size: number }) => {
            const icons: Record<
              keyof TabParamList,
              keyof typeof Ionicons.glyphMap
            > = {
              Home: "home",
              Food: "search",
              Meals: "bar-chart",
              Settings: "settings-outline",
            };
            return (
              <Ionicons
                name={icons[route.name as keyof TabParamList]}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#4f8ef7",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            paddingTop: 10,
            justifyContent: "center",
            borderTopWidth: 0,
            elevation: 0,
            backgroundColor: "#1e2230",
          },
          tabBarItemStyle: {
            justifyContent: "center",
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Food" component={TrackScreen} />
        <Tab.Screen name="Meals" component={MealsScreen} />
        <Tab.Screen name="Settings" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
