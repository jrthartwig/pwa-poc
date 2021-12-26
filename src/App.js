import React from 'react';
import FilteredListOfDoctors from './components/ListOfDoctors/FilteredListOfDoctors';
import { AllDataProvider } from './contexts/allData';

function App() {
  return (
    <AllDataProvider>
      <FilteredListOfDoctors />
    </AllDataProvider>
  );
}

export default App;
