let graphData = [
  { data: "dsflfs", test: "234242" },
  { data: "dsflfs", test: "234242" },
];

var width = 300;
var height = 300;

// append the svg object to the body of the page
var svg = d3
  .select("#mydata")
  .append("svg")
  .attr("width", 300)
  .attr("height", 300);

// create dummy data -> just one element per circle

// Initialize the circle: all located at the center of the svg area
var node = svg
  .append("g")
  .selectAll("circle")
  .data(graphData)
  .enter()
  .append("circle")
  .attr("r", 10)
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .style("fill", "#69b3a2")
  .style("fill-opacity", 0.3)
  .attr("stroke", "#69a2b2")
  .style("stroke-width", 4);

// Features of the forces applied to the nodes:
var simulation = d3
  .forceSimulation()
  .force(
    "center",
    d3
      .forceCenter()
      .x(width / 2)
      .y(height / 2)
  ) // Attraction to the center of the svg area
  .force("charge", d3.forceManyBody().strength(90)) // Nodes are attracted one each other of value is > 0
  .force("collide", d3.forceCollide().strength(0.01).radius(30).iterations(1)); // Force that avoids circle overlapping

// Apply these forces to the nodes and update their positions.
// Once the force algorithm is happy with positions ('alpha' value is low enough), simulations will stop.
simulation.nodes(graphData).on("tick", function (d) {
  node
    .attr("cx", function (d) {
      return d.x;
    })
    .attr("cy", function (d) {
      return d.y;
    });
});
//d3
