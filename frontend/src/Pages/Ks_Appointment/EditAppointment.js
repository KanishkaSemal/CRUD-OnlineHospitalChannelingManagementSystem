import React, { Component } from 'react'
import Header from '../../Component/Headder/Headder';
import PatientSideBar from '../../Component/SideBar/PatientSideBar.js/PatientSideBar';
import axios from 'axios';
import './Appointment.css';


export default class EditAppointment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            age: "",
            gender: "",
            email: "",
            address: "",
            doctorName: "",
            appointmentdate: "",
            appointmenttime: "",
            discriptionOfDiagnosis: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const {firstName,lastName,phone,age,gender,email,address,doctorName,appointmentdate,appointmenttime,discriptionOfDiagnosis} = this.state;
        const data = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            age: age,
            gender: gender,
            email: email,
            address: address,
            doctorName: doctorName,
            appointmentdate: appointmentdate,
            appointmenttime: appointmenttime,
            discriptionOfDiagnosis: discriptionOfDiagnosis
        }
        console.log(data);

        const url = `http://localhost:8000/Appointment/update/${id}`;
        axios.put(url, data).then((res) => {
            if (res.data.success) {
                alert("Appointment updated successfully")
                this.setState({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    age: "",
                    gender: "",
                    email: "",
                    address: "",
                    doctorName: "",
                    appointmentdate: "",
                    appointmenttime: "",
                    discriptionOfDiagnosis: ""
                }

                )
            }
        })


    }
    componentDidMount() {
        const id = this.props.match.params.id;

        const url = `http://localhost:8000/Appointment/${id}`;
        axios.get(url).then((res) => {
            if (res.data.success) {
                this.setState({
                    
                    firstName: res.data.post.firstName,
                    lastName: res.data.post.lastName,
                    phone: res.data.post.phone,
                    age: res.data.post.age,
                    gender: res.data.post.gender,
                    email: res.data.post.email,
                    address:res.data.post.address,
                    doctorName: res.data.post.doctorName,
                    appointmentdate: res.data.post.appointmentdate,
                    appointmenttime: res.data.post.appointmenttime,
                    discriptionOfDiagnosis: res.data.post.discriptionOfDiagnosis
                });
                console.log(this.state.post);
            }
        });
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
                            <PatientSideBar />
                        </div>
                        <div className='col-md-8 mt-4 mx-auto'>
                            <div className='my-div'>
                                <h1 className='KsUpdate'>Update Appointment Details...  <a className="btn btn-danger" href="/AppointmentHome" style={{marginLeft:900}} >
                                        Back
                                    </a>
                                </h1>
                                <form className='needs-alidation' noValidate>
                                    <div className='Ks_form-group' style={{ padding: 'center' }}>
                                        <label style={{ marginBottom: '5px' }}> First Name :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="firstName"
                                            placeholder='your first name'
                                            value={this.state.firstName}
                                            required
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='Ks_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Last Name :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="lastName"
                                            placeholder='your last name'
                                            value={this.state.lastName}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='Ks_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Phone No :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="phone"
                                            placeholder='your contact no'
                                            value={this.state.phone}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='Ks_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Age :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="age"
                                            placeholder='your age'
                                            value={this.state.age}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='Ks_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Gender:</label>
                                        <input type='text'
                                            className='form-control'
                                            name="gender"
                                            placeholder='Male/female'
                                            value={this.state.gender}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='Ks_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Email:</label>
                                        <input type='text'
                                            className='form-control'
                                            name="email"
                                            placeholder='your email address'
                                            value={this.state.email}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='Ks_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}>Adress :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="address"
                                            placeholder='your address'
                                            value={this.state.address}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='Ks_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Doctor Name:</label>
                                        <input type='text'
                                            className='form-control'
                                            name="doctorName"
                                            placeholder='doctor name'
                                            value={this.state.doctorName}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='Ks_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Appointment Date:</label>
                                        <input type='date'
                                            className='form-control'
                                            name="appointmentdate"
                                            placeholder='date'
                                            value={this.state.appointmentdate}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='Ks_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Appointment Time:</label>
                                        <input type='time'
                                            className='form-control'
                                            name="appointmenttime"
                                            placeholder='time'
                                            value={this.state.appointmenttime}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='Ks_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}>Description about diagnosis: </label>
                                        <input type='text'
                                            className='form-control'
                                            name="discriptionOfDiagnosis"
                                            placeholder='about diagnosis'
                                            value={this.state.discriptionOfDiagnosis}
                                            onChange={this.handleInputChange} />
                                    </div>
                                    <button className='btn btn-success' type='submit' style={{ marginTop: '15px' , width:'120px' ,  }} onClick={this.onSubmit} >
                                        <i className='far fa-check-square'></i>
                                        &nbsp;Update
                                    </button>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>








        )
    }
}