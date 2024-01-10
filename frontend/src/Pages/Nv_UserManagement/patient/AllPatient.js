import React, { useState, useEffect, useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { adddata, deldata } from '../Context/ContextProvider';
import { updatedata } from '../Context/ContextProvider'
import AdminSidebar from '../../../Component/SideBar/AdminSideBar/AdminSideBar';
import Header from '../../../Component/Headder/Headder';


const AllPatient = () => {

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);
    const { udata, setUdata } = useContext(adddata);
    const { updata, setUPdata } = useContext(updatedata);
    const { dltdata, setDLTdata } = useContext(deldata);
    //const{sdata,setSearch}=useContext(searchdata);

    const history = useHistory("");


    const getdata = async (e) => {
        const res = await fetch("http://localhost:8000/patient/GetPatient", {
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
            alert("Delete Successfully");
            this.retrievePosts();
        }
    }



    const handlePrint = () => {
        window.print();
    }
    const handleDownload = () => {
        const data = JSON.stringify(getuserdata);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'patient-data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    // const searchdata = (e) => {
    //     setSearch(e.target.value);
    //     if (e.target.value === '') {
    //         getdata();
    //     } else {
    //         const results = getuserdata.filter((data) => {
    //             return data.fname.toLowerCase().includes(e.target.value.toLowerCase()) || data.lname.toLowerCase().includes(e.target.value.toLowerCase()) || data.email.toLowerCase().includes(e.target.value.toLowerCase()) || data.nic.toLowerCase().includes(e.target.value.toLowerCase()) || data.mobile.toLowerCase().includes(e.target.value.toLowerCase())
    //         });
    //         setUserdata(results);
    //     }
    // }
    
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
                            <div className="container" style={{ marginTop: '20px' }}>
                                <div className="add_btn mt-2 mb-2" >
                                    <NavLink to="/AddPatient" className="btn btn-success"  style={{ marginRight: "500px" }}>Add a patient</NavLink>
                                    <button type="submit" onClick={handlePrint} class="btn btn-primary" style={{ marginRight: "5px" }} >Print</button>
                                    <button type="submit" onClick={handleDownload} className="btn btn-primary" >Download </button>

                                </div>
                                <div className='col-lg-3 mt-2 mb-2'>
                                            <input
                                                className='form-control'
                                                type='search'
                                                placeholder='Search'
                                                name='searchQuery'
                                               >

                                            </input>
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
                                                            <td>
                                                                <a href={`/ReadPatient/${element._id}`} style={{ textDecoration: 'none' }}>
                                                                    {element.fname}
                                                                </a>
                                                            </td>
                                                            <td>{element.lname}</td>
                                                            <td>{element.nic}</td>
                                                            <td>{element.email}</td>
                                                            <td>{element.mobile}</td>
                                                            <td>
                                                                <a className="btn btn-warning" href={`/EditPatient/${element._id}`}>
                                                                    <i className="fas fa-edit"></i>&nbsp;Edit
                                                                </a>
                                                                <t>   </t>
                                                                <a className="btn btn-danger" href="#" onClick={() => deleteuser(element._id)}>
                                                                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                                                </a>

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

export default AllPatient









