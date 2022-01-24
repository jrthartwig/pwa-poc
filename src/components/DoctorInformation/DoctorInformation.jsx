const DoctorInformation = props => {
    const {filteredDoctors} = props; 
    const doctorInformation = filteredDoctors?.map((doctor) => 
        <ul>
            <li>Doctor Name: {doctor.name}</li>
            <li>Department: {doctor.department}</li>
            <li>Role: {doctor.role}</li>
            <li>Start Time: {doctor.startTime}</li>
            <li>End Time: {doctor.endTime}</li>
            <li>Notes: {doctor.notes}</li>
            <li>Call Order: {doctor.callOrder}</li>
            <li>Pager: {doctor.pager}</li>
        </ul>
    )
    return (
        <div>
            {doctorInformation}
        </div>
    )
}

export default DoctorInformation;