import React, { PureComponent } from "react";
import { Text, View, SafeAreaView, StyleSheet, Alert } from "react-native";
import GameView from "./GameViews/GameView";
import BotGameView from "./GameViews/BotGameView";

export class MainScreen extends PureComponent {
  state = {
    botChoiceValue: " ",
    userChoiceValue: " ",
    winner: " ",
    botScore: 0,
    userScore: 0,
  };

  //Create a function to automate the bot's choice
  decisionFunction = () => {
    //we will use the Math() library to generate random number for the bot's choice
    var botRand = Math.floor(Math.random() * 30) + 1;

    if (botRand >= 0 && botRand <= 10) {
      this.setState({
        botChoiceValue: "Rock",
      });
    } else if (botRand >= 11 && botRand <= 20) {
      this.setState({
        botChoiceValue: "Paper",
      });
    } else if (botRand >= 21 && botRand <= 30) {
      this.setState({
        botChoiceValue: "Scissors",
      });
    }

    //Bot Logic

    //Prevent user from clicking play until a choice is provided
    if (this.state.userChoiceValue === " ") {
      this.setState({
        botChoiceValue: " "
      })
    } else {
       //When userChoiceValue === "Rock"
       if (this.state.userChoiceValue === "Rock" &&
       botRand >= 0 &&
       botRand <= 10) {
        
          this.setState({
            winner: "Tie",
          });
        }

        if (this.state.userChoiceValue === "Rock" &&
        botRand >= 11 &&
        botRand <= 20) {
          this.setState({
            winner: "Bot",
            botScore: this.state.botScore + 1,
          });
        }

        if (this.state.userChoiceValue === "Rock" &&
        botRand >= 21 &&
        botRand <= 30) {
          this.setState({
            winner: "User",
            userScore: this.state.userScore + 1,
          });
        }
      

      //When userChoiceValue === "Paper"
      
        if (this.state.userChoiceValue === "Paper" &&
        botRand >= 0 &&
        botRand <= 10) {
          this.setState({
            winner: "User",
            userScore: this.state.userScore + 1,
          });
        }

        if (this.state.userChoiceValue === "Paper" &&
        botRand >= 11 &&
        botRand <= 20) {
          this.setState({
            winner: "Tie",
          });
        }

        if (this.state.userChoiceValue === "Paper" &&
        botRand >= 21 &&
        botRand <= 30) {
          this.setState({
            winner: "Bot",
            botScore: this.state.botScore + 1,
          });
        }
      }

      //When userChoiceValue === "Scissors"
        if (this.state.userChoiceValue === "Scissors" &&
        botRand >= 0 &&
        botRand <= 10) {
          this.setState({
            winner: "Bot",
            botScore: this.state.botScore + 1,
          });
        }

        if (this.state.userChoiceValue === "Scissors" &&
        botRand >= 11 &&
        botRand <= 20) {
          this.setState({
            winner: "User",
            userScore: this.state.userScore + 1,
          });
        }

        if (this.state.userChoiceValue === "Scissors" &&
        botRand >= 21 &&
        botRand <= 30) {
          this.setState({
            winner: "Tie",
          });
        }
      
    
  };

  render() {
    //Limit the game rounds to 5
    if(this.state.userScore === 5) {
     Alert.alert(
       "You Won🙌🏿",
       "You beat the bot"
       [
         {
           text: "Reset",
           onPress: () => this.setState({
             userScore:  0,
             botScore: 0,
             winner: " ",
             botChoiceValue: " ",
            userChoiceValue: " ",
           }
           ),
           style: "destructive"
         }
       ],
       {cancelable: false}
     )   
    } else if(this.state.botScore === 5) {
      Alert.alert(
        "You Lost😔",
        "You lost to the bot"
        [
          {
            text: "Reset",
            onPress: () => this.setState({
              userScore:  0,
             botScore: 0,
             winner: " ",
             botChoiceValue: " ",
             userChoiceValue: " ",
            }, function() {}
            ),
            style: "destructive"
          }
        ],
        {cancelable: false}
      )   
    }
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> ROCK PAPER SCISSORS </Text>
        <Text style={styles.text}> Round Winner: {this.state.winner} </Text>
        <GameView
          username="User"
          userchoice={this.state.userChoiceValue}
          userscore={this.state.userScore}
          onPressPaper={() => this.setState({ userChoiceValue: "Paper" })}
          onPressRock={() => this.setState({ userChoiceValue: "Rock" })}
          onPressScissors={() => this.setState({ userChoiceValue: "Scissors" })}
        />
        <BotGameView
          botname="Bot"
          botchoice={this.state.botChoiceValue}
          botscore={this.state.botScore}
          onPress={() => this.decisionFunction()}
          onPressReset={() => this.setState({
            botChoiceValue:" ",
            userChoiceValue: " ",
            winner: " ",
            botScore: 0,
            userScore: 0
          })}
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
