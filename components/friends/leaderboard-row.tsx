import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "../ThemedText";

const LeaderboardRow: React.FC<{
  rank: number;
  name: string;
  isSelf: boolean;
  drank: number;
}> = ({ rank, name, isSelf, drank }) => {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.basicRank}>{rank}</ThemedText>
      <ThemedText
        numberOfLines={1}
        style={{ ...styles.name, fontWeight: isSelf ? "bold" : "regular" }}>
        {name}
      </ThemedText>
      <View style={styles.waterMeter}>
        <View style={{ ...styles.water, width: `${drank}%` }} />
      </View>
      <ThemedText style={{ flex: 1, textAlign: "right" }}>{drank}%</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
  },
  basicRank: {
    color: "#547BE5",
    fontWeight: "bold",
    flex: 1,
  },
  name: {
    flex: 2,
  },
  waterMeter: {
    backgroundColor: "#C2C2C2",
    borderColor: "#818181",
    borderWidth: 2,
    borderRadius: 999,
    width: 155,
    overflow: "hidden",
    flex: 3,
  },
  water: {
    backgroundColor: "#6F93F5",
    opacity: 0.8,
    height: 18,
  },
});

export default LeaderboardRow;
