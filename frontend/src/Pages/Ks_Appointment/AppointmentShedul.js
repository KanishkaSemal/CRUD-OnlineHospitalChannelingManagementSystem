import React, { Component } from 'react';
import Header from '../../Component/Headder/Headder';
import PatientSideBar from '../../Component/SideBar/PatientSideBar.js/PatientSideBar';
import './Appointment.css';
import { Col, Row } from 'react-bootstrap';
import  {Form}  from 'antd';
import Input from 'antd/es/input/Input';
import axios from 'axios';

import validator from 'email-validator';
import Swal from 'sweetalert2'




class AppointmentShedul extends Component {

    constructor(props) {
        super(props)

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
console.log("")
        const { firstName ,lastName,phone,age,gender,email,address,
            doctorName,appointmentdate,appointmenttime,discriptionOfDiagnosis} = this.state;

            if(!validator.validate(email)){
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'Invalid Email Address',
                    showConfirmButton: false,
                    timer: 1500
                  })
                 
            }

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

        const url = `http://localhost:8000/Appointment/save`;
        axios.post(url, data).then((res) => {
            if (res.data.success) {
                alert("Add new appointment successfully")
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

   
   
    render() {

    //      //handle form
    // const handleFinish = (values) =>{
    //     console.log(values)
    // }
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
                          <layout>
                            <div class="Ksappointment-content">
                             <h2>Appointment Scheduling.</h2>
                             
                             </div>
                             <Form layout="vertical" >
                            <div class="Ksform-content">
                             <h4>Personal Details :</h4>
                             </div>
                             <div class="Ksform3-content"> 
                                <Row gutter={20}>
                                    
                                  <Col xs={24} md={24} lg={4}>
                                        <Form.Item 
                                        label="First Name" 
                                        name="firstName" 
                                        required rules={[{required:true}]}
                                        >
                                         <Input type='text' class='form-control' name="firstName"  placeholder='your first name' value={this.state.firstName} required onChange={this.handleInputChange} />
                                        </Form.Item>
                                    </Col>
                                    
                                    <Col xs={24} md={24} lg={4}>
                                        <Form.Item 
                                        label="Last Name" 
                                        name="lastName" 
                                        required rules={[{required:true}]}
                                        >
                                         <Input type='text' class='form-control' name="lastName" placeholder='your last name' value={this.state.lastName} required onChange={this.handleInputChange} />
                                        </Form.Item>
                                    </Col>

                                    <Col xs={24} md={24} lg={4}>
                                        <Form.Item 
                                        label="Phone No" 
                                        name="phone" 
                                        required rules={[{required:true}]}
                                        >
                                         <Input type='text' class='form-control' name="phone" placeholder='your contact no' value={this.state.phone} required onChange={this.handleInputChange} />
                                        </Form.Item>
                                    </Col>
                                    </Row>

                                    <Row>
                                    <Col xs={24} md={24} lg={4}>
                                    <Form.Item 
                                        label="Age" 
                                        name="age" 
                                        required rules={[{required:true}]}
                                        >
                                         <Input type='text' class='form-control' name="age" placeholder='your age' value={this.state.age} required onChange={this.handleInputChange} />
                                        </Form.Item>

                                    </Col>   
                                    <Col xs={24} md={24} lg={4}>
                                    <Form.Item 
                                        label="Gender" 
                                        name="gender" 
                                        required rules={[{required:true}]}
                                        >
                                         <Input type='text' class='form-control' name="gender" placeholder='Male/female' value={this.state.gender} required onChange={this.handleInputChange} />
                                        </Form.Item>
                                        
                                    </Col>

                                    <Col xs={24} md={24} lg={4}>
                                    <Form.Item 
                                        label="Email" 
                                        name="email" 
                                        required rules={[{required:true}]}
                                        >
                                         <Input type='text' class='form-control' name="email" placeholder='your email address' value={this.state.email} required onChange={this.handleInputChange} />
                                        </Form.Item>
                                    </Col>
                                    </Row>

                                    <Row>
                                    <Col xs={24} md={24} lg={8}>
                                        <Form.Item 
                                        label="Adress" 
                                        name="address" 
                                        required rules={[{required:true}]}
                                        >
                                         <Input type='text' class='form-control' name="address" placeholder='your address' value={this.state.address} required onChange={this.handleInputChange} />
                                        </Form.Item>   
                                    </Col>
                                    </Row>
                                    </div>
                                   
                                    <div class="Ksform2-content">
                                    <h4>About Appointment :</h4>
                                    </div>
                                    <div class="Ksform3-content">
                                     <Row>
                                     <Col xs={24} md={24} lg={4}>
                                    <Form.Item 
                                        label="Doctor Name" 
                                        name="doctorName" 
                                        required rules={[{required:true}]}
                                        >
                                         <Input type='text' class='form-control' name="doctorName" placeholder='doctor name' value={this.state.doctorName} required onChange={this.handleInputChange} />
                                        </Form.Item>  
                                    </Col>
                                     
                                    <Col xs={24} md={24} lg={4}>
                                    <Form.Item 
                                        label="Appointment Date" 
                                        name="appointmentdate" 
                                        required rules={[{required:true}]}
                                        > 
                                        <Input type='date' class='form-control' name="appointmentdate" placeholder='date' value={this.state.appointmentdate} required onChange={this.handleInputChange} />  
                                        </Form.Item>  
                                    </Col>

                                    <Col xs={24} md={24} lg={4}>
                                    <Form.Item 
                                        label="Appointment Time" 
                                        name="appointmenttime" 
                                        required rules={[{required:true}]}
                                        >  
                                        <Input type='time' class='form-control' name="appointmenttime" placeholder='time' value={this.state.appointmenttime} required onChange={this.handleInputChange} />  

                                        </Form.Item>  
                                    </Col>
                                     </Row>
                                    
                                    <Row>
                                    <Col xs={24} md={24} lg={7}>
                                    <Form.Item 
                                        label="Description about diagnosis" 
                                        name="discriptionOfDiagnosis" 
                                        required rules={[{required:true}]}
                                        >
                                         <Input type='text' class='form-control' name="discriptionOfDiagnosis"  placeholder='about diagnosis' value={this.state.discriptionOfDiagnosis} required onChange={this.handleInputChange}/>
                                        </Form.Item>  
                                    </Col>
                                    
                                    <Col xs={24} md={24} lg={5}>
                                        
                                        <button className="btn btn Ksform-btn1" type="submit" onClick={this.onSubmit} href='/AppointmentDashboard'>
                                            submit
                                        </button>
                                        

                                    </Col>
                                    </Row>
                                    </div>     
                             </Form>
                             </layout>
                        </div>
                    </div>
                </div>
            
        );
    }
}

export default AppointmentShedul;