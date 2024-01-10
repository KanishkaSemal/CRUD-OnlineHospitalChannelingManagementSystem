import React, { Component } from 'react';
import Header from '../../Component/Headder/Headder';
import PatientSideBar from '../../Component/SideBar/PatientSideBar.js/PatientSideBar'; 
import { Col, Row } from 'react-bootstrap';
import './Appointment.css';
import { NavLink } from 'react-router-dom';


class AppointmentDashboard extends Component {

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
                            < PatientSideBar />
                        </div>
                       
                        <div className='Ksapp-dashboard'>
                        <div className='KsDashName'>
                        <h1>Appointment Dashboard...</h1>
                        </div>

                        <div>
                     </div>
                        <Row>
                        <button><a href='/DoctorDetails' style={{ textDecoration: 'none', color: 'white' }}>Doctor Details</a></button> 
                        <button><a href='/AppointmentShedul' style={{ textDecoration: 'none', color: 'white' }}>Shedul your Appointment</a></button>
                        <button><a href='/AppointmentHome' style={{ textDecoration: 'none', color: 'white' }}>Manage your Appointment</a></button>
                        <button><a href='/Calendar' style={{ textDecoration: 'none', color: 'white' }}>Calender</a></button>    
                             
                             
                        </Row>

                        

                       </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default AppointmentDashboard;