const getDataByDepartmentAndDoctor = (data, name, department) => {
    const doctorData = data.filter(
        (doctor) => doctor.name === name && doctor.department === department
      );
    
    return doctorData;
  };
  
  export default getDataByDepartmentAndDoctor;