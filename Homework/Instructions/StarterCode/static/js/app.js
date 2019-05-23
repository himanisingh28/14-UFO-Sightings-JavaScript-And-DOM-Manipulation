// from data.js
var tableData = data;


var tbody = d3.select("tbody");
// console.log(tableData);

tableData.forEach(function(getUFOSightings){
    // console.log(getUFOSightings);
    var row = tbody.append("tr");
    Object.entries(getUFOSightings).forEach(function([key,value]){
       // console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});

var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(ufosighting => ufosighting.datetime === inputValue);
  console.log(filteredData);

  if (inputValue == "") {   
    var tbody = d3.select("tbody");
    tbody.selectAll("*").remove();    
    data.forEach((UFOsighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOsighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
        });
  }
  
else {
    var tbody = d3.select("tbody");
    tbody.selectAll("*").remove();    
    filteredData.forEach((UFOsighting) => {
        var row = tbody.append("tr");
        Object.entries(UFOsighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
        });
}

});

