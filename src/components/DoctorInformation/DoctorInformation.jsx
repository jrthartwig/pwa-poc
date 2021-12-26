const DoctorInformation = (props) => {
    const filteredDoctors = props.filteredDoctors.map((doctor) => 
        <ul>
            <li>Doctor Name: {doctor.name}</li>
            <li>Department: {doctor.department}</li>
            <li>Role: {doctor.role}</li>
            <li>Start Time: {doctor.startTime.toUTCString()}</li>
            <li>End Time: {doctor.endTime.toUTCString()}</li>
            <li>Notes: {doctor.notes}</li>
            <li>Call Order: {doctor.callOrder}</li>
            <li>Pager: {doctor.pager}</li>
        </ul>
    )
    return (
        <div>
            {filteredDoctors}
        </div>
    )
}

export default DoctorInformation;