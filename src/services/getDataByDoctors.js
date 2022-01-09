const getDataByDoctor = (data, name) => {
    const doctorData = data.filter(
        (doctor) => doctor.name === name
      );
  
    return doctorData;
  };
  
  export default getDataByDoctor;