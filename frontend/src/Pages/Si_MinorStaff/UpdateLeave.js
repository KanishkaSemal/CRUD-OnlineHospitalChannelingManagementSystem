import React, { Component } from 'react';
import Header from '../../Component/Headder/Headder';
import StaffSideBar from '../../Component/SideBar/StaffSideBar/StaffSideBar';
import './Leave.css';
import { Col, Row } from 'react-bootstrap';
import  {Form }  from 'antd';
import Input from 'antd/es/input/Input';
import axios from 'axios';

class UpdateLeave extends Component {

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

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
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

        const url = `http://localhost:8000/Leave/update/${id}`;
        axios.put(url, data).then((res) => {
            if (res.data.success) {
                alert("Leave Updated Successfully")
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

    componentDidMount() {
        const id = this.props.match.params.id;

        const url = `http://localhost:8000/leave/${id}`;
        axios.get(url).then((res) => {
            if (res.data.success) {
                this.setState({
                    firstName: res.data.post.firstName,
                    LastName: res.data.post.LastName,
                    email: res.data.post.email,
                    phone: res.data.post.phone,
                    position: res.data.post.position,
                    department: res.data.post.department,
                    leaveDate: res.data.post.leaveDate,
                    requestfor: res.data.post.requestfor,
                    leaveType: res.data.post.leaveType,
                    comment: res.data.post.comment
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
                            <StaffSideBar />
                        </div>
                        <div className='='col-md mt-4 mx-auto>
                            
                        <div className='my-div'>
                                <h1 className='SC_update'>Update Leave Details  <a className="btn btn-danger" href="/LeaveHome" style={{marginLeft:600}} >
                                        Back
                                    </a>
                                </h1>
                                <form className='Scneeds-alidation' noValidate>
                                    <div className='Si_form-group' style={{ padding: 'center' }}>
                                        <label style={{ marginBottom: '5px' }}> First Name :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="firstName"
                                            placeholder='your first name'
                                            value={this.state.firstName}
                                            required
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='SC_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Last Name :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="LastName"
                                            placeholder='your last name'
                                            value={this.state.LastName}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='SC_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Email :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="email"
                                            placeholder='your email'
                                            value={this.state.email}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='SC_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Phone No :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="phone"
                                            placeholder='your phone no'
                                            value={this.state.phone}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='SC_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Position :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="position"
                                            placeholder='ex: doctor/nurse'
                                            value={this.state.position}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='SC_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Department :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="department"
                                            placeholder='ex: Operation theater'
                                            value={this.state.department}
                                            onChange={this.handleInputChange} />
                                    </div>


                                    <div className='SC_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Leave Date:</label>
                                        <input type='date'
                                            className='form-control'
                                            name="leaveDate"
                                            placeholder='date'
                                            value={this.state.leaveDate}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='Sc_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}>Leave Request For : </label>
                                        <input type='text'
                                            className='form-control'
                                            name="requestfor"
                                            placeholder='ex: Days or Hours'
                                            value={this.state.requestfor}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='Sc_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Leave Type :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="leaveType"
                                            placeholder='Sick/Vacation....'
                                            value={this.state.leaveType}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='Sc_form-group' style={{ marginBottom: '1px' }}>
                                        <label style={{ marginBottom: '5px' }}> Reason :</label>
                                        <input type='text'
                                            className='form-control'
                                            name="comment"
                                            placeholder='Enter your reason'
                                            value={this.state.comment}
                                            onChange={this.handleInputChange} />
                                    </div>                                    

                                    <button className='btn btn-success' type='submit' style={{ marginTop: '15px', width: '120px' }} onClick={this.onSubmit} >
                                        <i className='far fa-check-square'></i>
                                        &nbsp;Update 
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

export default UpdateLeave;