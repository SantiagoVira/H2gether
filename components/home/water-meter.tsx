import { StyleSheet, View } from "react-native";

export const WaterMeter: React.FC<{
  drank: number;
}> = ({ drank }) => {
  const water_min = 14;
  const water_max = 330;
  const height = water_max - water_min;

  return (
    <View style={styles.waterMeter}>
      <View style={[styles.water, { height: drank * height + water_min }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  waterMeter: {
    backgroundColor: "#C2C2C2",
    borderColor: "#818181",
    borderWidth: 3,
    borderRadius: 16,
    minWidth: 200,
    maxWidth: 200,
    maxHeight: 350,
    minHeight: 350,
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
});
