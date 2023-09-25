import { StyleSheet, Text, View } from "react-native";

import * as Myapp from "myapp";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      Myapp.hello();
    }, 3000);

    Myapp.addChangeListener((event) => {
      alert(JSON.stringify(event));
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{"hello"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
