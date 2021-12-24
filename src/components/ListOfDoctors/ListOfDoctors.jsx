import { useAllData } from "../../contexts/allData";

const ListOfDoctors = () => {
    const allDoctorData = useAllData();
    return (
        <div>
            {
                allDoctorData &&
                allDoctorData.map((i, k) => (
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