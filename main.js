const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 500;
const MARGINS = {left: 100, right: 50, top: 50, bottom: 50};

let data = [55000, 48000, 27000, 66000, 90000];

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

const FRAME3 = d3.select("#vis1")
                  .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame");

const MAX_Y = d3.max(data, (d) => { return d; });

const Y_SCALE = d3.scaleLinear()
                  .domain([0, MAX_Y])
                  .range([0, VIS_WIDTH]);

// Now, we can use X_SCALE to plot our points
FRAME3.selectAll("points")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", 200)
      .attr("cy", (d) => { return (Y_SCALE(d) + MARGINS.top); })
      .attr("r", 10)
      .attr("class", "point");

FRAME3.append("g")
      .attr("transform", "translate(" + MARGINS.left +
            "," + MARGINS.top + ")")
      .call(d3.axisLeft(Y_SCALE).ticks(10))