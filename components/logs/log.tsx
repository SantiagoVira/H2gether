/*
ICON MESSAGE TIME


0 - You added __ L, completing __% of your goal! Great work! (Water, blue)
1 - __________ finished their goal! (Trophy, yellow)
2 - You finished your goal! (Trophy, yellow)
3 - ______ congratulated your on finishing you goal! (Clap, green)

*/

import { StyleSheet, View } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";
import { ThemedText } from "../ThemedText";
import { LogType } from "@/types";

const icons = [
  {
    color: "#6F93F5",
    Icon: () => <IconSymbol size={22} name="water.waves" color="#FFFFFFBB" />,
  },
  {
    color: "#F5CD6F",
    Icon: () => <IconSymbol size={22} name="trophy.fill" color="#FFFFFFBB" />,
  },
  {
    color: "#F5CD6F",
    Icon: () => <IconSymbol size={22} name="trophy.fill" color="#FFFFFFBB" />,
  },
  {
    color: "#7AC831",
    Icon: () => (
      <IconSymbol size={22} name="hands.clap.fill" color="#FFFFFFBB" />
    ),
  },
];

const Log: React.FC<LogType> = ({ type, message, time }) => {
  const { color, Icon } = icons[type];
  return (
    <View style={styles.container}>
      <View style={{ ...styles.iconWrapper, backgroundColor: color }}>
        <Icon />
      </View>
      <ThemedText style={styles.message} numberOfLines={2}>
        {message}
      </ThemedText>
      <ThemedText style={styles.time}>
        {time.toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconWrapper: {
    borderRadius: "100%",
    width: 38,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: { flex: 1 },
  time: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#666666",
  },
});

export default Log;
