import React, { Component, useEffect } from 'react';
import Header from './Headder/Headder';
import AdminSideBar from './SideBar/AdminSideBar/AdminSideBar';
import { SidebarData } from './SideBar/SideBarData';
import { Col, Row } from 'react-bootstrap';
import "../Component/AdminDashboard.css";
import { NavLink, useHistory } from 'react-router-dom';

import bg from '../../src/Images/bg.png'




const AdminDashboard = () => {
    const history = useHistory();

    useEffect(() => {

        const userId = sessionStorage.getItem("LogUserId");
        const userName = sessionStorage.getItem("LogUserName");

        if (userId === null || userId === "" || userName === null || userName === "") {
            history.push('/');
        }

    });

    return (

        <><div className='main-wrapper'>
            <div className='app-header'>
                <Header />

            </div>

            <div className='app-body'>
                <div className='body-wrapper'>
                    <div className='app-sidebar'>
                        <AdminSideBar />
                    </div>
                    <div>
                    <img src={bg} />
                    </div>
                    

                        

                        {/* <Row>

                            <button><a href='/AllStaff' style={{ textDecoration: 'none', color: 'white' }}>Minor Staff Details</a></button>
                            <button><a href='/AllAdmin' style={{ textDecoration: 'none', color: 'white' }}>Admin Details</a></button>
                            <button><a href='/AllPatient' style={{ textDecoration: 'none', color: 'white' }}>Patient Details</a></button>
                            <button><a href='/AllDoctor' style={{ textDecoration: 'none', color: 'white' }}> Doctor Details</a></button>

                        </Row>
                        <Row>

                            <button>Appointment Scheduling</button>
                            <button><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Billing Records</a></button>
                            <button><a href='/DashMedical' style={{ textDecoration: 'none', color: 'white' }}>Medical Records</a></button>
                        </Row>
                        <Row>
                            <button><a href='/InventoryDashbord' style={{ textDecoration: 'none', color: 'white' }}>Inventory Management System</a></button>
                            <button>Payroll Details</button>
                            <button>Assing Task</button>
                            <button>Chat</button>
                        </Row> */}

                    </div>
                </div>
            </div>
            
        </>

    )
}
export default AdminDashboard;