import React, { Component } from 'react';
import Header from './Headder/Headder';
import PatientSideBar from './SideBar/PatientSideBar.js/PatientSideBar';
import { SidebarData } from './SideBar/PatientSideBar.js/PatientSideBarData';
import { Col, Row } from 'react-bootstrap';
import { useLocation,useNavigate } from 'react-router-dom';

import bg from '../../src/Images/bg.png'




const PatientsDashboard = () => {

    return( 
        
        <><div className='main-wrapper'>
            <div className='app-header'>
                <Header />
               
            </div>
            <div className='app-body'>
                <div className='body-wrapper'>
                    <div className='app-sidebar'>
                        <PatientSideBar />
                    </div>
                    <div className='app-dashboard'>

                    <div>
                    <img src={bg} />
                    </div>
                       


                    </div>
                </div>
            </div>
        </div></>

    )
}
export default PatientsDashboard;