const DoctorInformation = (props) => {
  const { filteredDoctors } = props;
  const doctorInformation = filteredDoctors.map((doctor) => (
    <div className="card">
      <ul>
        <li><b>Doctor Name:</b> {doctor.name}</li>
        <li><b>Department:</b> {doctor.department}</li>
        <li><b>Role:</b> {doctor.role}</li>
        <li><b>Start Time:</b> {doctor.startTime.toUTCString()}</li>
        <li><b>End Time:</b> {doctor.endTime.toUTCString()}</li>
        <li><b>Notes:</b> {doctor.notes}</li>
        <li><b>Call Order:</b> {doctor.callOrder}</li>
        <li><b>Pager:</b> {doctor.pager}</li>
      </ul>
    </div>
  ));
  return <div className="container">{doctorInformation}</div>;
};

export default DoctorInformation;
