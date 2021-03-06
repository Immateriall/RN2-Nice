import React from "react";
import { VibrationsGame } from "../components/VibrationsGame/VibrationsGame";

export default class VibrationsGameScreen extends React.Component {
  render() {
    return (
      <VibrationsGame onGameOver={(score: number) => this.onGameOver(score)} />
    );
  }
  private onGameOver(score: number) {
    this.props.navigation.navigate("GameOver", { score: score, gameName: "vibrations" });
  }
}
