import React, { Component } from 'react';
import Header from '../../Component/Headder/Headder';
import StaffSideBar from '../../Component/SideBar/StaffSideBar/StaffSideBar';
import './Leave.css';
import { Col, Row } from 'react-bootstrap';
import  {Form }  from 'antd';
import Input from 'antd/es/input/Input';
import axios from 'axios';

class LeaveReq extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            LastName: "",
            email: "",
            phone: "",
            position: "",
            department: "",
            leaveDate: "",
            requestfor: "",
            leaveType: "",
            comment: ""

        }

    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }
    
    validateInput = () => { const { firstName } = this.state; if (!firstName) { alert('Name is a required field!'); } }
    validateInput = () => { const { position } = this.state; if (!position) { alert('Position is a required field!'); } }
    onSubmit = (e) => {
        e.preventDefault();
        const { firstName, LastName, email, phone, position, department, leaveDate, requestfor, leaveType, comment} = this.state;
        const data = {
            firstName: firstName,
            LastName: LastName,
            email: email,
            phone: phone,
            position: position,
            department: department,
            leaveDate: leaveDate,
            requestfor: requestfor,
            leaveType: leaveType,
            comment: comment
        }
        console.log(data);

        const url = `http://localhost:8000/Leave/save`;
        axios.post(url, data).then((res) => {
            if (res.data.success) {
                alert("Add new leave successfully")
                this.setState({
            firstName: "",
            LastName: "",
            email: "",
            phone: "",
            position: "",
            department: "",
            leaveDate: "",
            requestfor: "",
            leaveType: "",
            comment: ""
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
                            <StaffSideBar />
                        </div>
                        <layout>
                            <div class='leave-content'>
                                <h1>Request For Leave</h1>
                                <h6>Request your leave details down below.</h6>
                            </div>
                            <Form layout='vertical'>
                                <div class='Saform-content'>
                                <Row >
                                        <Col >
                                            <Form.Item 
                                            label='First Name' 
                                            name='firstName' 
                                            required rules={[{required:true}]}>
                                                <Input type='text' class='Saform-control' name='firstName' placeholder='your first name' value={this.state.firstName} required onChange={this.handleInputChange} onBlur={this.validateInput}/>
                                        </Form.Item>
                                        </Col>

                                        <Col >
                                        <Form.Item 
                                            label='Last Name' 
                                            name='LastName' 
                                            required rules={[{required:true}]}>
                                                <Input type='text' class='Saform-control' name='LastName' placeholder='your last name' value={this.state.LastName} required onChange={this.handleInputChange}/>
                                        </Form.Item>
                                        </Col>

                                        <Col >
                                        <Form.Item 
                                            label='Email' 
                                            name='email' 
                                            required rules={[{required:true}]}>
                                                <Input type='text' class='Saform-control' name='email' placeholder='ex: name@gmail.com' value={this.state.email} required onChange={this.handleInputChange}/>
                                        </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col >
                                        <Form.Item 
                                            label='Phone No' 
                                            name='phone' 
                                            required rules={[{required:true},{validator: (_, value) =>
                                                value && value.length === 10 ? Promise.resolve() : Promise.reject('Phone number must be 10 digits')}]}>
                                                <Input type='text' class='Saform-control' name='phone' placeholder='0123456789' value={this.state.phone} required onChange={this.handleInputChange}/>
                                        </Form.Item>
                                        </Col>

                                    <Col >
                                        <Form.Item 
                                        label="Position" 
                                        name="position" 
                                        required rules={[{required:true}]}
                                        >
                                         <Input type='text' class='Saform-control' name='position' placeholder='ex: doctor/nurse' value={this.state.position} required onChange={this.handleInputChange}/>
                                        </Form.Item>   
                                    </Col>

                                    <Col >
                                        <Form.Item 
                                        label='Department' 
                                        name='department'
                                        required rules={[{required:true}]}>
                                            <Input type='text' class='Saform-control' name='department' placeholder='ex: Operation theater' value={this.state.department} required onChange={this.handleInputChange}/>
                                        </Form.Item>   
                                    </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                        <Form.Item
                                        label="Leave Date"
                                        name="leaveDate"
                                        required rules={[{required:true}]}>
                                            <Input type='date' name='leaveDate' class='Saform-control' value={this.state.leaveDate} required onChange={this.handleInputChange}/>
                                        </Form.Item>
                                        </Col>
                                    </Row>
                                </div>

                                <div class='Saform1-content'>
                                    <h3>Details of Leave</h3>
                                </div>

                                <div class='Sasecond-content'>
                                <Row>
                                    <Col >
                                        <Form.Item 
                                        label='Leave Request For' 
                                        name='requestfor'
                                        required rules={[{required:true}]}>
                                         <Input type='text' name='requestfor' class='Saform-control' placeholder='ex: Days or Hours' value={this.state.requestfor} required onChange={this.handleInputChange}/>
                                        </Form.Item>   
                                    </Col>
                                </Row>

                                <Row>
                                <Col >
                                        <Form.Item 
                                        label='Leave Type' 
                                        name='leaveType'
                                        required rules={[{required:true}]}>

                                            <Input type='text' class='Saform-control' name="leaveType"  placeholder='Sick/Vacation....' value={this.state.leaveType} required onChange={this.handleInputChange}/>

                                </Form.Item>
                                </Col>
                                </Row>

                                <Row>
                                    <Col >
                                        <Form.Item 
                                        label='Reason' 
                                        name='comment'
                                        required rules={[{required:true}]}>
                                        <textarea class="Saform-control9" name="comment"  rows="3" placeholder="Enter your reason" value={this.state.comment} required onChange={this.handleInputChange}/>
                                        </Form.Item>   
                                    </Col>
                                </Row>
                                <div class='form-btn'>
                                    <button className="btn btn Saform-btn" type="submit" onClick={this.onSubmit}>
                                        Request Leave
                                    </button>

                                </div>
                                </div>
                                

                            </Form>
                        </layout>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeaveReq;