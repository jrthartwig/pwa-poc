import React, { useState, useEffect } from "react";
import { useAllData } from "../../contexts/allData";
import getDataByDepartment from "../../services/getDataByDepartment";
import DoctorInformation from "../DoctorInformation/DoctorInformation";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import departmentOptions from "../../data/departmentOptions";
import getDataByDoctor from "../../services/getDataByDoctors";
import personOptions from "../../data/personOptions";
import getDataByDepartmentAndDoctor from "../../services/getDataByDepartmentAndDoctor";

const FilteredListOfDoctors = () => {
    const [filteredDoctors, setFilteredDoctors] = useState(null);
    const [doctor, setDoctor] = useState("");
    const [department, setDepartment] = useState("");

    const allDoctorData = useAllData();

    useEffect(() => {
        setFilteredDoctors(allDoctorData);
    }, [allDoctorData]);

    const handleDepartmentSelection = (e) => {
        setDepartment(e.target.value);
        console.log(doctor);
        console.log(e.target.value);
        if (doctor !== "" && doctor !== "allDoctors") {
            setFilteredDoctors(getDataByDepartmentAndDoctor(allDoctorData, doctor, e.target.value));
        }
        else {
            let selectedDepartment = e.target.value;
            selectedDepartment !== "allDepartments"
                ? setFilteredDoctors(getDataByDepartment(allDoctorData && allDoctorData, selectedDepartment))
                : setFilteredDoctors(allDoctorData && allDoctorData);
        }
    }

    const handleDoctorSelection = (e) => {
        console.log(e.target.value)
        console.log(department)
        setDoctor(e.target.value)
        if (department !== "" && department !== "allDepartments")
        {
            setFilteredDoctors(getDataByDepartmentAndDoctor(allDoctorData, e.target.value, department))
        }
        else {

            let selectedDoctor = e.target.value;
            selectedDoctor !== "allDoctors"
            ? setFilteredDoctors(getDataByDoctor(allDoctorData && allDoctorData, selectedDoctor))
            : setFilteredDoctors(allDoctorData && allDoctorData);
        }
    }

    return (
        <div>
            <DropdownFilter label="Department" options={departmentOptions} onChangeHandler={handleDepartmentSelection} />
            <DropdownFilter label="Doctors" options={personOptions} onChangeHandler={handleDoctorSelection} />
            {
                filteredDoctors &&
                <DoctorInformation filteredDoctors={filteredDoctors} />
            }
        </div>
    )
}

export default FilteredListOfDoctors;