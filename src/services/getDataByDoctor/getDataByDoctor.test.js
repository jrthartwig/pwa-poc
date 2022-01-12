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

describe('given a doctor', () => {
    it('then getDataByDoctor exists', () => {
        expect(getDataByDoctor(data, "Dr. Mario")).toBeDefined();
    })
    it('then getDataByDoctor filters the data by doctor', () => {
        expect(getDataByDoctor(data, "Dr. Mario")).toEqual(mockDataByDoctor);
    })
})