import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import SuperJSON from "superjson";

import { useColorScheme } from "@/hooks/useColorScheme";

import { tokenCache } from "@/cache";
import {
  ClerkProvider,
  ClerkLoaded,
  useAuth,
  useUser,
} from "@clerk/clerk-expo";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "@/lib/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const TrpcWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isSignedIn, getToken } = useAuth();
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${process.env.EXPO_PUBLIC_API_URL}/trpc`,
          async headers() {
            const token = await getToken();
            return {
              Authorization: !isSignedIn ? undefined : `Bearer ${token}`,
            };
          },
        }),
      ],
      transformer: SuperJSON,
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

const Bullshit: React.FC = () => {
  console.log("pendejo");
  const fuck = trpc.user.createIfNotExists.useMutation();
  const { user } = useUser();

  useEffect(() => {
    console.log("whats gilberts sisters name");
    fuck
      .mutateAsync({
        userId: user?.id ?? "aaa",
        fullName: user?.fullName ?? "Fuck you",
      })
      .then(console.log);
  }, []);

  return <></>;
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Nunito: require("../assets/fonts/Nunito-VariableFont_wght.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
  if (!publishableKey) {
    throw new Error(
      "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
    );
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <TrpcWrapper>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Bullshit />
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
              <Stack.Screen
                options={{ presentation: "modal", headerShown: false }}
                name="add"
              />
              <Stack.Screen
                options={{ presentation: "modal", headerShown: false }}
                name="new-friend"
              />
              <Stack.Screen
                name="all-friends"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="friend-requests"
                options={{ headerShown: false }}
              />
            </Stack>
            <StatusBar style="auto" />
          </ThemeProvider>
        </TrpcWrapper>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
