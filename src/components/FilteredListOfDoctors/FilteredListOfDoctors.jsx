import React, { useEffect, useState } from "react";
import { useAllData } from "../../contexts/allData";
import DoctorInformation from "../DoctorInformation/DoctorInformation";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import departmentOptions from "../../data/departmentOptions";
import personOptions from "../../data/personOptions";

const FilteredListOfDoctors = () => {
    const [doctor, setDoctor] = useState("");
    const [department, setDepartment] = useState("");

    const allDoctorData = useAllData();

    const handleDepartmentSelection = (e) => {
        setDepartment(e.target.value);
    }

    const handleDoctorSelection = (e) => {
        setDoctor(e.target.value)
    }

    const filterDoctors = (doctor, department, allDoctorData) => {
        if(doctor && !department)
            return allDoctorData.filter((dr) => doctor === dr.name)
        if(department && !doctor)
            return allDoctorData.filter((dr) => department === dr.department)
        if(department && doctor)
            return allDoctorData.filter((dr => doctor === dr.name && department === dr.department))
        if(!department && !doctor)
            return allDoctorData
    }

    return (
        <div>
            <DropdownFilter label="Department" options={departmentOptions} onChangeHandler={handleDepartmentSelection} />
            <DropdownFilter label="Doctors" options={personOptions} onChangeHandler={handleDoctorSelection} />
            {
                
                // console.log(allDoctorData.doctorInformation)
                // allDoctorData && console.log(filterDoctors(doctor, department, allDoctorData.doctorInformation))
                allDoctorData && <DoctorInformation filteredDoctors={allDoctorData && filterDoctors(doctor, department, allDoctorData.doctorInformation)} />
            }
        </div>
    )
}

export default FilteredListOfDoctors;