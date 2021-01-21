import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";

const SIZE = 100;

const GameView = ({
  onPress,
  username = "",
  userscore = "",
  userchoice,
  ...props
}) => (
  <View style={styles.container} {...props}>
    <Text style={styles.default_bold_text}>{username}</Text>
    <Text style={styles.default_bold_text}>Score: {userscore}</Text>
    <View>
      {/*User Container*/}
      <View
        style={{
          backgroundColor: "#fff",
          padding: 20,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text style={styles.choice_textStyle}>Choice: {userchoice}</Text>
      </View>
    </View>

    <View style={styles.choices_view}>
      {/*Game Container*/}
      <TouchableOpacity onPress={onPress} style={styles.TouchableOpacityStyle}>
        <Text style={styles.choices_text}>Rock</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.TouchableOpacityStyle}>
        <Text style={styles.choices_text}>Paper</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.TouchableOpacityStyle}>
        <Text style={styles.choices_text}>Scissors</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderWidth: 10,
    borderColor: "#fff",
    padding: 20,
    ...Platform.select({
      ios: {
        flexDirection: "column",
      },
      web: {
        flexDirection: "row",
      },
      default: {
        flexDirection: "row",
      },
    }),
  },
  default_bold_text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
  },
  choices_text: {
    color: "#fff",
  },
  choices_view: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  TouchableOpacityStyle: {
    color: "#fff",
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    borderColor: "#fff",
    fontWeight: "900",
    fontSize: 15,
  },
  choice_textStyle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "900",
  },
});

export default GameView;
