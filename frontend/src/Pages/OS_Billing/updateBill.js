import React, { useState, useEffect } from 'react';
import Header from '../../Component/Headder/Headder';
import AdminSideBar from '../../Component/SideBar/AdminSideBar/AdminSideBar';
import { Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UpdateBill() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    // console.log(fullName);
    const [email, setEmail] = useState("");
    const [appointmentdate, setAppointmentDate] = useState("");

    const { id } = useParams();
  
    useEffect(() => {
        getBill();
    }, []);


    const getBill = async () => {
        const response = await axios.get(`http://localhost:8000/billing/BillingRouter/getbill/${id}`);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setPhone(response.data.phone);
        setEmail(response.data.email);
        setAppointmentDate(response.data.appointmentdate);

        // alert(response.data.name);
        
      };

      const updateBill = async () => {
        console.log("submit button clicked");
        
        try {
          await axios.put(`http://localhost:8000/billing/BillingRouter/update/${id}`, {
            firstName,
            lastName,
            phone,
            email,
            appointmentdate
          });
          alert("success")
          
        } catch (error) {
          console.log(error);
        }
      };


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
                                                <input type="text" class="form-control" name="firstName" placeholder="Patient First Name" required onChange={(e) => setFirstName(e.target.value)} value={firstName || ""}></input>



                                            </div>
                                        </Col>
                                        <Col >
                                            <div class="mb-3">
                                                <label for="lastName" class="form-label">Last Name</label>
                                                <input type="text" class="form-control" name="lastName" placeholder="Patient Last Name" required onChange={(e) => setLastName(e.target.value)} value={lastName || ""}></input>

                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <div class="mb-3">
                                                <label for="phone" class="form-label">Phone Number</label>
                                                <input type="text" class="form-control" name="phone" placeholder="Patient Last Name" required onChange={(e) => setPhone(e.target.value)} value={phone || ""}></input>

                                            </div>
                                        </Col>

                                        <Col >
                                            <div class="mb-3">
                                                <label for="email" class="form-label">E mail</label>
                                                <input type="text" class="form-control" name="email" placeholder="Patient Last Name" required onChange={(e) => setEmail(e.target.value)} value={email || ""}></input>

                                            </div>
                                        </Col>


                                        <Col>
                                            <div class="mb-3">
                                                <label for="appointmentdate" class="form-label">Appointment Date</label>
                                                <input type="date" class="form-control" name="PatinetId" placeholder="appointmentdate" required onChange={(e) => setAppointmentDate(e.target.value)} value={appointmentdate || ""}></input>

                                            </div>
                                            <Button className="btn btn Siform-btn" type="button" onClick={() => {
                                    updateBill();}}
                                            > Update Bill </Button>
                                        </Col>

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

