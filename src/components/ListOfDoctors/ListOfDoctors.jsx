import React, { useState, useEffect } from "react";
import { useAllData } from "../../contexts/allData";
import getDataByDepartment from "../../services/getDataByDepartment";
import buttons from "../../data/buttons";

const ListOfDoctors = () => {
    const [filteredDoctors, setFilteredDoctors] = useState(null);

    const allDoctorData = useAllData();

    useEffect(() => {
        setFilteredDoctors(allDoctorData);
    }, []);

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
                    <button value={departmentType.value} onClick={handleDepartmentSelection}>
                        {departmentType.name}
                    </button>
                ))
            }
            </div>
            {
                filteredDoctors &&
                filteredDoctors.map((i, k) => (
                    <ul>
                        <ul>
                            <li>{i.name}</li>
                            <li>{i.department}</li>
                            <li>{i.role}</li>
                            <li>{i.startTime.toUTCString()}</li>
                            <li>{i.endTime.toUTCString()}</li>
                            <li>{i.role}</li>
                            <li>{i.notes}</li>
                            <li>{i.callOrder}</li>
                            <li>{i.pager}</li>
                        </ul>
                    </ul>
                ))
            }
        </div>
    )
}

export default ListOfDoctors;