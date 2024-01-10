import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AdminSidebar from '../../../Component/SideBar/AdminSideBar/AdminSideBar';
import Header from '../../../Component/Headder/Headder';

import { NavLink, useParams, useHistory } from 'react-router-dom';


const ReadStaff = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);

    // const history = useHistory();


    const getdata = async () => {

        const res = await fetch(`http://localhost:8000/Staff/GetStaff/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])




    return (
        <div className='main-wrapper'>
            <div className='app-header'>
                <Header />

            </div>
            <div className='app-body'>
                <div className='body-wrapper'>
                    <div className='app-sidebar'>
                        <AdminSidebar />
                    </div>
                    <div className="container" style={{marginTop:'60px'}}>
                    {/* <NavLink to="/AllStaff">back</NavLink> */}
                    <div className="container mt-3">
                        <h1 style={{ fontWeight: 400 }}>Welcome {getuserdata.fname} </h1>

                        <Card sx={{ maxWidth: 600 }}>
                            <CardContent>
                                <div className="row">
                                    <div className="left_view col-lg-6 col-md-6 col-12">
                                       
                                        <h3 className="mt-3">First Name: <span >{getuserdata.fname}</span></h3>
                                        <h3 className="mt-3">Last Name: <span >{getuserdata.lname}</span></h3>
                                        <h3 className="mt-3">DOB: <span >{getuserdata.dob}</span></h3>
                                        <p className="mt-3">Email: <span>{getuserdata.email}</span></p>
                                        <p className="mt-3">NIC: <span>{getuserdata.nic}</span></p>
                                    </div>
                                    <div className="right_view  col-lg-6 col-md-6 col-12">

                                        <p className="mt-5">mobile: <span>+91 {getuserdata.mobile}</span></p>
                                        <p className="mt-3">location: <span>{getuserdata.add}</span></p>

                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadStaff