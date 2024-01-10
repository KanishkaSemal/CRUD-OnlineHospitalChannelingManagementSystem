import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AdminSidebar from '../../../Component/SideBar/AdminSideBar/AdminSideBar';
import Header from '../../../Component/Headder/Headder';


import { NavLink, useParams } from 'react-router-dom';


const ReadPatient = () => {
    const { id } = useParams("");
    console.log(id);
    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);


    const getdata = async () => {

        const res = await fetch(`http://localhost:8000/patient/GetPatient/${id}`, {
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
                    <div className="container" style={{marginTop:'40px'}}>
                    <div className="container mt-3" >
                        {/* //<NavLink to="/AllPatient">back</NavLink> */}
                        <h1 style={{ fontWeight: 400 }}>Welcome {getuserdata.fname}   {getuserdata.lname} </h1>

                        <Card sx={{ maxWidth: 600 }}>
                            <CardContent >
                                <div className="row">
                                    <div className="left_view col-lg-6 col-md-6 col-12">
                                        <h4 className="mt-3">First Name: <span >{getuserdata.fname}</span></h4>
                                        <h4 className="mt-3">Last Name: <span >{getuserdata.lname}</span></h4>
                                        <p className="mt-3">DOB: <span >{getuserdata.dob}</span></p>
                                        <p className="mt-3">NIC: <span>{getuserdata.nic}</span></p>
                                    </div>
                                    <div className="right_view  col-lg-6 col-md-6 col-12">

                                        <p className="mt-5">Mobile: <span>+94 {getuserdata.mobile}</span></p>
                                        <p className="mt-3">Email: <span>{getuserdata.email}</span></p>
                                        <p className="mt-3">Address: <span>{getuserdata.add}</span></p>

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

export default ReadPatient