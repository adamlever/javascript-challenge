// Source data from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Create function to clear table
function clearTable() {
  tbody.html("");
}

// Create function to reset and populate table with all data
function resetTable() {
  
  // Clear any current data
  clearTable()

  // Clear input values
  document.querySelector("#datetime").value = '';
  document.querySelector("#city").value = '';
  document.querySelector("#state").value = '';
  document.querySelector("#country").value = '';
  document.querySelector("#shape").value = '';
  
  // Reset the tableData to the source data from data.js
  var tableData = data;

  // Loop through data and populate table rows
  tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// Initial population of table
resetTable()

// Create function to populate table
function populateTable() {
  
  // Clear any current data
  clearTable()

  // Loop through data and populate table rows
  tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// Select the buttons
var filterButton = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn");

// Create event handler for clicking the filter and reset buttons
filterButton.on("click", filterTable);
resetButton.on("click", resetTable);

// Create the function to run for filter event
function filterTable() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear the table
    clearTable()
 
    // Get the value of the users inputs and if necessary convert strings to lower case
    var dateValue = d3.select("#datetime").property("value")
    var cityValue = d3.select("#city").property("value").toLowerCase()
    var stateValue = d3.select("#state").property("value").toLowerCase()
    var countryValue = d3.select("#country").property("value").toLowerCase()
    var shapeValue = d3.select("#shape").property("value").toLowerCase()

    // Print the input filter values to the console
    console.log("Inputs:");
    console.log("       Date- " + dateValue);
    console.log("       City- " + cityValue);
    console.log("       State- " + stateValue);
    console.log("       Country- " + countryValue);

    // Create an empty object to be used to filter the data
    var filterValues = {}

    // Create keys and values for filter object
    if (dateValue.length !== 0) {
      filterValues["datetime"] = dateValue
    }

    if (cityValue.length !== 0) {
      filterValues["city"] = cityValue
    }

    if (stateValue.length !== 0) {
      filterValues["state"] = stateValue
    }

    if (countryValue.length !== 0) {
      filterValues["country"] = countryValue
    }

    if (shapeValue.length !== 0) {
      filterValues["shape"] = shapeValue
    }

    // Print the filter object to the console
    console.log("Object to be filtered- "); 
    console.log(filterValues);

    // Filter the data by the filter object
    Object.entries(filterValues).forEach(function([key, value]){
      tableData = tableData.filter(item => item[key] === value)
    })

    // Print the filter data to the console
    console.log("Data to be filtered- "); 
    console.log(tableData);

    // Run the function to populate the table with the filter data
    populateTable()
}