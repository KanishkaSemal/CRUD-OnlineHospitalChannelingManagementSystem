import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Component/Headder/Headder';
import DoctorSideBar from '../../Component/SideBar/DoctorSideBar/DoctorSideBar';
import { Col, Row } from 'react-bootstrap';



export default class Dash_Medical extends Component {
    constructor(props) {
        super(props);

        this.state = {
            medical: []
        };
    }
    componentDidMount() {
        this.retrievemedical();
    }

    retrievemedical() {
        const url = 'http://localhost:8000/medical'
        axios.get(url).then(res => {
            if (res.data.success) {
                this.setState({
                    medical: res.data.existingmedical
                });

                console.log(this.state.medical)
            }
        });
    }


    onDelete = (id) => {
        const url = `http://localhost:8000/medical/delete/${id}`;

        axios.delete(url).then((res) => {
            alert("Delete Successfully");
            this.retrievemedical();
        })

    }
    filterData(medical, searchKey) {
        const result = medical.filter((post) =>
            post.Fname.toLowerCase().includes(searchKey)
        )

        this.setState({ medical: result })
    }
    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        const url = 'http://localhost:8000/medical'
        axios.get(url).then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingmedical, searchKey)
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
                            <DoctorSideBar />
                        </div>

                        <div className="app-details">


                            <div className='my-div'>
                                <div className='container' style={{marginTop:'60px'}}>
                                    <div className='row'>
                                        <div className='col-lg-9 mt-2 mb-2'>
                                            <h1>All Medical</h1>
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
                                            <th scope="col">Fname</th>
                                            <th scope="col">PatinetId</th>
                                            <th scope="col">age</th>
                                            <th scope="col">gender</th>
                                            <th scope="col">medication</th>
                                            <th scope="col">history</th>
                                            <th scope="col">discount</th>
                                            <th scope="col">NewTreatName</th>
                                            <th scope="col">NTreatDate</th>
                                            <th scope="col">NDoctorName</th>
                                            <th scope="col">diagnosis</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.medical.map((posts, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>
                                                    <a href={`/ViewMedical/${posts._id}`} style={{ textDecoration: 'none' }}>
                                                        {posts.Fname}
                                                    </a>
                                                </td>
                                                <td>{posts.PatinetId}</td>
                                                <td>{posts.age}</td>
                                                <td>{posts.gender}</td>
                                                <td>{posts.medication}</td>
                                                <td>{posts.history}</td>
                                                <td>{posts.discount}</td>
                                                <td>{posts.NewTreatName}</td>
                                                <td>{posts.NTreatDate}</td>
                                                <td>{posts.NDoctorName}</td>
                                                <td>{posts.diagnosis}</td>
                                                <td>
                                                    <a className="btn btn-warning" href={`/UpdateMedical/${posts._id}`}>
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
                                <button className="btn btn-success"><a href="/Medical" style={{ textDecoration: 'none', color: 'white' }}>Create Medical </a></button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

