import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { useEffect, useRef, useState } from "react";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const CalorieRing = ({
  current,
  goal,
}: {
  current: number;
  goal: number;
}) => {
  const size = 200;
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const isOver = current > goal;
  const progress = isOver ? 1 : current / goal; // cap at 1 so ring stays full, not overflowing
  const remaining = goal - current; // negative when over

  const animatedValue = useRef(new Animated.Value(0)).current;
  const countValue = useRef(new Animated.Value(0)).current;
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress,
      duration: 2000,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();

    Animated.timing(countValue, {
      toValue: Math.abs(remaining), // animate to the absolute remaining/over value
      duration: 1200,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();

    const listener = countValue.addListener(({ value }) => {
      const rounded = Math.round(value);
      setDisplayCount(rounded);
    });

    return () => countValue.removeListener(listener);
  }, [current, goal]);

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, circumference - progress * circumference],
  });

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <Defs>
          {isOver ? (
            // Red gradient when over goal
            <LinearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="#f75f5f" />
              <Stop offset="100%" stopColor="#c0392b" />
            </LinearGradient>
          ) : (
            // Normal blue → purple gradient
            <LinearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="#4f8ef7" />
              <Stop offset="100%" stopColor="#7c5cfc" />
            </LinearGradient>
          )}
        </Defs>

        {/* Track */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#252a3a"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Animated Progress */}
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#ringGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>

      {/* Center text */}
      <View style={styles.centerText}>
        <Text style={[styles.calories, isOver && styles.caloriesOver]}>
          {isOver ? "+" : ""}
          {displayCount.toLocaleString()}
        </Text>
        <Text style={[styles.label, isOver && styles.labelOver]}>
          {isOver ? "KCAL OVER" : "KCAL LEFT"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  centerText: {
    position: "absolute",
    alignItems: "center",
  },
  calories: {
    color: "#e8eaf0",
    fontSize: 32,
    fontWeight: "700",
  },
  caloriesOver: {
    color: "#f75f5f",
  },
  label: {
    color: "#6b7494",
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1.5,
    marginTop: 2,
  },
  labelOver: {
    color: "#f75f5f",
  },
});
