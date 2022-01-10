const data = [
  {
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
    department: "3D World",
    startTime: new Date(Date.UTC(2021, 12, 26, 7, 0)),
    endTime: new Date(Date.UTC(2021, 12, 26, 20, 0)),
    notes: "here are some notes",
    role: "Doctor",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Peach",
    department: "3D World",
    startTime: new Date(Date.UTC(2021, 12, 24, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 24, 21, 0)),
    notes: "here are some notes",
    role: "Doctor",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Peach",
    department: "3D World",
    startTime: new Date(Date.UTC(2021, 12, 25, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 25, 21, 0)),
    notes: "here are some notes",
    role: "Doctor",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Peach",
    department: "Party",
    startTime: new Date(Date.UTC(2021, 12, 26, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 26, 21, 0)),
    notes: "here are some notes",
    role: "Doctor",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Daisy",
    department: "Golf",
    startTime: new Date(Date.UTC(2021, 12, 24, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 24, 21, 0)),
    notes: "here are some notes",
    role: "NP",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Daisy",
    department: "Golf",
    startTime: new Date(Date.UTC(2021, 12, 25, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 25, 21, 0)),
    notes: "here are some notes",
    role: "NP",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Daisy",
    department: "Golf",
    startTime: new Date(Date.UTC(2021, 12, 26, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 26, 21, 0)),
    notes: "here are some notes",
    role: "NP",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Toad",
    department: "Party",
    startTime: new Date(Date.UTC(2021, 12, 24, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 24, 21, 0)),
    notes: "here are some notes",
    role: "Surgeon",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Toad",
    department: "Party",
    startTime: new Date(Date.UTC(2021, 12, 25, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 25, 21, 0)),
    notes: "here are some notes",
    role: "Surgeon",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Toad",
    department: "Party",
    startTime: new Date(Date.UTC(2021, 12, 26, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 26, 21, 0)),
    notes: "here are some notes",
    role: "Surgeon",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Koopa",
    department: "Golf",
    startTime: new Date(Date.UTC(2021, 12, 24, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 24, 21, 0)),
    notes: "here are some notes",
    role: "NP",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Koopa",
    department: "Golf",
    startTime: new Date(Date.UTC(2021, 12, 25, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 25, 21, 0)),
    notes: "here are some notes",
    role: "NP",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Koopa",
    department: "Golf",
    startTime: new Date(Date.UTC(2021, 12, 26, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 26, 21, 0)),
    notes: "here are some notes",
    role: "NP",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Donkey Kong",
    department: "Party",
    startTime: new Date(Date.UTC(2021, 12, 24, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 24, 21, 0)),
    notes: "here are some notes",
    role: "Surgeon",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Donkey Kong",
    department: "Party",
    startTime: new Date(Date.UTC(2021, 12, 25, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 25, 21, 0)),
    notes: "here are some notes",
    role: "Surgeon",
    callOrder: 1,
    pager: 123456,
  },
  {
    name: "Dr. Donkey Kong",
    department: "Party",
    startTime: new Date(Date.UTC(2021, 12, 26, 8, 0)),
    endTime: new Date(Date.UTC(2021, 12, 26, 21, 0)),
    notes: "here are some notes",
    role: "Surgeon",
    callOrder: 1,
    pager: 123456,
  },
];

export default data; 