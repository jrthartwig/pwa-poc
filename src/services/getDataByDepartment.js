const getDataByDepartment = (data, department) => {

  const departmentData = data.filter(
    (doctor) => doctor.department === department
  );

  return departmentData;
};

export default getDataByDepartment;