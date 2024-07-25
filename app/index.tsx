import { Text, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>And save to reload.</Text>
      <HelloWave />
    </View>
  );
}
