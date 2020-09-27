// from data.js
var tableData = data;
var myKeys = Object.values(tableData)
console.log(myKeys)
// YOUR CODE HERE!


var tbody = d3.select("tbody");


console.log(data);

tableData.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.values(ufo).forEach((value) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


var inputField = d3.select("#datetime");




console.log("test")
inputField.on("change", function() {
  d3.selectAll("tr").remove();
  d3.selectAll("td").remove();
  var ufoFil = {};

  var newText = d3.event.target.value;
  var ufoFil = tableData.filter((x) => { return x.datetime == newText})
  ufoFil.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.values(ufo).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
} )

