import React, { useEffect, useState } from "react";
import "./App.css"

// Define car details / columns of table to search.
const details = ["Year", "Make", "Car"];

// Define objects in list to search.
const objects = [
  { key: "1", year: "2009", make: "Ford", car: "Mustang"},
  { key: "2", year: "1986", make: "Toyota", car: "Corolla"},
  { key: "3", year: "2012", make: "Toyota", car: "Hilux"},
  { key: "4", year: "2020", make: "Tesla", car: "Model Y"},
  { key: "5", year: "2025", make: "Tesla", car: "CyberTruck"},
  { key: "6", year: "2012", make: "Subaru", car: "WRX"},
  { key: "7", year: "2012", make: "Ford", car: "Ranger"},
  { key: "8", year: "2009", make: "Mitsubishi", car: "Pajero"},
  { key: "9", year: "1992", make: "Honda", car: "Prelude"},
  { key: "10", year: "1991", make: "Honda", car: "Civic"},
];

function App() {
  // State hooks for search and search types as well as current set of listed objects.
  const [inputSearch, setInputSearch] = useState("");
  const [inputType, setInputType] = useState("car");
  const [filteredObjects, setFilteredObjects] = useState(objects)
  
  // Handlers to update state of input search and search type.
  const inputSearchHandler = e => {
    setInputSearch(e.target.value);
  };

  const inputTypeHandler = e => {
    setInputType(e.target.value);
  };

  // whenever search state is updated, as a side effect create a new, filtered set of objects to display.
  useEffect(() => {
    setFilteredObjects(() => {
      const newObjects = objects.filter(item => item[inputType].toLowerCase().includes(inputSearch.toLowerCase()));
      return newObjects;
    });
  }, [inputSearch, inputType]);

  // get filtered object list in JSX
  let listItems = filteredObjects.map((item) => {
    let entries = details.map((key) => <td> { item[key.toLowerCase()] } </td>);
    return (
      <>
        <tr>
          { entries }
        </tr>
      </>
    );
  });

  // list options for search types in JSX select.
  const listSearchType = details.map((item) => 
    <option value={ item.toLowerCase() }>{ item }</option>
  );
  
  // HTML/JSX to display
  return (
    <body className="container">
    <h1>Live Filtering</h1>
    <form>
      <div>
        <label htmlFor="input-type">Filter by:</label>
        <select name="Search by" id="input-type" onChange={inputTypeHandler}>
          { listSearchType }
        </select>
      </div>
      <div>
        <label htmlFor="input-search">Search</label>
        <input type="text" id="input-search" onChange={inputSearchHandler}/>
      </div>
    </form>
    <br/>
    <table>
        <tr>
          { details.map((item) => <th>{ item }</th>) }
        </tr>
        {listItems}
    </table>
  </body>);
};

export default App;
