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
    const doctorHasBeenSet = doctor !== "" && doctor !== "allDoctors";
    const departmentHasBeenSet = department !== "" && department !== "allDepartments";

    useEffect(() => {
        setFilteredDoctors(allDoctorData);
    }, [allDoctorData]);

    const handleDepartmentSelection = (e) => {
        setDepartment(e.target.value);
        // if (doctorHasBeenSet) {
        //     setFilteredDoctors(getDataByDepartmentAndDoctor(allDoctorData, doctor, e.target.value));
        // }
        // // else if(!departmentHasBeenSet && doctorHasBeenSet) {
        // //     setFilteredDoctors(getDataByDepartment(allDoctorData, department))
        // // }
        // else {
        //     let selectedDepartment = e.target.value;
        //     selectedDepartment !== "allDepartments"
        //         ? setFilteredDoctors(getDataByDepartment(allDoctorData && allDoctorData, selectedDepartment))
        //         : setFilteredDoctors(allDoctorData && allDoctorData);
        // }
    }

    const handleDoctorSelection = (e) => {
        // console.log(e.target.value)
        // console.log(department)
        setDoctor(e.target.value)
        // if (departmentHasBeenSet) {
        //     setFilteredDoctors(getDataByDepartmentAndDoctor(allDoctorData, e.target.value, department))
        // }
        // else {
        //     let selectedDoctor = e.target.value;
        //     selectedDoctor !== "allDoctors"
        //         ? setFilteredDoctors(getDataByDoctor(allDoctorData && allDoctorData, selectedDoctor))
        //         : setFilteredDoctors(allDoctorData && allDoctorData);
        // }
    }

    return (
        <div>
            <DropdownFilter label="Department" options={departmentOptions} onChangeHandler={handleDepartmentSelection} />
            <DropdownFilter label="Doctors" options={personOptions} onChangeHandler={handleDoctorSelection} />
            {
                allDoctorData &&
                <DoctorInformation filteredDoctors={allDoctorData.filter((dr) => doctor === dr.name)} />
            }
            {
            console.log(doctor)
           // console.log(allDoctorData)
            }
            {
                console.log(allDoctorData)
            }
            {
                console.log(allDoctorData.filter((dr) => doctor === dr.name))
            }
        </div>
    )
}

export default FilteredListOfDoctors;