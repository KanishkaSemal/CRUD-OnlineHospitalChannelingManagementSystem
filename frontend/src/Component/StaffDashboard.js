import React, { Component , useEffect } from 'react';
import Header from './Headder/Headder';
import Sidebar from './SideBar/Sidebar';
import StaffSidebar from './SideBar/StaffSideBar/StaffSideBar';
import { Col, Row } from 'react-bootstrap';
import { useLocation,useNavigate , useHistory } from 'react-router-dom';

import bg from '../../src/Images/bg.png'



const StaffDashboard = () => {
    const history = useHistory();

    useEffect(() => {

        const userId = sessionStorage.getItem("LogUserId");
        const userName = sessionStorage.getItem("LogUserName");

        if (userId === null || userId === "" || userName === null || userName === "") {
            history.push('/');
        }

    });

    return( 
        
        <><div className='main-wrapper'>
            <div className='app-header'>
                <Header />
               
            </div>
            <div className='app-body'>
                <div className='body-wrapper'>
                    <div className='app-sidebar'>
                        <StaffSidebar />
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
export default StaffDashboard;