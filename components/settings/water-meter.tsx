import { Animated, PanResponder, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { IconSymbol } from "../ui/IconSymbol";
import { RDSSA } from "@/types";

export const WaterMeter: React.FC<{
  waterGoal: number;
  setWaterGoal: RDSSA<number>;
}> = ({ waterGoal, setWaterGoal }) => {
  const water_min = 60;
  const water_max = 275;
  const halfLiterHeight = (water_max - water_min) / 4;

  const [drawerHeight, setDrawerHeight] = useState(
    ((waterGoal - 2) / 2) * halfLiterHeight + water_min
  );

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dy }) => {
      let newDrawerHeight = drawerHeight - dy;

      if (newDrawerHeight > water_max) {
        newDrawerHeight = water_max;
      }
      if (newDrawerHeight < water_min) {
        newDrawerHeight = water_min;
      }

      newDrawerHeight -= water_min;
      const newLiters = Math.round(newDrawerHeight / halfLiterHeight) / 2;
      setWaterGoal(newLiters + 2);

      newDrawerHeight = water_min + halfLiterHeight * newLiters * 2;

      setDrawerHeight(newDrawerHeight);
    },
  });

  return (
    <GestureHandlerRootView style={styles.waterMeter}>
      <View style={styles.screen} />
      <PanGestureHandler>
        <Animated.View
          style={styles.drawerHandle}
          {...panResponder.panHandlers}>
          <IconSymbol name="arrow.up.and.down" color="white" />
        </Animated.View>
      </PanGestureHandler>

      <View style={[styles.water, { height: drawerHeight }]} />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  waterMeter: {
    backgroundColor: "#C2C2C2",
    borderColor: "#818181",
    borderWidth: 3,
    borderRadius: 16,
    minWidth: 250,
    minHeight: 250,
    aspectRatio: 1,
    overflow: "hidden",
    justifyContent: "flex-end",
    flex: 1,
  },
  water: {
    backgroundColor: "#6F93F5",
    opacity: 0.8,
    zIndex: 1,
  },
  drawerHandle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginBottom: -20,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#547BE5",
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    flex: 1,
  },
});
