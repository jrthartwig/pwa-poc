import getDataByDepartmentAndDoctor from "./getDataByDepartmentAndDoctor";

const data = [{
    name: "Dr. Mario",
    department: "3D World",
    startTime: new Date(Date.UTC(2021, 12, 24, 7, 0)),
    endTime: new Date(Date.UTC(2021, 12, 24, 20, 0)),
    notes: "here are some notes",
    role: "Doctor",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Mario",
    department: "3D World",
    startTime: new Date(Date.UTC(2021, 12, 25, 7, 0)),
    endTime: new Date(Date.UTC(2021, 12, 25, 20, 0)),
    notes: "here are some notes",
    role: "Doctor",
    callOrder: 1,
    pager: 123456, 
  }, 
  {
    name: "Dr. Mario",
    department: "Not 3D World",
    startTime: new Date(Date.UTC(2021, 12, 25, 7, 0)),
    endTime: new Date(Date.UTC(2021, 12, 25, 20, 0)),
    notes: "here are some notes",
    role: "Doctor",
    callOrder: 1,
    pager: 123456, 
  }, 
  {
    name: "Not Dr. Mario",
    department: "3D World",
    startTime: new Date(Date.UTC(2021, 12, 25, 7, 0)),
    endTime: new Date(Date.UTC(2021, 12, 25, 20, 0)),
    notes: "here are some notes",
    role: "Doctor",
    callOrder: 1,
    pager: 123456, 
  }, 
]

const mockDataByDoctorAndDepartment = [{
    name: "Dr. Mario",
    department: "3D World",
    startTime: new Date(Date.UTC(2021, 12, 24, 7, 0)),
    endTime: new Date(Date.UTC(2021, 12, 24, 20, 0)),
    notes: "here are some notes",
    role: "Doctor",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Mario",
    department: "3D World",
    startTime: new Date(Date.UTC(2021, 12, 25, 7, 0)),
    endTime: new Date(Date.UTC(2021, 12, 25, 20, 0)),
    notes: "here are some notes",
    role: "Doctor",
    callOrder: 1,
    pager: 123456, 
  }]

describe('getDataByDoctorAndDepartment', () => {
    it('exists', () => {
        expect(getDataByDepartmentAndDoctor(data, "Dr. Mario", "3D World")).toBeDefined();
    })
    it('filters data by department and doctor', () => {
        expect(getDataByDepartmentAndDoctor(data, "Dr. Mario", "3D World")).toEqual(mockDataByDoctorAndDepartment);
    })
})