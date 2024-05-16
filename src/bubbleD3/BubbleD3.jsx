import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BubbleChart = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();  // Clear SVG content before adding new elements

    const width = 800;
    const height = 600;

    // Create a scale for your bubbles
    const scale = d3.scaleSqrt()
      .domain([1, 10])  // Assuming your data value range
      .range([10, 40]);  // Bubble size range

    // Create simulation with forces
    const simulation = d3.forceSimulation(data)
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.05))
      .force("collide", d3.forceCollide(d => scale(d.value)));

    // Run simulation on tick
    simulation.on("tick", () => {
      svg.selectAll("circle")
        .data(data)
        .join("circle")
          .attr("cx", d => d.x)
          .attr("cy", d => d.y)
          .attr("r", d => scale(d.value))
          .attr("fill", "steelblue")
          .on("click", (event, d) => {
            alert(`Clicked on circle with value: ${d.value}`);
          });
    });

  }, [data]);

  return <svg ref={svgRef} width="800" height="600"></svg>;
};

export default BubbleChart;
