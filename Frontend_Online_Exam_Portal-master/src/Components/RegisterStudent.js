import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function RegisterStudent(props) {

    const [student, setStudent] = useState({
        studentName: "",
        email: "",
        mobNo: null,
        pass: "",
        address: {
            city: "",
            state: "",
            country: "",
            zip: null
        }
    });

    const submit = (e) => {
        console.log(student);
        props.registerStudent(student);
        setStudent({studentName: "",
        email: "",
        mobNo: null,
        pass: "",
        address: {
            city: "",
            state: "",
            country: "",
            zip: null
        }});
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-5 d-none d-lg-block bg-register-image" ></div>
                        <div className="col-lg-7" >
                            <div className="p-5" >
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Student Registration</h1>
                                </div>
                                <form className="user" onSubmit={submit} method="post" autoComplete="off">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            value={student.studentName}
                                            onChange={(e) => setStudent({ ...student, studentName: e.target.value })}
                                            className="form-control form-control-user"
                                            id="studentName"
                                            placeholder="Student Name" />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            value={student.email}
                                            onChange={(e) => setStudent({ ...student, email: e.target.value })}
                                            className="form-control form-control-user"
                                            id="exampleInputEmail"
                                            placeholder="Email Address" />
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                value={student.mobNo}
                                                onChange={(e) => setStudent({ ...student, mobNo: e.target.value })}
                                                className="form-control form-control-user"
                                                id="mobileNo"
                                                placeholder="Mobile no." />
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="password"
                                                value={student.pass}
                                                onChange={(e) => setStudent({ ...student, pass: e.target.value })}
                                                className="form-control form-control-user"
                                                id="password"
                                                placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                value={student.address.city}
                                                onChange={(e) => setStudent({ ...student, address: { ...student.address, city: e.target.value } })}
                                                className="form-control form-control-user"
                                                id="city"
                                                placeholder="City" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="text"
                                                value={student.address.state}
                                                onChange={(e) => setStudent({ ...student, address: { ...student.address, state: e.target.value } })}
                                                className="form-control form-control-user"
                                                id="state"
                                                placeholder="State" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                value={student.address.country}
                                                onChange={(e) => setStudent({ ...student, address: { ...student.address, country: e.target.value } })}
                                                className="form-control form-control-user"
                                                id="country"
                                                placeholder="Country" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="text"
                                                value={student.address.zip}
                                                onChange={(e) => setStudent({ ...student, address: { ...student.address, zip: e.target.value } })}
                                                className="form-control form-control-user"
                                                id="zip"
                                                placeholder="Zipcode" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <button type="submit" className="btn btn-primary btn-user btn-block">Register</button>
                                        </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <button type="reset" className="btn btn-primary btn-user btn-block">Reset</button>
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <div className="text-center">
                                    <Link className="medium" to="/student-login">Already have an account? Login!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
