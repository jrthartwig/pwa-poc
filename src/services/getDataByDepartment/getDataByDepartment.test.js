import getDataByDepartment from "./getDataByDepartment";

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
]

const mockDataByDepartment = [{
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

describe('getDataByDepartment', () => {
    it('exists', () => {
        expect(getDataByDepartment(data, "3D World")).toBeDefined();
    })
    it('filters data by department', () => {
        expect(getDataByDepartment(data, "3D World")).toEqual(mockDataByDepartment);
    })
})