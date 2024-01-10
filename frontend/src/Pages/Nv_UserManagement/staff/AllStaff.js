import React, { useState, useEffect, useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { adddata, deldata } from '../Context/ContextProvider';
import { updatedata } from '../Context/ContextProvider'
import AdminSidebar from '../../../Component/SideBar/AdminSideBar/AdminSideBar';
import Header from '../../../Component/Headder/Headder';


const AllStaff = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { udata, setUdata } = useContext(adddata);
    const { updata, setUPdata } = useContext(updatedata);
    const { dltdata, setDLTdata } = useContext(deldata);

    const history = useHistory("");


    const getdata = async (e) => {
        const res = await fetch("http://localhost:8000/staff/GetStaff", {
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



    const deleteuser = async (id) => {
        const res2 = await fetch(`http://localhost:8000/patient/DeletePatient/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            setDLTdata(deletedata)
            getdata();
            history.push("/AllPatient")
        }

    }


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

                    <>
                        {
                            udata ?
                                <>
                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>{udata.name}</strong>  added succesfully!
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                </> : ""
                        }
                        {
                            updata ?
                                <>
                                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                                        <strong>{updata.name}</strong>  updated succesfully!
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                </> : ""
                        }

                        {
                            dltdata ?
                                <>
                                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                        <strong>{dltdata.name}</strong>  deleted succesfully!
                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                </> : ""
                        }


                        <div className="mt-5">
                            <div className="container" style={{marginTop:'20px'}}>
                                <div className="add_btn mt-2 mb-2">
                                    <NavLink to="/AddStaff" className="btn btn-primary">Add a staff member</NavLink>
                                </div>

                                <table class="table">
                                    <thead>
                                        <tr className="table-dark">
                                            <th scope="col">id</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">NIC</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            getuserdata.map((element, id) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <th scope="row">{id + 1}</th>
                                                            <td>{element.fname}</td>
                                                            <td>{element.lname}</td>
                                                            <td>{element.nic}</td>
                                                            <td>{element.email}</td>
                                                            <td>{element.mobile}</td>
                                                            <td className="d-flex justify-content-between">
                                                                <NavLink to={`/ReadStaff/${element._id}`}> <button className="btn btn-success">READ</button></NavLink>
                                                                <NavLink to={`/EditStaff/${element._id}`}>  <button className="btn btn-primary">EDIT</button></NavLink>
                                                                <button className="btn btn-danger" onClick={() => deleteuser(element._id)}>DELETE</button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default AllStaff









