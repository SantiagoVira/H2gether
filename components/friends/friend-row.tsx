import { Pressable, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { IconSymbol } from "../ui/IconSymbol";

const FriendRow: React.FC<{ name: string }> = ({ name }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: "gray",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <ThemedText>{name}</ThemedText>
      <Pressable
        style={{ padding: 8, borderRadius: 999, backgroundColor: "#E24545" }}
        onPress={() => console.log("REMOVE FRIEND")}>
        <IconSymbol name="person.fill.xmark" color="#FFFFFFBB" />
      </Pressable>
    </View>
  );
};

export default FriendRow;
