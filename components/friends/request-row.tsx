import { Pressable, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { IconSymbol } from "../ui/IconSymbol";

const RequestRow: React.FC<{ name: string }> = ({ name }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 8,
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <ThemedText>{name}</ThemedText>
      <View style={{ flexDirection: "row", gap: 12 }}>
        <Pressable
          style={{ padding: 8, borderRadius: 999, backgroundColor: "#E24545" }}
          onPress={() => console.log("REMOVE FRIEND")}>
          <IconSymbol name="xmark" color="#FFFFFFBB" weight="bold" />
        </Pressable>
        <Pressable
          style={{ padding: 8, borderRadius: 999, backgroundColor: "#7AC831" }}
          onPress={() => console.log("REMOVE FRIEND")}>
          <IconSymbol name="checkmark" color="#FFFFFFBB" weight="bold" />
        </Pressable>
      </View>
    </View>
  );
};

export default RequestRow;
