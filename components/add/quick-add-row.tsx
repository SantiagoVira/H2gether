import { Pressable, StyleSheet, Text, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { CONVERSION_FACTOR, li_to_oz, oz_to_li } from "@/app/add";
import Row from "../ui/row";

const QuickAddRow: React.FC<{
  name: string;
  oz?: number;
  li?: number;
  onPress: (li: number) => void;
}> = ({ name, oz, li, onPress }) => {
  if (!oz && !li) {
    oz = 0;
    li = 0;
  } else if (!oz && li) {
    oz = li_to_oz(li);
  } else if (!li && oz) {
    li = oz_to_li(oz);
  }

  return (
    <Pressable onPress={() => onPress(oz!)}>
      <Row data={[name, oz, li]} flexArr={[5, 2, 2]} style={styles.container} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: "gray",
    paddingVertical: 12,
    flexDirection: "row",
    opacity: 0.75,
  },
});

export default QuickAddRow;
