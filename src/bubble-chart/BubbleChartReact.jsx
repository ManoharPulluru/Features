import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';
import _ from 'lodash';
import "./BubbleChartReact.css";
import tapSound from "./tap-sound.mp3"

const BubbleChartReact = () => {
  const defaultLimit = 100;
  const maxClicks = 5;
  const incrementValue = 5;
  const [limit, setLimit] = useState(defaultLimit);
  const [bgColor, setBgColor] = useState('#e0e0e0');
  const [shuffle, setShuffle] = useState(false);
  const chartRef = useRef();
  const [childrenArray, setChildrenArray] = useState([
    { name: 'Hits', value: 20, clicks: 0 },
    { name: 'Comedy', value: 25, clicks: 0 },
    { name: 'Latin', value: 25, clicks: 0 },
    { name: 'Country', value: 30, clicks: 0 },
    { name: 'Travel', value: 25, clicks: 0 },
    { name: 'Pop', value: 25, clicks: 0 },
    { name: 'Rock', value: 25, clicks: 0 },
    { name: 'Event', value: 25, clicks: 0 },
    { name: 'History', value: 25, clicks: 0 },
    { name: 'Jazz', value: 20, clicks: 0 }
  ]);

  const triggerIncrease = (obj) => {
    navigator.vibrate(75);
    // const audio = new Audio(tapSound);
    // audio.play();
    setChildrenArray(prevArray =>
      prevArray.map(i => 
        i.name === obj.name && i.clicks < maxClicks ? { ...i, value: i.value + incrementValue, clicks: i.clicks + 1 } : i
      )
    );
  };

  

  useEffect(() => {
    renderChart();
  }, [limit, bgColor, shuffle, childrenArray]);

  const renderChart = () => {
    const json = {
      children: childrenArray.slice(0, limit)
    };

    if (shuffle) {
      json.children = _.shuffle(json.children);
    }

    const values = json.children.map(d => d.value);
    const min = Math.min(...values);
    const max = Math.max(...values);

    d3.select(chartRef.current).selectAll('*').remove();
    document.body.style.backgroundColor = bgColor;

    const diameter = 600;
    const color = d3.scaleOrdinal(d3.schemeCategory20c);

    const bubble = d3.pack()
      .size([diameter, diameter])
      .padding(1.5);

    const tip = d3Tip()
      .attr('class', 'd3-tip-outer')
      .offset([-38, 0])
      .html((d, i) => {
        const item = json.children[i];
        const color = getColor(i, values.length);
        return `<div class="d3-tip" style="background-color: ${color}">${item.name} (${item.value})</div><div class="d3-stem" style="border-color: ${color} transparent transparent transparent"></div>`;
      });

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', diameter)
      .attr('height', diameter)
      .attr('class', 'chart-svg')
      .call(tip);

    const root = d3.hierarchy(json)
      .sum(d => d.value);

    bubble(root);

    let idx = 0;
    const node = svg.selectAll('.node')
      .data(root.children)
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.x},${d.y})`);

    node.append('circle')
      .attr('r', d => d.r)
      .style('fill', (d) => getItemColor(d.data))
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .on('click', (d, i) => {
        triggerIncrease(json.children[i]);
      });

    node.append('text')
      .attr('dy', '0.2em')
      .style('text-anchor', 'middle')
      .style('font-family', 'Sans-Serif')
      .style('font-size', getFontSizeForItem)
      .style('fill', d => d.data.clicks >= maxClicks ? 'navy' : '#ffffff')
      .text(getLabel)
      .style('pointer-events', 'none');

    function getItemColor(item) {
      if (item.clicks >= maxClicks) {
        return '#FFFFFF'; // White color if clicks >= maxClicks
      }
      return getColor(idx++, json.children.length);
    }

    function getColor(idx, total) {
      const colorList = ['FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33' , 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33', 'FFFFFF33'];
      const colorLookup = [
        [0, 4, 10, 18, 24],
        [0, 3, 6, 9, 11, 13, 15, 18, 20, 24],
        [0, 3, 4, 6, 7, 9, 11, 13, 14, 15, 17, 18, 20, 22, 24],
        [0, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 19, 20, 22, 23, 24],
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      ];
      for (const idxList of colorLookup) {
        if (idxList.length >= total) {
          return '#' + colorList[idxList[idx]];
        }
      }
    }

    function getLabel(item) {
      return truncate(item.data.name);
    }

    function getValueText(item) {
      return item.data.value;
    }

    function truncate(label) {
      return label;
    }

    function getFontSizeForItem(item) {
      return getFontSize(item.data.value);
    }

    function getFontSize(value) {
      const minPx = 6;
      const maxPx = 25;
      const pxRange = maxPx - minPx;
      const min = Math.min(...values);
      const max = Math.max(...values);
      const dataRange = max - min;
      const ratio = pxRange / dataRange;
      const size = Math.min(maxPx, Math.round(value * ratio) + minPx);
      // return `${size}px`;
    }
  };

  return (
    <div id="container" className='BubbleChartReactMain'>
      <div id="chart" ref={chartRef}></div>
    </div>
  );
};

export default BubbleChartReact;
