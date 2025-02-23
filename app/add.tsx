import { Link, router, Stack } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import QuickAddRow from "@/components/add/quick-add-row";
import Row from "@/components/ui/row";
import { useEffect, useState } from "react";
import { trpc } from "@/lib/trpc";
import { useUser } from "@clerk/clerk-expo";

export const CONVERSION_FACTOR = 33.814;
export const li_to_oz = (li: number) =>
  Math.round(100 * li * CONVERSION_FACTOR) / 100;
export const oz_to_li = (oz: number) =>
  Math.round((100 * oz) / CONVERSION_FACTOR) / 100;

export default function AddScreen() {
  const [liters, setLiters] = useState(1);
  const [ounces, setOunces] = useState(li_to_oz(1));
  const addWaterMutation = trpc.user.addWater.useMutation();
  const { user } = useUser();
  const trpcUtils = trpc.useUtils();

  useEffect(() => {
    setLiters(oz_to_li(ounces));
  }, [ounces]);

  return (
    <ThemedView style={styles.content}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Drank some water?</ThemedText>
      </ThemedView>
      <ThemedText>Awesome! Let's track it!</ThemedText>

      <ThemedText type="subtitle" style={{ marginTop: 36 }}>
        Quick Add ⚡️
      </ThemedText>
      <View>
        <Row
          data={["Item", "fl oz", "Liters"]}
          flexArr={[5, 2, 2]}
          style={{ borderBottomWidth: 1 }}
        />
        <QuickAddRow
          name="Average Water Bottle"
          oz={16.9}
          onPress={setOunces}
        />
        <QuickAddRow name="Mini Water Bottle" oz={8} onPress={setOunces} />
        <QuickAddRow name="1L Water Bottle" li={1} onPress={setOunces} />
        <QuickAddRow name="Glass of Water" li={0.2} onPress={setOunces} />
      </View>

      <ThemedText type="subtitle" style={{ marginTop: 36 }}>
        Track your water
      </ThemedText>
      <View style={styles.inputsWrapper}>
        <View style={styles.inputWrapper}>
          <TextInput
            defaultValue={ounces.toString()}
            style={styles.input}
            onEndEditing={(e) => {
              const text = e.nativeEvent.text;
              setOunces(parseFloat(text.replace(/[^0-9]/g, "")));
            }}
          />
          <Text style={{ fontFamily: "Nunito" }}>fl oz.</Text>
        </View>
        <ThemedText style={{ fontWeight: "bold" }}>or</ThemedText>
        <View style={styles.inputWrapper}>
          <TextInput
            defaultValue={liters.toString()}
            style={styles.input}
            onEndEditing={(e) => {
              const text = e.nativeEvent.text;
              const liters = parseFloat(text.replace(/[^0-9]/g, ""));
              setLiters(liters);
              setOunces(li_to_oz(liters));
            }}
          />
          <Text style={{ fontFamily: "Nunito" }}>Liters</Text>
        </View>
      </View>
      <Pressable
        style={styles.submit}
        onPress={() => {
          addWaterMutation
            .mutateAsync({ userId: user?.id ?? "", liters })
            .catch(console.error)
            .then(() => trpcUtils.user.getPercentDrank.invalidate());
          router.back();
        }}>
        <Text
          style={{ textAlign: "center", color: "white", fontFamily: "Nunito" }}>
          Submit
        </Text>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  submit: {
    borderRadius: 8,
    backgroundColor: "#547BE5",
    padding: 7,
    marginTop: "60%",
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
    fontFamily: "Nunito",
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
