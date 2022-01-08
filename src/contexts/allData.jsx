import React, { useContext, createContext } from 'react';
import useGetAllData from '../hooks/useGetAllData';

const AllDataContext = createContext();

const useAllData = () => useContext(AllDataContext);

const AllDataProvider = ({ children }) => {
    let entireDataSet = useGetAllData();

    return <AllDataContext.Provider value={entireDataSet}>{children}</AllDataContext.Provider>;
}

export { AllDataProvider, useAllData };