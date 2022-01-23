import React, {useState, useEffect} from 'react';
import FilteredListOfDoctors from './components/FilteredListOfDoctors/FilteredListOfDoctors';
import { AllDataProvider } from './contexts/allData';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/getalldoctorinformation`)).json();
      setData(text);
    })();
  });
  return (
    <div>{data[0]}</div>
    // <AllDataProvider>
    //   <FilteredListOfDoctors />
    // </AllDataProvider>
  );
}

export default App;
