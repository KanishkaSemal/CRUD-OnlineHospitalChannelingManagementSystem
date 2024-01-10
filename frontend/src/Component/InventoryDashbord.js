import React, { Component } from 'react';
import Header from './Headder/Headder';
import Sidebar from './SideBar/Sidebar';
import { SidebarData } from './SideBar/SideBarData';
import { Col, Row } from 'react-bootstrap';
import bg from '../../src/Images/bg.png'




const InventoryDashbord = () => {

    return (

        <><div className='main-wrapper'>
            <div className='app-header'>
                <Header />

            </div>
            <div className='app-body'>
                <div className='body-wrapper'>
                    <div className='app-sidebar'>
                        <Sidebar />
                    </div>
                    <div className='app-dashboard'>
                    <div>
                    <img src={bg} />
                    </div>

                        <Row style={{marginTop:150}}>

                            <button><a href='/product' style={{ textDecoration: 'none', color: 'white' }}>Product to Records</a></button>
                            <button><a href='/add' style={{ textDecoration: 'none', color: 'white' }}>Add Product Details</a></button>
                            <button>Patient Details</button>
                            <button>Suppliers Records</button>
                            <button>Medical Records</button>
                        </Row>

                       

                    </div>
                </div>
            </div>
        </div></>

    )
}
export default InventoryDashbord;