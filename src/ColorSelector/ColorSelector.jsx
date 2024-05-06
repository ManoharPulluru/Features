import React, { useState } from "react";
import styled from "styled-components";
import "./ColorSelector.css";

const StyledRangeInput = styled.input`
  /* Styles for range input thumb */
  &::-webkit-slider-thumb {
    background: var(--webkit-slider-thumb-color);
    width: 20px; /* Set width of the thumb */
    height: 20px; /* Set height of the thumb */
    border-radius: 50%; /* Make the thumb round */
    cursor: pointer; /* Show pointer cursor on hover */
  }
`;

const ColorSelector = () => {
  const [circleColor, setCircleColor] = useState("rgb(0, 0, 0)");

  const handleRangeChange = (event) => {
    const value = event.target.value;
    const color = calculateColor(value);
    setCircleColor(color);
  };

  const interpolateColor = (color1, color2, ratio) => {
    const r = Math.round(color1[0] * (1 - ratio) + color2[0] * ratio);
    const g = Math.round(color1[1] * (1 - ratio) + color2[1] * ratio);
    const b = Math.round(color1[2] * (1 - ratio) + color2[2] * ratio);
    return [r, g, b];
  };

  const calculateColor = (value) => {
    const colorStops = [
      { value: 0, color: [0, 0, 0] },
      { value: 16.666, color: [255, 0, 0] },
      { value: 33.333, color: [255, 255, 0] },
      { value: 50, color: [0, 255, 0] },
      { value: 66.666, color: [0, 255, 255] },
      { value: 83.333, color: [0, 0, 255] },
      { value: 100, color: [255, 0, 255] },
    ];

    let lowerStop, upperStop;
    for (let i = 0; i < colorStops.length - 1; i++) {
      if (value >= colorStops[i].value && value <= colorStops[i + 1].value) {
        lowerStop = colorStops[i];
        upperStop = colorStops[i + 1];
        break;
      }
    }

    const ratio =
      (value - lowerStop.value) / (upperStop.value - lowerStop.value);
    const interpolatedColor = interpolateColor(
      lowerStop.color,
      upperStop.color,
      ratio
    );
    return `rgb(${interpolatedColor.join(", ")})`;
  };

  return (
    <div className="ColorSelectorMain">
      <StyledRangeInput
        type="range"
        className="colorRangeDiv"
        min="0"
        max="100"
        onChange={handleRangeChange}
        style={{ "--webkit-slider-thumb-color": circleColor }}
      />
      {/* <div className="clickedColor" style={{ backgroundColor: circleColor }}></div> */}
    </div>
  );
};

export default ColorSelector;
