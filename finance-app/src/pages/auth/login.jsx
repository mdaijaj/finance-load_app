import { useState } from "react";
import {useNavigate } from "react-router-dom";
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [userdata, setUserdata] = useState();
    const navigate = useNavigate()
    let name, value;
    const API_URL="https://immenseline.com/loan-backend/api";


    const handleInput = (e) => {
        name = e.target.name
        value = e.target.value
        setUserdata({ ...userdata, [name]: value })  //[] dynamic data for
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {
            email,
            password
        } = userdata;

        let baseurl = `${API_URL}/login`;
        const regInf = {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }
        const res = await fetch(baseurl, regInf);
        const result = await res.json()
        console.log("result", result)
        localStorage.setItem("user", JSON.stringify(result.userInfo))

        if (result.status === 200 && result) {
            // toast.success('new candidate add is successfully', { autoClose: 1500 })
            navigate('/user_list')
        }
        else {
            // toast.info('Invalid user details', { autoClose: 1500 })
        }
    }


    return (
        <div style={{display: "flex", flexDirection: "column", width: "100%"}}>

            <div className="main" style={{backgroundColor: "#022238", width: "100%", height: "150px"}}>
            <div style={{marginTop: "35px"}}>
            <img src="https://5d.solutions/wp-content/themes/5d/images/logo.svg" style={{margin: "auto"}} width="100" height="70"></img>
            </div>
            </div>
            
            <div className="container" style={{ marginTop: "20px", alignContent: "center"}}>

                <div className="mb-4 row">
                    <div className="col-5 sm-4">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label> <br/>

                        <input
                            type="text"
                            className="form-control"
                            onChange={handleInput}
                            name='email'
                            id="email"
                            placeholder="Enter email"
                        />
                    </div>
                </div>
                <div className="mb-4 row">
                    <div className="col-5 sm-4">
                    <label htmlFor="formGroupExampleInput" className="form-label">Password</label> <br/>
                        <input type="password"
                        className="form-control"
                            name="password"
                            onChange={handleInput}
                            id="password"
                            placeholder="Enter password" />
                    </div>
                </div>

                <div className="mb-2 row">
                    <div className="col-mdm-2">
                        <button className="btn btn-success" onClick={handleSubmit} style={{ margin: "auto", width: "200px", borderRadius: "25px", height: "50px"}}>Submit</button>
                    </div>
                </div>
                {/* <ToastContainer /> */}
            </div>
        </div>
    )
}

export default Login;