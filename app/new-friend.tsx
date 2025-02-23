import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput } from "react-native";

const NewFriend: React.FC = () => {
  return (
    <ThemedView style={styles.content}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Add a new friend!</ThemedText>
      </ThemedView>
      <ThemedText>Email:</ThemedText>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#818181",
          borderRadius: 8,
          padding: 8,
          fontFamily: "Nunito",
        }}
        placeholderTextColor={"#999999"}
        placeholder="johnfriendly@email.email"
      />

      <Pressable
        style={styles.submit}
        onPress={() => {
          router.back();
        }}>
        <IconSymbol name="person.badge.plus" color="white" />
        <Text
          style={{ textAlign: "center", color: "white", fontFamily: "Nunito" }}>
          Add Friend
        </Text>
      </Pressable>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  submit: {
    borderRadius: 8,
    backgroundColor: "#547BE5",
    padding: 7,
    marginTop: "60%",

    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 12,
  },
  inputsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    flex: 1,
  },
  input: {
    borderRadius: 8,
    borderColor: "darkgray",
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 6,
    width: 68,
    textAlign: "right",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
    paddingTop: 48,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  noProjectsWrapper: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    padding: "10%",
    marginBottom: 86,
    gap: 8,
  },
  noProjectsText: {
    fontSize: 32,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  grid: {
    marginBottom: 52,
  },
  footer: {
    position: "absolute",
    right: 12,
  },
});

export default NewFriend;
