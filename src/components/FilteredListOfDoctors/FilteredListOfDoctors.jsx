import React, { useState, useEffect } from "react";
import { useAllData } from "../../contexts/allData";
import getDataByDepartment from "../../services/getDataByDepartment";
import DoctorInformation from "../DoctorInformation/DoctorInformation";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import departmentOptions from "../../data/departmentOptions";
import getDataByDoctor from "../../services/getDataByDoctors";
import personOptions from "../../data/personOptions";
import "./filtered-list-of-doctors.css";

const FilteredListOfDoctors = () => {
    const [filteredDoctors, setFilteredDoctors] = useState(null);

    const allDoctorData = useAllData();

    useEffect(() => {
        setFilteredDoctors(allDoctorData);
    }, [allDoctorData]);

    const handleDepartmentSelection = (e) => {
        let selectedDepartment = e.target.value;
        selectedDepartment !== "allDepartments"
            ? setFilteredDoctors(getDataByDepartment(allDoctorData && allDoctorData, selectedDepartment))
            : setFilteredDoctors(allDoctorData && allDoctorData);
    }

    const handleDoctorSelection = (e) => {
        let selectedDoctor = e.target.value;
        selectedDoctor !== "allDoctors"
            ? setFilteredDoctors(getDataByDoctor(allDoctorData && allDoctorData, selectedDoctor))
            : setFilteredDoctors(allDoctorData && allDoctorData);
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
                filteredDoctors &&
                <div className="doctor-data">
                <DoctorInformation filteredDoctors={filteredDoctors} />
                </div>
            }
        </div>
    )
}

export default FilteredListOfDoctors;