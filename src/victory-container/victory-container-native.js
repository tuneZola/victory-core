import React from "react";
import Svg from "react-native-svg";
import { default as VictoryContainer } from "./victory-container";

export default class extends VictoryContainer {
  static defaultProps = {
    ...VictoryContainer.defaultProps
  };

  render() {
    const { style, width, height, events, children } = this.props;
    return (
      <Svg {...style} {...events} width={width} height={height}>
        {children}
      </Svg>
    );
  }
}
