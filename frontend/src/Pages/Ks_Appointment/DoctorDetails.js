import React, { Component } from 'react';
import Header from '../../Component/Headder/Headder';
import PatientSideBar from '../../Component/SideBar/PatientSideBar.js/PatientSideBar';
import './Appointment.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

class DoctorDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }

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
                        <div className='app-content'>

                            <div className="container" style={{marginTop:60}}>
                        
                            <a className="btn btn-danger" href="/AppointmentDashboard" style={{marginLeft:900}} >
                                        &nbsp;Back
                                    </a>
                            
                                <div className="container mt-3">
                                    <h1 style={{ fontWeight: 400 }}>Doctor Details :</h1>
                                    <Row>
                                    <Card sx={{ maxWidth: 450 }}>
                                        <CardContent>
                                            

                                            
                                                <Col>
                                            <div className="row">
                                                <div className="left_view col-lg-6 col-md-6 col-12">
                                                   
                                                    <h4 className="mt-3">Name: <span >Dr.Githma Kulasekara</span></h4>
                                                    <h4 className="mt-3">ID: <span >D001</span></h4>
                                                    <p className="mt-3" >Gender: <span>Male</span></p>
                                                    <p className="mt-3">NIC: <span> IT21279898</span></p>
                                                </div>
                                                <div className="right_view  col-lg-6 col-md-6 col-12">

                                                    <p className="mt-5">Mobile: <span>0766481411</span></p>
                                                    <p className="mt-3">Email: <span>githma@gmail.com</span></p>
                                                    <p className="mt-3">Specialized: <span>Allergists</span></p>
                                                </div>
                                            </div>
                                            </Col>
                                            
                                            </CardContent>
                                            </Card>


                                            
                                         
                                            <Card sx={{ maxWidth: 450 }}>
                                            <CardContent>
                                            
                                                <Col>
                                            <div className="row">
                                                <div className="Senarathleft_view col-lg-6 col-md-6 col-12">
                                                   
                                                    <h4 className="mt-3">Name: <span >Dr.Oshitha Senarathna</span></h4>
                                                    <h4 className="mt-3">PID: <span >D002</span></h4>
                                                    <p className="mt-3" >Gender: <span>Male</span></p>
                                                    <p className="mt-3">NIC: <span>IT21196706</span></p>
                                                </div>
                                                <div className="right_view  col-lg-6 col-md-6 col-12">

                                                    <p className="mt-5">Mobile: <span>0701739381</span></p>
                                                    <p className="mt-3">Email: <span>oshitha@gmail.com</span></p>
                                                    <p className="mt-3">Specialized: <span>Dermatologists</span></p>
                                                </div>
                                            </div>
                                            </Col>
                                            
                                            </CardContent>
                                            </Card>
                                            </Row><br></br>




                                            <Row>
                                    <Card sx={{ maxWidth: 450 }}>
                                        <CardContent>
                                            

                                            
                                                <Col>
                                            <div className="row">
                                                <div className="left_view col-lg-6 col-md-6 col-12">
                                                   
                                                    <h4 className="mt-3">Name: <span >Dr.Indusha Jayasinhe</span></h4>
                                                    <h4 className="mt-3">ID: <span >D003</span></h4>
                                                    <p className="mt-3" >Gender: <span>Female</span></p>
                                                    <p className="mt-3">NIC: <span> IT21473524</span></p>
                                                </div>
                                                <div className="right_view  col-lg-6 col-md-6 col-12">

                                                    <p className="mt-5">Mobile: <span>0771893910</span></p>
                                                    <p className="mt-3">Email: <span>indusha@gmail.com</span></p>
                                                    <p className="mt-3">Specialized: <span>Ophthalamologists</span></p>
                                                </div>
                                            </div>
                                            </Col>
                                            
                                            </CardContent>
                                            </Card>


                                            
                                         
                                            <Card sx={{ maxWidth: 450 }}>
                                            <CardContent>
                                            
                                                <Col>
                                            <div className="row">
                                                <div className="left_view col-lg-6 col-md-6 col-12">
                                                   
                                                    <h4 className="mt-3">Name: <span >Dr.Nipuni Harishchandra</span></h4>
                                                    <h4 className="mt-3">PID: <span >D004</span></h4>
                                                    <p className="mt-3" >Gender: <span>Female</span></p>
                                                    <p className="mt-3">NIC: <span>IT21248030</span></p>
                                                </div>
                                                <div className="right_view  col-lg-6 col-md-6 col-12">

                                                    <p className="mt-5">Mobile: <span>0715235925</span></p>
                                                    <p className="mt-3">Email: <span>nipuni@gmail.com</span></p>
                                                    <p className="mt-3">Specialized: <span>gynecologists</span></p>
                                                </div>
                                            </div>
                                            </Col>
                                            
                                            </CardContent>
                                            </Card>
                                            </Row><br></br>


                                       
                                            <Row>
                                    <Card sx={{ maxWidth: 450 }}>
                                        <CardContent>
                                            

                                            
                                                <Col>
                                            <div className="row">
                                                <div className="left_view col-lg-6 col-md-6 col-12">
                                                   
                                                    <h4 className="mt-3">Name: <span >Dr.Sandunika Samarakoon</span></h4>
                                                    <h4 className="mt-3">ID: <span >D005</span></h4>
                                                    <p className="mt-3" >Gender: <span>Female</span></p>
                                                    <p className="mt-3">NIC: <span> IT21072888</span></p>
                                                </div>
                                                <div className="right_view  col-lg-6 col-md-6 col-12">

                                                    <p className="mt-5">Mobile: <span>0763435633</span></p>
                                                    <p className="mt-3">Email: <span>sandunika@gmail.com</span></p>
                                                    <p className="mt-3">Specialized: <span>Cardiologists</span></p>
                                                </div>
                                            </div>
                                            </Col>
                                            
                                            </CardContent>
                                            </Card>


                                            
                                         
                                            <Card sx={{ maxWidth: 450 }}>
                                            <CardContent>
                                            
                                                <Col>
                                            <div className="row">
                                                <div className="left_view col-lg-6 col-md-6 col-12">
                                                   
                                                    <h4 className="mt-3">Name: <span >Dr.Nikini Abeywikrama</span></h4>
                                                    <h4 className="mt-3">PID: <span >D006</span></h4>
                                                    <p className="mt-3" >Gender: <span>Female</span></p>
                                                    <p className="mt-3">NIC: <span>IT21473524</span></p>
                                                </div>
                                                <div className="right_view  col-lg-6 col-md-6 col-12">

                                                    <p className="mt-5">Mobile: <span>0701539773</span></p>
                                                    <p className="mt-3">Email: <span>nikini@gmail.com</span></p>
                                                    <p className="mt-3">Specialized: <span>Endocinologists</span></p>
                                                </div>
                                            </div>
                                            </Col>
                                            
                                            </CardContent>
                                            </Card>
                                            </Row><br></br>
                                          


                                            <Row>
                                    <Card sx={{ maxWidth: 450 }}>
                                        <CardContent>
                                            

                                            
                                                <Col>
                                            <div className="row">
                                                <div className="left_view col-lg-6 col-md-6 col-12">
                                                   
                                                    <h4 className="mt-3">Name: <span >Dr.K.S.PERERA</span></h4>
                                                    <h4 className="mt-3">ID: <span >D007</span></h4>
                                                    <p className="mt-3" >Gender: <span>Male</span></p>
                                                    <p className="mt-3">NIC: <span> IT21202254</span></p>
                                                </div>
                                                <div className="right_view  col-lg-6 col-md-6 col-12">

                                                    <p className="mt-5">Mobile: <span>0773087693</span></p>
                                                    <p className="mt-3">Email: <span>kanishka@gmail.com</span></p>
                                                    <p className="mt-3">Specialized: <span>Gastroenterologists</span></p>
                                                </div>
                                            </div>
                                            </Col>
                                            
                                            </CardContent>
                                            </Card>


                                            
                                         
                                            <Card sx={{ maxWidth: 450 }}>
                                            <CardContent>
                                            
                                                <Col>
                                            <div className="row">
                                                <div className="left_view col-lg-6 col-md-6 col-12">
                                                   
                                                    <h4 className="mt-3">Name: <span >Dr.Tharani De silva</span></h4>
                                                    <h4 className="mt-3">PID: <span >D008</span></h4>
                                                    <p className="mt-3" >Gender: <span>Female</span></p>
                                                    <p className="mt-3">NIC: <span>IT21219702</span></p>
                                                </div>
                                                <div className="right_view  col-lg-6 col-md-6 col-12">

                                                    <p className="mt-5">Mobile: <span>0701539773</span></p>
                                                    <p className="mt-3">Email: <span>tharani@gmail.com</span></p>
                                                    <p className="mt-3">Specialized: <span>Endocinologists</span></p>
                                                </div>
                                            </div>
                                            </Col>
                                            
                                            </CardContent>
                                            </Card>
                                            </Row>

                                            
                                            
                                    
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoctorDetails;