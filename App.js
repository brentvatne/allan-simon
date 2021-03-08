import React from "react";
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: "100%" }}>
        <Text>
          Hello world{"\n"}
          hello world hellllllloo
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
