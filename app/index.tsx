import { Text, View } from "react-native";
import { HelloWave } from "@/components/HelloWave";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>and save to reload the app!</Text>
      <HelloWave />
    </View>
  );
}
