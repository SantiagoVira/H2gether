import { Text, View } from "react-native";

export const Divider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        gap: 10,
      }}>
      <Text
        style={{
          color: "#666666",
        }}>
        {children}
      </Text>
      <View
        style={{
          borderBottomColor: "#666666",
          borderBottomWidth: 1,
          width: "100%",
        }}
      />
    </View>
  );
};
