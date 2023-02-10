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
  // State hooks for search and search types as well as current set of 
  // listed objects.
  const [inputSearch, setInputSearch] = useState("");
  const [inputType, setInputType] = useState("year");
  const [filteredObjects, setFilteredObjects] = useState(objects)
  
  // Handlers to update state of input search and search type.
  const inputSearchHandler = e => {
    setInputSearch(e.target.value);
  };

  const inputTypeHandler = e => {
    setInputType(e.target.value);
  };

  // whenever search state is updated, as a side effect create a new, 
  // filtered set of objects to display.
  useEffect(() => {
    setFilteredObjects(() => {
      const newObjects = objects.filter(item =>
        item[inputType].toLowerCase().includes(inputSearch.toLowerCase())
      );
      return newObjects;
    });
  }, [inputSearch, inputType]);

  // get filtered object list in JSX
  let listItems = filteredObjects.map((item) => {
    let entries = details.map((key) => 
      <td className="p-2 text-slate-400 font-sans text-3xl font-thin">
        { item[key.toLowerCase()] }
      </td>
    );
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
    <body className="h-screen bg-gradient-to-b from-slate-900 to-slate-800 
      w-screen overflow-auto p-10">
      {/* title */}
      <div className="container object-top mx-auto">
        <h1 className="font-sans text-8xl truncate font-thin italic 
          tracking-wider text-center text-slate-300 p-4 pb-8">
          Live Filtering
        </h1>
      </div>
      {/* filters container */}
      <div className="container object-center mx-auto">
        <div>
          <form className="bg-slate-900 rounded-lg">
            <div className="p-2 flex flex-row justify-between">
              <div className="basis-1/2">
                <label className="text-slate-500 font-sans font-thin text-4xl"
                  htmlFor="input-type">
                  Filter by:
                </label>
              </div>
              <div className="basis-1/2">
                <
                  select 
                  className="bg-slate-700 text-slate-500 indent-3 w-1/2 
                    float-right rounded-full h-full text-4xl font-thin 
                    font-sans" 
                  name="Search by" 
                  id="input-type" 
                  onChange={inputTypeHandler}
                >
                { listSearchType }
                </select>
              </div>
            </div>
            <div className="p-2 flex flex-row justify-between">
              <div className="basis-1/2">
                <label htmlFor="input-search" 
                  className="w-full text-slate-500 font-sans font-thin 
                  text-4xl">
                  Search:
                </label>
              </div>
              <div className="basis-1/2">
                <input className="bg-slate-700 text-slate-500 indent-3 w-1/2 
                  float-right rounded-full h-full text-4xl font-thin font-sans"
                  type="text" id="input-search" onChange={inputSearchHandler}/>
              </div>
            </div>
          </form>
        </div>
        
        <br/>

        <div className="container mx-auto columns-1">
          <table className="table-auto w-full border-collapse bg-gradient-to-b from-slate-800 to-slate-700
            text-left">
              <tr className="bg-slate-900">
                { details.map((item) => <th className="p-2 text-4xl font-thin text-slate-500">{ item }</th>) }
              </tr>
              {listItems}
          </table>
        </div>
      </div>
  </body>);
};

export default App;
