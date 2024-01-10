import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams, useHistory } from 'react-router-dom'
import { updatedata } from '../Context/ContextProvider'
import AdminSidebar from '../../../Component/SideBar/AdminSideBar/AdminSideBar';
import Header from '../../../Component/Headder/Headder';

const EditStaff = () => {


    const { updata, setUPdata } = useContext(updatedata)

    const history = useHistory("");

    const [inpval, setINP] = useState({
        fname: "",
        lname: "",
        email: "",
        dob: "",
        mobile: "",
        nic: "",
        add: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`http://localhost:8000/staff/ReadStaff/${id}`, {
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
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async (e) => {
        e.preventDefault();

        const { fname, lname, email, dob, mobile, nic, add } = inpval;

        const res2 = await fetch(`http://localhost:8000/staff/EditStaff/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, lname, email, dob, mobile, nic, add
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 422 || !data2) {
            alert("fill the data");
        } else {
            history.push("/")
            setUPdata(data2);
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
                    <div className="container" style={{marginTop:'60px'}}>
                        {/* <NavLink to="/AllStaff">back</NavLink> */}
                        <form className="mt-4">
                            <div className="row">
                                <div class="mb-3 col-lg-6 col-md-6 col-12">
                                    <label for="exampleInputEmail1" class="form-label">First Name</label>
                                    <input type="text" value={inpval.fname} onChange={setdata} name="fname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3 col-lg-6 col-md-6 col-12">
                                    <label for="exampleInputEmail1" class="form-label">Last Name</label>
                                    <input type="text" value={inpval.lname} onChange={setdata} name="lname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3 col-lg-6 col-md-6 col-12">
                                    <label for="exampleInputPassword1" class="form-label">email</label>
                                    <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 col-lg-6 col-md-6 col-12">
                                    <label for="exampleInputPassword1" class="form-label">Date Of Birth</label>
                                    <input type="text" value={inpval.age} onChange={setdata} name="dob" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 col-lg-6 col-md-6 col-12">
                                    <label for="exampleInputPassword1" class="form-label">Mobile</label>
                                    <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 col-lg-6 col-md-6 col-12">
                                    <label for="exampleInputPassword1" class="form-label">NIC</label>
                                    <input type="text" value={inpval.work} onChange={setdata} name="nic" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 col-lg-6 col-md-6 col-12">
                                    <label for="exampleInputPassword1" class="form-label">Address</label>
                                    <input type="text" value={inpval.add} onChange={setdata} name="add" class="form-control" id="exampleInputPassword1" />
                                </div>


                                <button type="submit" onClick={updateuser} class="btn btn-primary">Update</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditStaff;





