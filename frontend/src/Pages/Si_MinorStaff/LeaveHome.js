import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Component/Headder/Headder';
import StaffSideBar from '../../Component/SideBar/StaffSideBar/StaffSideBar';
import { Col, Row } from 'react-bootstrap';
import './Leave.css';



export default class LeaveHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        this.retrievePosts();
    }

    retrievePosts() {
        const url = 'http://localhost:8000/Leave'
        axios.get(url).then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });

                console.log(this.state.posts)
            }
        });
    }


    onDelete = (id) => {
        const url = `http://localhost:8000/Leave/delete/${id}`;

        axios.delete(url).then((res) => {
            alert("Delete Successfully");
            this.retrievePosts();
        })

    }
    filterData(posts, searchKey) {
        const result = posts.filter((post) =>
            post.firstName.toLowerCase().includes(searchKey)
        )

        this.setState({ posts: result })
    }
    
    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        const url = 'http://localhost:8000/Leave'
        axios.get(url).then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPosts, searchKey)
            }
        });
    }

    printData() {
        const printWindow = window.open('', '', 'height=1000,width=1000');
        printWindow.document.write('<html><head><title>DIV Contents</title>');
        printWindow.document.write('</head><body >');
        printWindow.document.write(document.getElementById('divToPrint').innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
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

                        <div className="app-details">


                            <div className='my-div'>
                                <div className='container'>
                                    <div className='row' style={{marginTop:80}}>
                                        <div className='SaLHome'>
                                            <h1>All Leaves </h1>
                                        </div>
                                        <div className='col-lg-3 Sa-2 mb-2' style={{marginLeft:1140}}>
                                            <input
                                                className='Saform-control'
                                                type='search'
                                                placeholder='Search'
                                                name='searchQuery'
                                                onChange={this.handleSearchArea}>

                                            </input>
                                        </div>
                                    </div>
                                </div>
                                <div id="divToPrint">
                                    <table className="table Satable-hover" style={{ marginTop:2 }}>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">First Name</th>
                                                {/* <th scope="col">Last Name</th> */}
                                                <th scope="col">Email</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Position</th>
                                                <th scope="col">Department</th>
                                                <th scope="col">Leave Date</th>
                                                <th scope="col">Request For</th>
                                                <th scope="col">Leave Type</th>
                                                {/* <th scope="col">Reason</th> */}
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.posts.map((posts, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>
                                                        <a href={`/ViewLeave/${posts._id}`} style={{ textDecoration: 'none' }}>
                                                            {posts.firstName}
                                                        </a>
                                                    </td>
                                                    {/* <td>{posts.firstName}</td> */}
                                                    {/* <td>{posts.LastName}</td> */}
                                                    <td>{posts.email}</td>
                                                    <td>{posts.phone}</td>
                                                    <td>{posts.position}</td>
                                                    <td>{posts.department}</td>
                                                    <td>{posts.leaveDate}</td>
                                                    <td>{posts.requestfor}</td>
                                                    <td>{posts.leaveType}</td>
                                                    {/* <td>{posts.comment}</td> */}
                                                    <td>
                                                        <a className="btn btn-warning" href={`/UpdateLeave/${posts._id}`}>
                                                            <i className="fas fa-edit"></i>&nbsp;Update
                                                        </a>
                                                        <t>   </t>
                                                        <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                                                            <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                                        </a>

                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <button className="btn Sabtn-success"><a href="/LeaveReq" style={{ textDecoration: 'none', color: 'white' }}>Create new Leave </a></button>
                                    <button className="btn SaCbtn-success" onClick={this.printData} style={{ textDecoration: 'none', color: 'white',marginLeft:20, width: '120px' }}>Print</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            
        )
    }

}