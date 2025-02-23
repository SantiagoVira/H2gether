import FriendRow from "@/components/friends/friend-row";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FriendType } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

const AllFriends: React.FC = () => {
  const FRIENDS: FriendType[] = [
    { name: "John E.", drank: 2 },
    { name: "Aramie E.", drank: 80 },
    { name: "Nirjhor N.", drank: 10 },
    { name: "Santiago V.", drank: 30 },
  ];
  return (
    <ThemedView style={styles.content}>
      <View style={styles.header}>
        <Link href={"../"}>
          <Ionicons name="chevron-back" color="black" size={28} />
        </Link>
      </View>
      <View style={{ paddingLeft: 15 }}>
        <ThemedText type="title">Your Friends</ThemedText>
        {FRIENDS.map((friend, i) => (
          <FriendRow name={friend.name} key={i} />
        ))}
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  imageCarouselWrapper: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 12,
  },
  imageCarousel: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 9,
  },
  headerRight: {},
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
    paddingTop: 86,
  },
});

export default AllFriends;
