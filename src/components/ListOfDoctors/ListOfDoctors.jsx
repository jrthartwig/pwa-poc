import { useAllData } from "../../contexts/allData";

const ListOfDoctors = () => {
    const allDoctorData = useAllData();
    return (
        <div>
            {
                allDoctorData &&
                allDoctorData.map((i, k) => (
                    <ul>
                        <li key={k}>{i.name}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default ListOfDoctors; 