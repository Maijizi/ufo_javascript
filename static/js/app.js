// from data.js
var tableData = data;

// display the table
var tbody = d3.select("tbody");
tableData.forEach((alienData) => {
  var row = tbody.append("tr");
  Object.entries(alienData).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });

});

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputElement1 = d3.select("#country");
  var inputElement2 = d3.select("#state");
  var inputElement3 = d3.select("#shape");
  var inputElement4 = d3.select("#city");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var inputValue1 = inputElement1.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");


  console.log(inputValue);
  console.log(inputValue1);
  console.log(inputValue2);
  console.log(inputValue3);
  console.log(inputValue4);
  console.log(tableData);

  var filteredData = tableData.filter(alienData => alienData.datetime === inputValue
    & alienData.country === inputValue1 & alienData.state===inputValue2 & alienData.shape===inputValue3
    & alienData.city === inputValue4);

  console.log(filteredData);

  d3.selectAll("td").remove();

  filteredData.forEach((alienData) => {
    var row = tbody.append("tr");
    Object.entries(alienData).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);});
    });

});