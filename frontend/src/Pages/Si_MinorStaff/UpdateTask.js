import React, { Component } from 'react';
import Header from '../../Component/Headder/Headder';
import AdminSideBar from '../../Component/SideBar/AdminSideBar/AdminSideBar';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

class UpdateTask extends Component {

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

    onSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const { taskName, assignTo, createdAt, sta, taskdiscription } = this.state;
        const data = {
            taskName: taskName,
            assignTo: assignTo,
            createdAt: createdAt,
            sta: sta,
            taskdiscription: taskdiscription
        }
        console.log(data);

        const url = `http://localhost:8000/Task/update/${id}`;
        axios.put(url, data).then((res) => {
            if (res.data.success) {
                alert("Task updated successfully")
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
    componentDidMount() {
        const id = this.props.match.params.id;

        const url = `http://localhost:8000/Task/${id}`;
        axios.get(url).then((res) => {
            if (res.data.success) {
                this.setState({
                    taskName: res.data.post.taskName,
                    assignTo: res.data.post.assignTo,
                    createdAt: res.data.post.createdAt,
                    sta: res.data.post.sta,
                    taskdiscription: res.data.post.taskdiscription
                     
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
                            <AdminSideBar />
                        </div>
                        <div className='app-content'>
                            <div class="Medical-container">
                                <center><h1>Update Task</h1></center>
                                 
                                <form>
                                    <div class="personal-container">

                                        <Row>
                                            <h4>Task Details :</h4>
                                        </Row>
                                        <Row >
                                            <Col >
                                                <div class="mb-3">
                                                    <label for="taskName" class="form-label"> Task Name</label>
                                                    <input type="text" class="form-control" name="taskName" placeholder="Enter task name" value={this.state.taskName} required onChange={this.handleInputChange}></input>

                                        

                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col >
                                                <div class="mb-3">
                                                    <label for="assignTo" class="form-label">Assigned To</label>
                                                    <input type="text" class="form-control" name="assignTo" placeholder="Enter the person name" value={this.state.assignTo} required onChange={this.handleInputChange}></input>

                                                </div>
                                            </Col>

                                        </Row>

                                        <Row >
                                            <Col>
                                                <div class="mb-3">
                                                    <label for="createdAt" class="form-label">Set Due Date</label>
                                                    <input type="date" class="form-control" name="createdAt" placeholder="Patient ID" value={this.state.createdAt} required onChange={this.handleInputChange}></input>

                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col >
                                                <div class="mb-3">
                                                    <label for="sta" class="form-label">Status</label>
                                                    <input type="text" class="form-control" name="sta" placeholder="eg: pending/In progress..." value={this.state.sta} required onChange={this.handleInputChange}></input >

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

export default UpdateTask;