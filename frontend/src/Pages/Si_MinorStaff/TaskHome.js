import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Component/Headder/Headder';
import AdminSideBar from '../../Component/SideBar/AdminSideBar/AdminSideBar';
import { Col, Row } from 'react-bootstrap';



export default class TaskHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: []
        };
    }
    componentDidMount() {
        this.retrievetask();
    }

    retrievetask() {
        const url = 'http://localhost:8000/Task'
        axios.get(url).then(res => {
           
            if (res.data.success) {
                this.setState({
                    task: res.data.dexistingtask

                },()=>{
                    console.log("aaaaaaaaaa",this.state.task)
                });

                
            }
        });
    }


    onDelete = (id) => {
        const url = `http://localhost:8000/Task/delete/${id}`;

        axios.delete(url).then((res) => {
            alert("Delete Successfully");
            this.retrievetask();
        })

    }
    filterData(task, searchKey) {
        const result = task.filter((post) =>
            post.taskName.toLowerCase().includes(searchKey)
        )

        this.setState({ task: result })
    }
    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        const url = 'http://localhost:8000/Task'
        axios.get(url).then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingtask, searchKey)
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

                        <div className="app-details">


                            <div className='my-div'>
                                <div className='container' style={{marginTop:'60px'}}>
                                    <div className='row'>
                                        <div className='col-lg-9 mt-2 mb-2'>
                                            <h1>All Task</h1>
                                        </div>
                                        <div className='col-lg-3 mt-2 mb-2'>
                                            <input
                                                className='form-control'
                                                type='search'
                                                placeholder='Search'
                                                name='searchQuery'
                                                onChange={this.handleSearchArea}>

                                            </input>
                                        </div>
                                    </div>
                                </div>
                                <table className="table table-hover" style={{ marginTop: '2px' }}>
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Task</th>
                                            <th scope="col">AssignTo</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.task && this.state.task.map((posts, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>
                                                    <a href={`/ViewTask/${posts._id}`} style={{ textDecoration: 'none' }}>
                                                        {posts.TaskName}
                                                    </a>
                                                </td>
                                                <td>{posts.assignTo}</td>
                                                 <td>{posts.createdAt}</td>
                                                 <td>{posts.sta}</td>
                                                 <td>{posts.taskdiscription}</td>
                                                <td>
                                                    <a className="btn btn-warning" href={`/UpdateTask/${posts._id}`}>
                                                        <i className="fas fa-edit"></i>&nbsp;Edit
                                                    </a>

                                                    <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                                                        <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button className="btn btn-success"><a href="/Task" style={{ textDecoration: 'none', color: 'white' }}>Create Task </a></button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

