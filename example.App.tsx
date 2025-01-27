import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

const uriZelda = "https://pbs.twimg.com/media/FuPAVhqWYAEJjxY.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{ uri: uriZelda }}
        style={{ width: 309, height: 500, resizeMode: "contain" }}
      />
      {/* Native base text */}
      <Text>Zelda ocarina of time</Text>
      {/* Native base button */}
      <Button color="red" title="Click me" onPress={() => alert("Hello!")} />
      {/* Touchable  Highlight */}
      <TouchableHighlight
        style={{ backgroundColor: "red", padding: 50, margin: 3 }}
        onPress={() => alert("Hello!")}
      >
        <Text>Clickme</Text>
      </TouchableHighlight>
      {/* Touchable opacity */}
      <TouchableOpacity
        style={{ backgroundColor: "red", padding: 50, margin: 3 }}
        onPress={() => alert("Hello!")}
        activeOpacity={0.5}
      >
        <Text>Clickme</Text>
      </TouchableOpacity>
      {/* Pressable */}
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: "red",
          padding: 50,
          margin: 3,
          opacity: pressed ? 0.5 : 1,
        })}
        onPress={() => alert("Hello!")}
      >
        {({ pressed }) => (
          <Text style={{ color: pressed ? "white" : "black" }}>
            {pressed ? "Pressed" : "Clickme"}
          </Text>
        )}
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09f",
    alignItems: "center",
    justifyContent: "center",
  },
});
