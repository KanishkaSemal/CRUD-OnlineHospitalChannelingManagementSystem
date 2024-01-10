import React, { Component } from 'react';
import Header from '../../Component/Headder/Headder';
import AdminSideBar from '../../Component/SideBar/AdminSideBar/AdminSideBar';
import { Col, Row } from 'react-bootstrap';
import './Billing.css';


class BillingDashboard extends Component {

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
                            <AdminSideBar />
                        </div>
                        <div className='osapp-dashboard'> 
                        <Row>
                            
                             <button ><a href ='/GenerateBill'>Generate Bill </a></button>
                             <button><a href ='/billingtable'>View Daily Billing List</a></button>
                             <button><a href ='/BillingDashboard'>View Payment Report</a></button>
                             <button><a href ='/updateBill/:id'>View Patient Bills</a></button>
                             
                        </Row>
                        </div>
                        </div>
                        </div>
                        </div>
        );
    }
}

export default BillingDashboard;