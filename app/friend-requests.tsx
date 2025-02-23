import { Divider } from "@/components/divider";
import RequestRow from "@/components/friends/request-row";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FriendRequestType, FriendType } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

const Project: React.FC = () => {
  const INCOMING_REQUESTS: FriendRequestType[] = [
    { name: "Todd Beasly", incoming: true },
  ];
  const OUTGOING_REQUESTS: FriendRequestType[] = [
    { name: "Scam McScammer", incoming: false },
  ];

  return (
    <ThemedView style={styles.content}>
      <View style={styles.header}>
        <Link href={"../"}>
          <Ionicons name="chevron-back" color="black" size={28} />
        </Link>
      </View>
      <View style={{ paddingLeft: 15 }}>
        <ThemedText type="title" style={{ marginBottom: 18 }}>
          Friend Requests
        </ThemedText>
        <Divider>Incoming</Divider>
        {INCOMING_REQUESTS.map((r, i) => (
          <RequestRow key={i} name={r.name} />
        ))}
        <View style={{ height: 30 }} />
        <Divider>Outgoing</Divider>
        {OUTGOING_REQUESTS.map((r, i) => (
          <RequestRow key={i} name={r.name} />
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

export default Project;
