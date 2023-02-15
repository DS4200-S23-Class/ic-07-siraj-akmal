const data1 = [55000, 48000, 27000, 66000, 90000];

const frame_height = 500;
const frame_width = 500;
const margins  = {left:100, right:100, top:20, bottom:20};

const max_y = d3.max(data1, (d) => {return d;});
const min_y = d3.min(data1, (d) => {return d;});
console.log(min_y);

const y_scale =
d3.scaleLinear()
    .domain([0, (max_y + 35000)])
    .range([0, (frame_height - margins.bottom)]);


const frame1 =
d3.select("vis1")
    .append("svg")
        .attr("height", frame_height)
        .attr("width", frame_width)
        .attr("class", "frame");

frame1.selectAll("points")
    .data(data1)
    .enter()
    .append("circle")
        .attr("cx", margins.left)
        .attr("cy", (d) => {return (y_scale(d) + margins.bottom);})
        .attr("r", 5)
        .attr("class", "point");

frame1.append("axis")
    .attr("transform", "translate(" + margins.left + "," + margins.bottom + ")")
    .call(
        d3.axisLeft()
            .scale(y_scale)
            .ticks(10)
        )
        .attr("font-size", "20px");


