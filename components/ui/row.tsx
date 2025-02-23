import { StyleProp, Text, View, ViewStyle } from "react-native";

const Row: React.FC<{
  data: any[];
  flexArr: number[];
  style?: StyleProp<ViewStyle>;
}> = ({ data, flexArr, style = {} }) => {
  return (
    <View style={[{ flexDirection: "row" }, style]}>
      {flexArr.map((flex, i) => (
        <View key={i} style={{ flex }}>
          <Text>{data[i]}</Text>
        </View>
      ))}
    </View>
  );
};

export default Row;
