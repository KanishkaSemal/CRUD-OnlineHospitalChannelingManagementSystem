
import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { adddata } from '../Context/ContextProvider';
import AdminSidebar from '../../../Component/SideBar/AdminSideBar/AdminSideBar';
import Header from '../../../Component/Headder/Headder';

const AddPatient = () => {

    const { udata, setUdata } = useContext(adddata);

    const history = useHistory();

    const [inpval, setINP] = useState({
        compId: '',
        fname: "",
        lname: "",
        email: "",
        dob: "",
        mobile: "",
        nic: "",
        add: "",
        password: ""
    })

    useEffect(() => {
        const uniqueId = 'PA' + Date.now();
        setINP((prevVal) => ({
            ...prevVal,
            compId: uniqueId,
        }));
    }, []);


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


    const addinpdata = async (e) => {
        e.preventDefault();

        const { compId, fname, lname, email, nic, add, mobile, dob, password } = inpval;
        const res = await fetch("http://localhost:8000/patient/AddPatient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                compId, fname, lname, email, nic, add, mobile, dob, password
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            alert("data added");
            history.push("/AllPatient")
            setUdata(data)
            console.log("data added");


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
                       {/* // <NavLink to="/AllPatient">back</NavLink> */}
                        <form className="mt-4">
                            <div className="row">
                                <div class="mb-3 col-lg-6 col-md-6 col-12">
                                    <label for="exampleInputEmail1" class="form-label">Company Id</label>
                                    <input type="text" value={inpval.compId} onChange={setdata} name="compId" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
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
                                    <input type="date" value={inpval.age} onChange={setdata} name="dob" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 col-lg-6 col-md-6 col-12">
                                    <label for="exampleInputPassword1" class="form-label">Mobile</label>
                                    <input type="tel" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 col-lg-6 col-md-6 col-12">
                                    <label for="exampleInputPassword1" class="form-label">NIC</label>
                                    <input type="text" value={inpval.work} onChange={setdata} name="nic" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 col-lg-6 col-md-6 col-12">
                                    <label for="exampleInputPassword1" class="form-label">Address</label>
                                    <input type="text" value={inpval.add} onChange={setdata} name="add" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3 col-lg-6 col-md-6 col-12">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" value={inpval.password} onChange={setdata} name="password" class="form-control" id="exampleInputPassword1" />
                                </div>


                                <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddPatient;