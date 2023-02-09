import React, { useEffect, useState } from "react";

const objects = [
  { key: "1", year: 2009, make: "Ford", car: "Mustang"},
  { key: "2", year: 1986, make: "Toyota", car: "Corolla"},
  { key: "3", year: 2012, make: "Toyota", car: "Hilux"},
  { key: "4", year: 2020, make: "Tesla", car: "Model Y"},
  { key: "5", year: 2025, make: "Tesla", car: "CyberTruck"},
  { key: "6", year: 2012, make: "Subaru", car: "WRX"},
  { key: "7", year: 2012, make: "Ford", car: "Ranger"},
  { key: "8", year: 2009, make: "Mitsubishi", car: "Pajero"},
  { key: "9", year: 1992, make: "Honda", car: "Prelude"},
  { key: "10", year: 1991, make: "Honda", car: "Civic"},
];

function App() {
  const [inputCar, setInputCar] = useState("");
  const [inputMake, setInputMake] = useState("");
  const [filteredObjects, setFilteredObjects] = useState(objects)
  
  const inputCarHandler = e => {
    setInputCar(e.target.car);
  };

  const inputMakeHandler = e => {
    setInputMake(e.target.value);
  };

  useEffect(() => {
    setFilteredObjects(() => {
      const newObjects = objects.filter(item => item.car.includes(inputCar)).filter(item => item.make.includes(inputMake));
      return newObjects;
    });
  }, [inputCar, inputMake]);

  const listItems = filteredObjects.map((item) =>
    <> 
      <tr>
        <td>{item.make}</td>
        <td>{item.car}</td>
      </tr>
    </>
  );
  
  return (
    <>
    <h1>hello</h1>
    <form>
      <div>
        <label htmlFor="input-make">Filter by Make</label>
        <input type="text" id="input-type" onChange={inputMakeHandler}/>
      </div>
      <div>
        <label htmlFor="input-car">Filter by Car</label>
        <input type="text" id="input-car" onChange={inputCarHandler}/>
      </div>
    </form>
    <br />
    <table>
        <tr>
          <th>Make</th>
          <th>Car</th>
        </tr>
        {listItems}
    </table>
  </>);
};

export default App;
