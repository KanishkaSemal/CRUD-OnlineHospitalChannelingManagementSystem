import React, { Component } from 'react';
import Header from '../../Component/Headder/Headder';
import AdminSideBar from '../../Component/SideBar/AdminSideBar/AdminSideBar';
import { Col, Row } from 'react-bootstrap';
import './Leave.css';

import axios from 'axios';

class Task extends Component {

    constructor(props) {
        super(props)

        this.state = {
            taskName: "",
            assignTo: "",
            createdAt: "",
            sta: "",
            taskdiscription: ""

        }

    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }
    validateInput = () => { const { taskName } = this.state; if (!taskName) { alert('Task name is a required field!'); } }
    validateInput = () => { const { sta } = this.state; if (!sta) { alert('Status is a required field!'); } }
    onSubmit = (e) => {
        e.preventDefault();
        const { taskName, assignTo, createdAt, sta, taskdiscription } = this.state;
        const data = {
            taskName: taskName,
            assignTo: assignTo,
            createdAt: createdAt,
            sta: sta,
            taskdiscription: taskdiscription

        }
        console.log(data);

        const url = `http://localhost:8000/Task/save`;
        axios.post(url, data).then((res) => {
            if (res.data.success) {
                alert("Add new task successfully")
                this.setState({
                    taskName: "",
                    assignTo: "",
                    createdAt: "",
                    sta: "",
                    taskdiscription: ""
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
                            <AdminSideBar />
                        </div>
                        <div className='app-content'>

                            <div class="Task-container"   >
                                <h1>Assign Task</h1>
                                <form style={{ width: 1000, marginRight: '0px' }} class="row g-3 needs-validation" novalidate >
                                    <div class="chpersonal-container">

                                        <Row>
                                            <h4>Task Details :</h4>
                                        </Row>
                                        <Row >
                                            <Col >
                                                <div class="mb-3">
                                                    <label for="taskName" class="form-label"> Task Name</label>
                                                    <input type="text" class="chform-control" name="taskName" placeholder="Enter task name" value={this.state.taskName} required onChange={this.handleInputChange} onBlur={this.validateInput}></input>



                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col >
                                                <div class="mb-3">
                                                    <label for="assignTo" class="form-label">Assigned To</label>
                                                    <input type="text" class="chform-control" name="assignTo" placeholder="Enter the person name" value={this.state.assignTo} required onChange={this.handleInputChange}></input>

                                                </div>
                                            </Col>

                                        </Row>

                                        <Row >
                                            <Col>
                                                <div class="mb-3">
                                                    <label for="createdAt" class="form-label">Set Due Date</label>
                                                    <input type="date" class="chform-control" name="createdAt" placeholder="Patient ID" value={this.state.createdAt} required onChange={this.handleInputChange}></input>

                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col >
                                                <div class="mb-3">
                                                    <label for="sta" class="form-label">Status</label>
                                                    <input type="text" class="chform-control" name="sta" placeholder="eg: pending/In progress..." value={this.state.sta} required onChange={this.handleInputChange}></input >

                                                </div>
                                            </Col>
                                        </Row>

                                        <Row >
                                            <Col  >
                                                <div class="mb-3">
                                                    <label for="taskdiscription" class="form-label">Task Description</label>
                                                    <textarea class="form-control" name="taskdiscription" rows="3" placeholder="Describe the task" value={this.state.taskdiscription} required onChange={this.handleInputChange}></textarea>

                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <button className='btn btn-success' type='submit' style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                        <i className='far fa-check-square'></i>
                                        &nbsp;Add Task
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

export default Task;
