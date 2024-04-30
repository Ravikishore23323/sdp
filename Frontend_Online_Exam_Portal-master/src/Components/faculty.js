import React, { useState } from 'react';

export default function FacultyLogin(props) {
    const [facultyId, setFacultyId] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!facultyId || !password) {
            // Handle empty fields
        } else {
            props.loginFaculty(facultyId, password);
            setFacultyId("");
            setPassword("");
        }
    }

    return (
        <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-7 mx-auto" align="center">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Faculty Login</h1>
                                </div>
                                <form className="user" onSubmit={submit} method="post" autoComplete="off">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            value={facultyId}
                                            onChange={(e) => setFacultyId(e.target.value)}
                                            className="form-control form-control-user"
                                            id="facultyId"
                                            placeholder="Faculty ID"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-control form-control-user"
                                            id="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-user btn-block">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
