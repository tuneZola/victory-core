/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  ScrollView,
  StyleSheet
} from "react-native";
import Svg from "react-native-svg";
import { default as VictoryLabelNative } from "../src/victory-label/victory-label-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#e1d7cd",
    flex: 1
  }
});

class Demo extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Svg height="300" width="300">
          <VictoryLabelNative
            x={150}
            y={150}
            text="Hello"
            textAnchor="middle"
            style={{
              fontSize: 25,
              fill: "black"
            }}
          />
        </Svg>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent("Demo", () => Demo);
