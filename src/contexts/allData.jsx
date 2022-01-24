import React, { useContext, createContext, useEffect, useState } from "react";

const AllDataContext = createContext();

const useAllData = () => useContext(AllDataContext);

const AllDataProvider = ({ children }) => {
    const [doctorInformation, setDoctorInformation] = useState();
    
    const getDoctorInformation = async () => {
        const result = await fetch(`/api/GetAllDoctorInformation`)
        const _doctorInformation = await result.json();
        setDoctorInformation(_doctorInformation);
    };
    
    useEffect(() => {
        getDoctorInformation();
    }, [])
    
    return <AllDataContext.Provider value={{ getDoctorInformation, doctorInformation }}>{children}</AllDataContext.Provider>;
}
export { AllDataProvider, useAllData };