import { StyleSheet, Pressable, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import LeaderboardRow from "@/components/friends/leaderboard-row";
import { FriendRequestType, FriendType } from "@/types";
import { trpc } from "../../lib/trpc";
import { router } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

export default function TabTwoScreen() {
  const FRIENDS: FriendType[] = [
    { name: "John E.", drank: 2 },
    { name: "Jim V.", drank: 80 },
    { name: "Jane R.", drank: 10 },
    { name: "Gilbert F.", drank: 30 },
    { name: "Jess L.", drank: 15 },
    { name: "Jack P.", drank: 66 },
    { name: "Matt C.", drank: 110 },
    { name: "Felix G.", drank: 4 },
    { name: "Chuck O.", drank: 1 },
    { name: "Thea G.", drank: 18 },
    { name: "Coco V.", drank: 48 },
  ];
  const { user } = useUser();
  const YOU: FriendType = {
    name: "You",
    drank:
      100 * trpc.user.getPercentDrank.useSuspenseQuery({ userId: user!.id })[0],
  };

  const REQUESTS: FriendRequestType[] = [
    { name: "Todd Beasly", incoming: true },
    { name: "Scam McScammer", incoming: false },
  ];

  const data = trpc.user.getFriends.useQuery({ userId: "abc" });
  console.log(data);

  return (
    <ThemedView style={styles.content}>
      <ThemedView style={styles.titleContainer}>
        <ThemedView style={styles.titleTextContainer}>
          <ThemedText type="title">Friends</ThemedText>
          <View style={{ alignItems: "center", gap: 3, flexDirection: "row" }}>
            <Pressable
              style={{ gap: 4, alignItems: "center", flexDirection: "row" }}
              onPress={() => router.push("/all-friends")}>
              <ThemedText style={{ fontWeight: "bold" }}>
                {FRIENDS.length}
              </ThemedText>
              <ThemedText>friends</ThemedText>
            </Pressable>

            <ThemedText>{" • "}</ThemedText>

            <Pressable
              style={{ gap: 4, alignItems: "center", flexDirection: "row" }}
              onPress={() => router.push("/friend-requests")}>
              <ThemedText style={{ fontWeight: "bold" }}>
                {REQUESTS.length}
              </ThemedText>
              <ThemedText>requests</ThemedText>
            </Pressable>
          </View>
        </ThemedView>
        <Pressable
          onPress={() => {
            router.push("/new-friend");
          }}>
          <IconSymbol
            size={45}
            name="person.crop.circle.fill.badge.plus"
            color="#6F93F5"
          />
        </Pressable>
      </ThemedView>

      <ThemedText type="title" style={{ marginTop: 36 }}>
        Leaderboard
      </ThemedText>
      {[...FRIENDS, YOU]
        .sort((a, b) => b.drank - a.drank)
        .map((friend, r) => (
          <LeaderboardRow
            rank={r + 1}
            {...friend}
            isSelf={friend.name === "You"}
            key={r}
          />
        ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
    paddingTop: 86,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  titleTextContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
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
