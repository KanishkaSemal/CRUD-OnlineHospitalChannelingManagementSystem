import React, { useState, useEffect } from 'react';
import Header from '../../Component/Headder/Headder';
import AdminSideBar from '../../Component/SideBar/AdminSideBar/AdminSideBar';
import { Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';

export default function GenerateBill() {

    const [bills, setBill] = useState([]);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    // console.log(fullName);
    const [email, setEmail] = useState("");
    const [appointmentdate, setAppointmentDate] = useState("");


    useEffect(() => {
        getBill();
    }, []);

    const getBill = async () => {
        const response = await axios.get(
            "http://localhost:8000/codes/CodesRouter"
        );
        setBill(response.data);

    };

    function handleSubmit() {
        console.log("submit button clicked");

        const data = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            appointmentdate: appointmentdate


        };

        axios.post("http://localhost:8000/billing/BillingRouter/save", data)
            .then((res) => {
                console.log(res);
                alert("Success")
                //toast.success("SuccessFully Added");
            })
            .catch((err) => {
                console.log(err);
                alert("Error")
                // toast.error(err.response.data);
            });
    }



    return (
        <div className='main-wrapper'>
            <div className='app-header'>
                <Header />

            </div>
            <div className='app-body'>
                <div className='body-wrapper'>
                    <div className='app-sidebar'>
                        <AdminSideBar />
                    </div>
                    <div className='app-content'>

                        <div class="Medical-container">
                            <center><h1>Billing Invoice</h1></center>
                            <form>
                                <div class="personal-container">

                                    <Row>
                                        <h4>Norris Clinicals </h4>
                                    </Row>
                                    <Row >
                                        <Col >
                                            <div class="mb-3">
                                                <label for="firstName" class="form-label"> First Name</label>
                                                <input type="text" class="form-control" name="firstName" placeholder="Patient First Name" required onChange={(e) => setFirstName(e.target.value)}></input>



                                            </div>
                                        </Col>
                                        <Col >
                                            <div class="mb-3">
                                                <label for="lastName" class="form-label">Last Name</label>
                                                <input type="text" class="form-control" name="lastName" placeholder="Patient Last Name" required onChange={(e) => setLastName(e.target.value)}></input>

                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <div class="mb-3">
                                                <label for="phone" class="form-label">Phone Number</label>
                                                <input type="string" class="form-control" name="phone" placeholder="Patient Phone Number" required onChange={(e) => setPhone(e.target.value)}></input>

                                            </div>
                                        </Col>

                                        <Col >
                                            <div class="mb-3">
                                                <label for="email" class="form-label">E mail</label>
                                                <input type="text" class="form-control" name="email" placeholder="Patient E mail" required onChange={(e) => setEmail(e.target.value)}></input>

                                            </div>
                                        </Col>


                                        <Col>
                                            <div class="mb-3">
                                                <label for="appointmentdate" class="form-label">Appointment Date</label>
                                                <input type="date" class="form-control" name="PatinetId" placeholder="appointmentdate" required onChange={(e) => setAppointmentDate(e.target.value)}></input>

                                            </div>

                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col>

                                        </Col>
                                    </Row>
                                    <Row >
                                        <table
                                            className="Ks_table table-hover salary-table"
                                            style={{ padding: "10px" }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">CPT</th>
                                                    <th scope="col">CPT Description</th>
                                                    <th scope="col">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr >

                                                    <td>
                                                        <select name="cars" id="cars">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select name="cars" id="cars">
                                                            <option value="99213">99213</option>
                                                            <option value="99214">99214</option>
                                                            <option value="20610">20610</option>
                                                            <option value="77002">77002</option>
                                                        </select>
                                                    </td>

                                                    <td>
                                                        <select name="cars" id="cars">
                                                            <option value="Established patient office visit, 20-29 minutes">Established patient office visit, 20-29 minutes</option>
                                                            <option value="Established patient office visit, 15-19 minutes">Established patient office visit, 15-19 minutes</option>
                                                            <option value="Diagnostic Radiology (Diagnostic Imaging) Procedures">Diagnostic Radiology (Diagnostic Imaging) Procedures</option>
                                                            <option value="Diagnostic Ultrasound Procedures">Diagnostic Ultrasound Procedures</option>
                                                        </select>
                                                    </td>
                                                    <td>
                                                        <select name="cars" id="cars">
                                                            <option value="1200">1200</option>
                                                            <option value="1500">1500</option>
                                                            <option value="2000">2000</option>
                                                            <option value="2500">2500</option>
                                                        </select>
                                                    </td>

                                                </tr>

                                                {/* <tr >
 
                                                        <td>2</td>
                                                       <td>99213</td>
                                                        <input type='checkbox'/> Established patient office visit, 20-29 minutes
                                                        <td>700</td>

                                                    </tr>

                                                    <tr >
 
                                                        <td>3</td>
                                                       <td>99212</td>
                                                        <input type='checkbox'/> Established patient office visit, 15-19 minutes
                                                        <td>600</td>

                                                    </tr>

                                                    <tr >
 
                                                        <td>4</td>
                                                       <td>70010</td>
                                                        <input type='checkbox'/> Diagnostic Radiology (Diagnostic Imaging) Procedures
                                                        <td>1000</td>

                                                    </tr>

                                                    <tr >
 
                                                        <td>5</td>
                                                       <td>76506</td>
                                                        <input type='checkbox'/> Diagnostic Ultrasound Procedures
                                                        <td>1200</td>

                                                    </tr>

                                                    <tr >
 
                                                        <td>6</td>
                                                       <td>77001</td>
                                                        <input type='checkbox'/> Radiologic Guidance
                                                        <td>2000</td>

                                                    </tr>

                                                    <tr >
 
                                                        <td>7</td>
                                                       <td>10021</td>
                                                        <input type='checkbox' value=""/> Fine needle aspiration; without imaging guidance
                                                        <td>2500</td>

                                                    </tr>

                                                    <tr >
 
                                                        <td>8</td>
                                                       <td>10022</td>
                                                        <input type='checkbox'/> Fine needle aspiration; with imaging guidance
                                                        <td>3500</td>

                                                    </tr> */}

                                            </tbody>
                                        </table>
                                        <Button className="btn btn Siform-btn " type="button" onClick={() => {
                                            handleSubmit();
                                        }}> Add Bill </Button>

                                    </Row>
                                </div>


                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

