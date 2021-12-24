import React from 'react';
import ListOfDoctors from './components/ListOfDoctors/ListOfDoctors';
import { AllDataProvider } from './contexts/allData';

function App() {
  return (
    <AllDataProvider>
      <ListOfDoctors />
    </AllDataProvider>
  );
}

export default App;
