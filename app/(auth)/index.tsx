import SocialLoginButton from "../../components/SocialLoginButton";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { setStatusBarHidden } from "expo-status-bar";
import { ThemedView } from "@/components/ThemedView";

import { Image } from "expo-image";
import { ThemedText } from "@/components/ThemedText";

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

const AuthScreen = () => {
  useWarmUpBrowser();
  const insets = useSafeAreaInsets();

  return (
    <ThemedView
      style={[
        styles.container,
        { paddingTop: insets.top + 40, paddingBottom: insets.bottom },
      ]}>
      <View className="flex flex-col gap-2 mt-[50%]">
        <Image
          source={require("../../assets/images/H2gether-Logo.png")}
          style={{
            width: 200,
            height: 200 * (166 / 179),
            marginLeft: "auto",
            marginRight: "auto",
          }}
          contentFit="cover"
        />
        <Text
          style={{
            fontSize: 60,
            fontWeight: "bold",
            marginTop: 10,
            textAlign: "center",
            color: "#547BE5",
          }}>
          H2gether
        </Text>
        <ThemedText style={{ textAlign: "center", marginTop: 12 }}>
          The best way to make sure you (and your friends) stay hydrated!
        </ThemedText>
      </View>

      <View style={styles.socialButtonsContainer}>
        <SocialLoginButton strategy="google" />
      </View>
    </ThemedView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    gap: 20,
    alignItems: "center",
  },
  headingContainer: {
    width: "100%",
    gap: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "gray",
  },
  socialButtonsContainer: {
    width: "100%",
    marginTop: 20,
    gap: 10,
  },
});
