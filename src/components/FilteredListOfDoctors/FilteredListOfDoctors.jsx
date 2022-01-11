import React, { useState } from "react";
import { useAllData } from "../../contexts/allData";
import DoctorInformation from "../DoctorInformation/DoctorInformation";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import departmentOptions from "../../data/departmentOptions";
import personOptions from "../../data/personOptions";
import "./filtered-list-of-doctors.css";

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
        <div className="container">
            <div className="department-dropdown">
                <DropdownFilter label="Department" options={departmentOptions} onChangeHandler={handleDepartmentSelection} />
            </div>
            <div className="doctor-dropdown">
                <DropdownFilter label="Doctors" options={personOptions} onChangeHandler={handleDoctorSelection} />
            </div>
            {
                allDoctorData &&
                <DoctorInformation filteredDoctors={filterDoctors(doctor, department, allDoctorData)} />
            }
        </div>
    )
}

export default FilteredListOfDoctors;