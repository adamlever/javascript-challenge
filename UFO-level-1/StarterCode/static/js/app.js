// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// use Arrow Function and forEach to loop through all data and add to the .html table
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");

// Select the date form
var inputDate = d3.select("#datetime");

// Create event handler for pressing the button and enter key on form
button.on("click", runEnter);

// Create the function to run for event
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear the table
    tbody.html("");
  
    // Get the value property of the input element
    var inputValue = inputDate.property("value");
  
    // Print the value to the console
    console.log(inputValue);
  
    // Filter data
    var filteredData = tableData.filter(tableData => tableData.datetime == inputValue);

    // Print filtered data to the console
    console.log(filteredData);

    filteredData.forEach(ufoSighting => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  }