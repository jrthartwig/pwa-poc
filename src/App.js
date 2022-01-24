import React, { useState, useEffect } from "react";
import FilteredListOfDoctors from "./components/FilteredListOfDoctors/FilteredListOfDoctors";
import { AllDataProvider } from "./contexts/allData";

function App() {
  // const [data, setData] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:7071/api/GetAllDoctorInformation")
  //   .then(res => res.json())
  //   .then(res => setData(res))
  // })

  return (
    // <div>{data && data[0].name}</div>
    <AllDataProvider>
      <FilteredListOfDoctors />
    </AllDataProvider>
  );
}

export default App;
