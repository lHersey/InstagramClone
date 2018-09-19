import React from "react";
import { StyleSheet, View } from "react-native";
import InstaClone from "./components/instaClone";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <InstaClone />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
