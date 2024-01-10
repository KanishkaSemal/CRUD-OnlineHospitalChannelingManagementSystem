import React, { Component, useState, useEffect } from 'react';
import { MdAdminPanelSettings } from "react-icons/md";
import { NavLink, useHistory } from 'react-router-dom';
import { RiStethoscopeFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { FaHandHoldingMedical } from "react-icons/fa";

import logo from '../../Images/logo.JPG'


function Header() {
    const history = useHistory();

    const [userId, setuserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userRole, setUserRole] = useState('');
    const [userIcon, setUserIcon] = useState(<></>);


    useEffect(() => {

        const userId = sessionStorage.getItem("LogUserId");
        const userName = sessionStorage.getItem("LogUserName");
        const userRole = sessionStorage.getItem("LogUserRole");
        let userIcon = <></>
        let refactorUserType = '';

        switch (userRole) {
            case 'patient':
                refactorUserType = 'Patient'
                userIcon = <IoIosPeople />;
                break;
            case 'doctor':
                refactorUserType = 'Doctor'
                userIcon = <RiStethoscopeFill />;
                break;
            case 'admin':
                refactorUserType = 'Admin'
                userIcon = <MdAdminPanelSettings />;
                break;
            case 'staff':
                refactorUserType = 'Staff'
                userIcon = <FaHandHoldingMedical />;
                break;
            default:
                break;
        }

        setuserId(userId);
        setUserName(userName);
        setUserRole(refactorUserType);
        setUserIcon(userIcon);



    }, []);

    return (
        <div className='header'>
            <img src={logo} />

            <button onClick={() =>{ history.push('/');}}><b>LogOut</b></button>
            <div style={{ "float": "right", "marginRight": "50px", "marginTop": "10px" }}>
                <span style={{ "fontWeight": "600", "fontSize": "25px", "marginRight": "5px","marginBottom":"10px" }}>{userIcon}</span>
                <span style={{ "fontWeight": "500", "fontSize": "20px" }}>{userName}</span>
                <span style={{ "fontWeight": "600", "fontSize": "12px" }}> {userRole} </span></div>

        </div>

    )
}


export default Header;