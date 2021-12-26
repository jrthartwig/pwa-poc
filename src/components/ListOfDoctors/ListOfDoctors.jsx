import React, { useState, useEffect } from "react";
import { useAllData } from "../../contexts/allData";
import getDataByDepartment from "../../services/getDataByDepartment";
import buttons from "../../data/buttons";
import FilterButton from "../FilterButton/FilterButton";

const ListOfDoctors = () => {
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

    return (
        <div>
            <div>
            {
                buttons.map((departmentType, index) => (
                    <FilterButton value={departmentType.value} onClickHandler={handleDepartmentSelection} name={departmentType.name} />
                ))
            }
            </div>
            {
                filteredDoctors &&
                filteredDoctors.map((i, k) => (
                    <ul>
                        <ul>
                            <li>Doctor Name: {i.name}</li>
                            <li>Department: {i.department}</li>
                            <li>Role: {i.role}</li>
                            <li>Start Time: {i.startTime.toUTCString()}</li>
                            <li>End Time: {i.endTime.toUTCString()}</li>
                            <li>Role: {i.role}</li>
                            <li>Notes: {i.notes}</li>
                            <li>Call Order: {i.callOrder}</li>
                            <li>Pager: {i.pager}</li>
                        </ul>
                    </ul>
                ))
            }
        </div>
    )
}

export default ListOfDoctors;