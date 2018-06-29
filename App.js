/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import WeatherCard from "./src/components/WeatherCard/WeatherCard";
import Service from "./src/util/Service";
import { axiosClimaTempo } from "./AxiosConfig";

type Props = {};
export default class App extends Component<Props> {
  service = new Service(axiosClimaTempo);
  weatherInfo;

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    this.getWeatherInfo();
  }

  getWeatherInfo = async () => {
    this.weatherInfo = await this.service.get("", {}, {});
    this.setState({ loading: false });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator />
        ) : (
          <View>
            <Text style={styles.title}>
              {this.weatherInfo.name + ", " + this.weatherInfo.state}
            </Text>

            <TouchableOpacity>
              <Text>Teste</Text>
            </TouchableOpacity>

            <ScrollView style={styles.list}>
              {this.weatherInfo.data.map((obj, index) => {
                return <WeatherCard key={index} data={obj} />;
              })}
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  title: {
    fontSize: 32,
    marginTop: 16
  },
  list: {
    flex: 2
  }
});
