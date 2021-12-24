import React, { useContext, createContext } from 'react';
import getAllData from '../services/getAllData';

const AllDataContext = createContext();

const useAllData = () => useContext(AllDataContext);

const AllDataProvider = ({ children }) => {
    let entireDataSet = getAllData();

    return <AllDataContext.Provider value={entireDataSet}>{children}</AllDataContext.Provider>;
}

export { AllDataProvider, useAllData };