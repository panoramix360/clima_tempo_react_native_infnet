import React, { Component } from "react";
import WeatherCardStyle from "./styles";
import { View, Text, Image } from "react-native";

export default class WeatherCard extends Component {
  constructor(props) {
    super(props);

    this.arr = [
      require("../../img/1.png"),
      require("../../img/2.png"),
      require("../../img/3.png"),
      require("../../img/4.png"),
      require("../../img/5.png"),
      require("../../img/6.png"),
      require("../../img/7.png"),
      require("../../img/8.png"),
      require("../../img/9.png")
    ];
  }

  render() {
    return (
      <View style={{ marginBottom: 16 }}>
        <Image source={this.arr[this.props.data.text_icon.icon.day - 1]} />
        <Text style={{ fontSize: 24 }}>Data: {this.props.data.date_br}</Text>
        <Text>Previsão: {this.props.data.text_icon.text.pt}</Text>
        <Text>Temperatura Min: {this.props.data.temperature.min}º</Text>
        <Text>Temperatura Max: {this.props.data.temperature.max}º</Text>
      </View>
    );
  }
}
