import React, { Component } from 'react';
import Header from '../../Component/Headder/Headder';
import DoctorSideBar from '../../Component/SideBar/DoctorSideBar/DoctorSideBar';
import { Col, Row } from 'react-bootstrap';
import './Medical.css';
import axios from 'axios';

class Medical extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Fname: "",
            Lname: "",
            PatinetId: "",
            BirthDate: "",
            age: "",
            gender: "",
            contact: "",
            medication: "",
            history: "",
            description: "",
            discount: "",
            PastTreatName: "",
            PTreatDate: "",
            PDoctorName: "",
            Result: "",
            NewTreatName: "",
            NTreatDate: "",
            NDoctorName: "",
            diagnosis: ""

        }

    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }
    validateInput = () => { const { Fname } = this.state; if (!Fname) { alert('Name is a required field!'); } }
    onSubmit = (e) => {
        e.preventDefault();
        const { Fname, Lname, PatinetId, BirthDate, age, gender, contact, medication, history, description, discount, PastTreatName, PTreatDate, PDoctorName, Result, NewTreatName, NTreatDate, NDoctorName, diagnosis } = this.state;
        const data = {
            Fname: Fname,
            Lname: Lname,
            PatinetId: PatinetId,
            BirthDate: BirthDate,
            age: age,
            gender: gender,
            contact: contact,
            medication: medication,
            history: history,
            description: description,
            discount: discount,
            PastTreatName: PastTreatName,
            PTreatDate: PTreatDate,
            PDoctorName: PDoctorName,
            Result: Result,
            NewTreatName: NewTreatName,
            NTreatDate: NTreatDate,
            NDoctorName: NDoctorName,
            diagnosis: diagnosis

        }
        console.log(data);

        const url = `http://localhost:8000/medical/save`;
        axios.post(url, data).then((res) => {
            if (res.data.success) {
                alert("Add new medical successfully")
                this.setState({
                    Fname: "",
                    Lname: "",
                    PatinetId: "",
                    BirthDate: "",
                    age: "",
                    gender: "",
                    contact: "",
                    medication: "",
                    history: "",
                    description: "",
                    discount: "",
                    PastTreatName: "",
                    PTreatDate: "",
                    PDoctorName: "",
                    Result: "",
                    NewTreatName: "",
                    NTreatDate: "",
                    NDoctorName: "",
                    diagnosis: ""
                }

                )
            }
        })


    }





    render() {
        return (
            <div className='main-wrapper'>
                <div className='app-header'>
                    <Header />

                </div>
                <div className='app-body'>
                    <div className='body-wrapper'>
                        <div className='app-sidebar'>
                            <DoctorSideBar />
                        </div>
                        <div className='app-content'>

                            <div class="Medical-container"   >
                                <center><h1>Patient Medical Records</h1></center>
                                <form style={{ width: 1000, marginLeft: '300px' }} class="row g-3 needs-validation" novalidate >
                                    <div class="personal-container">

                                        <Row>
                                            <h4>Personal Details :</h4>
                                        </Row>
                                        <Row >
                                            <Col >
                                                <div class="mb-3">
                                                    <label for="Fname" class="form-label"> First Name</label>
                                                    <input type="text" class="form-control" name="Fname" placeholder="Patient First Name" value={this.state.Fname} required onChange={this.handleInputChange} onBlur={this.validateInput}></input>



                                                </div>
                                            </Col>
                                            <Col >
                                                <div class="mb-3">
                                                    <label for="Lname" class="form-label">Last Name</label>
                                                    <input type="text" class="form-control" name="Lname" placeholder="Patient Last Name" value={this.state.Lname} required onChange={this.handleInputChange}></input>

                                                </div>
                                            </Col>

                                        </Row>
                                        <Row >
                                            <Col>
                                                <div class="mb-3">
                                                    <label for="PatinetId" class="form-label">Patient ID</label>
                                                    <input type="text" class="form-control" name="PatinetId" placeholder="Patient ID" value={this.state.PatinetId} required onChange={this.handleInputChange}></input>

                                                </div>
                                            </Col>
                                            <Col >
                                                <div class="mb-3">
                                                    <label for="BirthDate" class="form-label">Date of Birth</label>
                                                    <input type="date" class="form-control" name="BirthDate" placeholder="Patient Birth Date" value={this.state.BirthDate} required onChange={this.handleInputChange}></input >

                                                </div>
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col  >
                                                <div class="mb-3">
                                                    <label for="age" class="form-label">Patient Age</label>
                                                    <input type="text" class="form-control" name="age" placeholder="Patient Age" value={this.state.age} required onChange={this.handleInputChange}></input >

                                                </div>
                                            </Col>
                                            <Col >
                                                <div class="mb-3">
                                                    <label for="gender" class="form-label">Patient Gender</label>
                                                    <input type="text" class="form-control" name="gender" placeholder="Patient Gender" value={this.state.gender} required onChange={this.handleInputChange}></input >

                                                </div>
                                            </Col>
                                            <Col >
                                                <div class="mb-3">
                                                    <label for="contact" class="form-label">Contact Number</label>
                                                    <input type="text" class="form-control" name="contact" placeholder="Patient Contact Number" value={this.state.contact} required onChange={this.handleInputChange}></input >

                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div class="medication-container">
                                        <h4>Medical Records :</h4>
                                        <Row>
                                            <div class="mb-3">
                                                <label for="medication" class="form-label">Add Medication of the Patient</label>
                                                <textarea class="form-control" name="medication" rows="3" placeholder="Enter Medication" value={this.state.medication} required onChange={this.handleInputChange}> </textarea>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div class="mb-3">
                                                <label for="history" class="form-label">Add Medical History of the Patient</label>
                                                <textarea class="form-control" name="history" rows="3" placeholder="Enter Medical History" value={this.state.history} required onChange={this.handleInputChange}></textarea>
                                            </div>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div class="mb-3">
                                                    <label for="description" class="form-label">Add More Details</label>
                                                    <textarea class="form-control" name="description" rows="3" placeholder="Add More Details" value={this.state.description} required onChange={this.handleInputChange}></textarea>
                                                </div>
                                            </Col>
                                            <Col>
                                                <div class="mb-3">
                                                    <label for="discount" class="form-label">Add Discount</label>
                                                    <textarea class="form-control" name="discount" rows="3" placeholder="Enter Discount Details" value={this.state.discount} required onChange={this.handleInputChange}></textarea>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div class="Treatment-container">
                                        <h4>Past Treatment Plans :</h4>
                                        <Row>
                                            <Col>
                                                <div class="mb-3">
                                                    <label for="PastTreatName" class="form-label">Treatment  </label>
                                                    <input type="text" class="form-control" name="PastTreatName" placeholder="Treatment Name" value={this.state.PastTreatName} required onChange={this.handleInputChange}></input>

                                                </div>
                                            </Col>
                                            <Col >
                                                <div class="mb-3">
                                                    <label for="PTreatDate" class="form-label">Treat Date  </label>
                                                    <input type="date" class="form-control" name="PTreatDate" value={this.state.PTreatDate} required onChange={this.handleInputChange}  ></input>

                                                </div>
                                            </Col>
                                            <Col >
                                                <div class="mb-3">
                                                    <label for="PDoctorName" class="form-label">Doctor's Name</label>
                                                    <input type="text" class="form-control" name="PDoctorName" placeholder="Name of the Doctor" value={this.state.PDoctorName} required onChange={this.handleInputChange} ></input>

                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>

                                            <div class="mb-3">
                                                <label for="Result" class="form-label">Treatment Result</label>
                                                <input type="text" class="form-control" name="Result" placeholder="Result" value={this.state.Result} required onChange={this.handleInputChange} ></input>

                                            </div>

                                        </Row>
                                    </div>
                                    <div class="ArrangeTreatment-container">
                                        <h4>Arrange Treatment Plans :</h4>
                                        <Row >
                                            <Col>
                                                <div class="mb-3">
                                                    <label for="NewTreatName" class="form-label">Treatment  </label>
                                                    <input type="text" class="form-control" name="NewTreatName" placeholder="Enter Treatment Name" value={this.state.NewTreatName} required onChange={this.handleInputChange}></input>

                                                </div>
                                            </Col>
                                            <Col >
                                                <div class="mb-3">
                                                    <label for="NTreatDate" class="form-label">Treat Date</label>
                                                    <input type="date" class="form-control" name="NTreatDate" value={this.state.NTreatDate} required onChange={this.handleInputChange}  ></input>

                                                </div>
                                            </Col>


                                            <Col>
                                                <div class="mb-3">
                                                    <label for="NDoctorName" class="form-label">Doctor's Name</label>
                                                    <input type="text" class="form-control" name="NDoctorName" placeholder="Enter Name of the Doctor" value={this.state.NDoctorName} required onChange={this.handleInputChange} ></input>

                                                </div>
                                            </Col>

                                        </Row>
                                        <Row>

                                            <div class="mb-3">
                                                <label for="diagnosis" class="form-label">Add Diagnosis</label>
                                                <textarea class="form-control" name="diagnosis" rows="3" placeholder="Add diagnosis" value={this.state.diagnosis} required onChange={this.handleInputChange}></textarea>
                                            </div>


                                        </Row>
                                    </div>

                                    <button className='btn btn-success' type='submit' style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                        <i className='far fa-check-square'></i>
                                        &nbsp;Add Details
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Medical;