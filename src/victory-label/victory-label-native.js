import React from "react";
import { Text } from "react-native-svg";
import { VictoryLabel } from "./victory-label";

export default class extends VictoryLabel {
  static defaultProps = {
    ...VictoryLabel.defaultProps,
    capHeight: "0.71",
    lineHeight: "1"
  };

  renderElements(props, content) {
    return (
      <Text {...props} {...props.style}>
        {content}
      </Text>
    );
  }
}
