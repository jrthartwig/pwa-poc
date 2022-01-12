import getDataByDoctor from "./getDataByDoctor";

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
    name: "Not Dr. Mario",
    department: "3D World",
    startTime: new Date(Date.UTC(2021, 12, 25, 7, 0)),
    endTime: new Date(Date.UTC(2021, 12, 25, 20, 0)),
    notes: "here are some notes",
    role: "Doctor",
    callOrder: 1,
    pager: 123456, 
  }, 
  {
    name: "Not Dr. Mario",
    department: "Not 3D World",
    startTime: new Date(Date.UTC(2021, 12, 25, 7, 0)),
    endTime: new Date(Date.UTC(2021, 12, 25, 20, 0)),
    notes: "here are some notes",
    role: "Doctor",
    callOrder: 1,
    pager: 123456, 
  }, 
]

const mockDataByDoctor = [{
    name: "Dr. Mario",
    department: "3D World",
    startTime: new Date(Date.UTC(2021, 12, 24, 7, 0)),
    endTime: new Date(Date.UTC(2021, 12, 24, 20, 0)),
    notes: "here are some notes",
    role: "Doctor",
    callOrder: 1,
    pager: 123456,
  }]

describe('getDataByDepartment', () => {
    it('exists', () => {
        expect(getDataByDoctor(data, "Dr. Mario")).toBeDefined();
    })
    it('filters data by department', () => {
        expect(getDataByDoctor(data, "Dr. Mario")).toEqual(mockDataByDoctor);
    })
})