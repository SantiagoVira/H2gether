import { StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ThemedText } from "../ThemedText";
import { RDSSA } from "@/types";

const NotificationTimeRange: React.FC<{
  notifStart: Date;
  notifEnd: Date;
  setNotifStart: RDSSA<Date>;
  setNotifEnd: RDSSA<Date>;
}> = ({ notifStart, setNotifStart, notifEnd, setNotifEnd }) => {
  return (
    <View style={styles.container}>
      <DateTimePicker
        mode="time"
        value={notifStart}
        themeVariant="light"
        onChange={(t) => setNotifStart(new Date(t.nativeEvent.timestamp))}
      />
      <ThemedText>to</ThemedText>
      <DateTimePicker
        mode="time"
        value={notifEnd}
        themeVariant="light"
        onChange={(t) => setNotifEnd(new Date(t.nativeEvent.timestamp))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default NotificationTimeRange;
