import React, { useState, useEffect } from "react";
import { useAllData } from "../../contexts/allData";
import getDataByDepartment from "../../services/getDataByDepartment";
import buttons from "../../data/buttons";
import useGetDataByDepartment from "../../hooks/useGetDataByDepartment";
import FilterButton from "../FilterButton/FilterButton";
import DoctorInformation from "../DoctorInformation/DoctorInformation";

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

    return (
        <div>
            <div>
            {
                buttons.map((departmentType, index) => (
                    <FilterButton key={index} value={departmentType.value} onClickHandler={handleDepartmentSelection} name={departmentType.name} />
                ))
            }
            </div>
            {
                filteredDoctors &&
                <DoctorInformation filteredDoctors={filteredDoctors} />
            }
        </div>
    )
}

export default FilteredListOfDoctors;