import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';

const AgentPage = () => {
    const [agentdata, setAgentdata] = useState();
    const navigate = useNavigate();
    let name, value;
    const API_URL="https://immenseline.com/loan-backend/api";

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setAgentdata({ ...agentdata, [name]: value }); //[] dynamic data for
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { 
            name,
            company_id,
            email,
            mobile_number,
            password,
            description,
            user_role_id,
            aadhaar_number 
        } =
            agentdata;

        let baseurl = `${API_URL}/user`;
        const regInf = {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                company_id,
                email,
                mobile_number,
                password,
                description,
                aadhaar_number,
                user_role_id
            }),
        };
        const res = await fetch(baseurl, regInf);
        const result = await res.json();
        console.log("result", result);
        localStorage.setItem("user", JSON.stringify(result));
        if (result.status === 400 || !result) {
            // toast.info('Invalid user details', { autoClose: 1500 })
        } else {
            // toast.success('new candidate add is successfully', { autoClose: 1500 })
            navigate("/signin");
        }
    };

    return (
        <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
            <div
                className="main"
                style={{
                    backgroundColor: "#022238",
                    width: "100%",
                    height: "150px",
                }}
            >
                <div style={{ marginTop: "35px" }}>
                    <img
                        src="https://5d.solutions/wp-content/themes/5d/images/logo.svg"
                        style={{ margin: "auto" }}
                        width="100"
                        height="70"
                    ></img>
                </div>
            </div>
            <center>
                <h1>Admin Register</h1>
            </center>
            {/* <Navbar/> */}

            <div className="container" style={{ marginTop: "10px" }}>
                <div className="mb-4 row">
                    <div className="col-6 sm-4">
                        <label
                            htmlFor="formGroupExampleInput"
                            className="form-label"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            onChange={handleInput}
                            name="name"
                            placeholder="name"
                        />
                    </div>
                    <div className="col-6 sm-4">
                        <label
                            htmlFor="formGroupExampleInput"
                            className="form-label"
                        >
                            User Role
                        </label>
                        <select
                            className="form-select"
                            id="company_id"
                            onChange={handleInput}
                            name="company_id"
                            aria-label="select example"
                        >
                            <option value="Select">Select Role</option>
                            <option value="Aman">Elon</option>
                            <option value="Aijaj">Aijaj</option>
                            <option value="Faiyaj">Faiyaj</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4 row">
                    <div className="col-6 sm-4">
                        <label
                            htmlFor="formGroupExampleInput"
                            className="form-label"
                        >
                            Email*
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={handleInput}
                            name="email"
                            id="email"
                            placeholder="Enter email..."
                        />
                    </div>
                    <div className="col-6 sm-4">
                        <label
                            htmlFor="formGroupExampleInput"
                            className="form-label"
                        >
                            Mobile Number*
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            id="mobile_number"
                            onChange={handleInput}
                            name="mobile_number"
                            placeholder="mobile_number*"
                        />
                    </div>
                </div>
                <div className="mb-4 row">
                    <div className="col-6 sm-4">
                        <label
                            htmlFor="formGroupExampleInput"
                            className="form-label"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={handleInput}
                            id="password"
                            placeholder="password"
                        />
                    </div>
                    <div className="col-6 sm-4">
                        <label
                            htmlFor="formGroupExampleInput"
                            className="form-label"
                        >
                            Adhaar Number
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            id="aadhaar_number"
                            onChange={handleInput}
                            name="aadhaar_number"
                            placeholder="aadhaar_number*"
                        />
                    </div>
                </div>
                <div className="mb-4 row">
                    <div className="col-6 sm-4">
                        <label
                            htmlFor="formGroupExampleInput"
                            className="form-label"
                        >
                            Company*
                        </label>
                        <select
                            className="form-select"
                            id="user_role_id"
                            onChange={handleInput}
                            name="user_role_id"
                            aria-label="select example"
                        >
                            <option value="Select">Select Company*</option>
                            <option value="TCS">TCS</option>
                            <option value="Wipro">Wipro</option>
                            <option value="Accenture">Accenture</option>
                        </select>
                    </div>
                </div>

                <div className="mb-2 row" >
                    <div className="col-mdm-2">
                    <button
                            className="btn btn-info"
                            onClick={handleSubmit}
                            style={{
                                margin: "100px",
                                // width: "200px",
                                // borderRadius: "25px",
                                // height: "50px",
                            }}
                        >
                            Back
                        </button>
                        <button
                            className="btn btn-info"
                            onClick={handleSubmit}
                            // style={{
                            //     margin: "auto",
                            //     width: "200px",
                            //     borderRadius: "25px",
                            //     height: "50px",
                            // }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                {/* <ToastContainer /> */}
            </div>
        </div>
    );
};

export default AgentPage;
