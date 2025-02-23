import { Pressable } from "react-native";
import { ThemedText } from "../ThemedText";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useAuth } from "@clerk/clerk-expo";

const LogOut: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Pressable
      style={{
        width: "100%",
        backgroundColor: "#E24545",
        borderRadius: 8,
        padding: 8,
      }}
      onPress={() => signOut()}>
      <ThemedText
        style={{ fontWeight: "bold", color: "white", textAlign: "center" }}>
        Log Out
      </ThemedText>
    </Pressable>
  );
};

export default LogOut;
