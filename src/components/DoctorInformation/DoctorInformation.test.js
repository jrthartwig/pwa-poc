import '@testing-library/jest-dom'; 
import React from 'react'; 
import {render, screen} from '@testing-library/react';
import DoctorInformation from './DoctorInformation';

describe('the doctor information component', () => {
    it('renders with doctor information', () => {
        const doctor =  [{
            name: "Dr. Mario",
            department: "3D World",
            startTime: new Date(Date.UTC(2021, 12, 24, 7, 0)),
            endTime: new Date(Date.UTC(2021, 12, 24, 20, 0)),
            notes: "here are some notes",
            role: "Doctor",
            callOrder: 1,
            pager: 123456,
          }];
        render(<DoctorInformation filteredDoctors={doctor} />)

        expect(screen.getByText("Doctor Name: Dr. Mario")).toBeInTheDocument()
    })
})