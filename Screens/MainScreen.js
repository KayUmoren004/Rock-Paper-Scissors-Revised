import React, { PureComponent } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

export class MainScreen extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Main Screen </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});

export default MainScreen;
