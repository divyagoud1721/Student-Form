import React from 'react';

const  Student= (props:any)=> {
       
        return (
            <div>
                <h1>Student Info</h1>
                <div className="student">
                <div>
                    <div>Firstname:</div><div>{props.student.firstname}</div>
                </div>
                <div>
                    <div>Lastname:</div><div>{props.student.lastname}</div>
                </div>
                <div>
                    <div>Street:</div><div>{props.student.street}</div>
                </div>
                <div>
                    <div>City:</div><div>{props.student.city}</div>
                </div>
                <div>
                    <div>PhoneNumber:</div><div>{props.student.phonenumber}</div>
                </div>
                <div>
                    <div>GPA:</div><div>{props.student.gpa}</div>
                </div>
            </div>
            </div>
        )
    }

export default Student;