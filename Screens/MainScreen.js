import React, { PureComponent } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import GameView from "./GameView";

export class MainScreen extends PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> ROCK PAPER SCISSORS </Text>
        <GameView
          username="Human"
          userchoice="Paper"
          userscore="1"
          onPress={() => console.info("human pressed")}
        />
        <GameView
          username="Bot"
          userchoice="Rock"
          userscore="0"
          onPress={console.info("Bot pressed")}
        />
        <Text
          style={{
            color: "#fff",
            fontWeight: "900",
            position: "absolute",
            bottom: 0,
            marginVertical: 30,
          }}
        >
          Made by Godson Umoren
        </Text>
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
    fontWeight: "900",
    fontSize: 30,
    textAlign: "center",
  },
});

export default MainScreen;
