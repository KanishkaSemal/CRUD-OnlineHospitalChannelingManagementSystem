import React, { useState, useEffect } from 'react';
import Header from '../../Component/Headder/Headder';
import AdminSideBar from '../../Component/SideBar/AdminSideBar/AdminSideBar';
import { Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function BillingTable() {

    const [bills, setBill] = useState([]);

    const [query, setQuery] = useState();
  const [filterVal, setFilterVal] = useState("");


  const handleFilter = (e) => {
    if (e.target.value === "") {
      setBill(query);
    } else {
      const filterResult = query.filter((item) =>
        item.firstName.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setBill(filterResult);
    }
    setFilterVal(e.target.value);
  };

    useEffect(() => {
        getBill();
    }, []);

    const getBill = async () => {
        const response = await axios.get(
            "http://localhost:8000/billing/BillingRouter"
        );
        setBill(response.data);
        setQuery(response.data);

    };
    const deleteBill = async (id) => {
        try {
          await axios.delete(
            `http://localhost:8000/billing/BillingRouter/delete/${id}`
          );
          getBill();
        } catch (error) {
          console.log(error);
        }
      };



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
                    <div className='app-content'>

                        <div class="Medical-container">
                            <center><h1>Billing Invoice</h1></center>
                            <form>
                                <div class="personal-container">
                                <div className="col-lg-3 mt-2 mb-2">
                    <input
                      type="text"
                      className="form-control rounded mb-5"
                      placeholder="Search"
                      value={filterVal}
                      onInput={(e) => handleFilter(e)}
                       onChange={(e)=> setQuery(e.target.value)}
                    />
                  </div>
                                    <Row>

                                        <table
                                            className="Ks_table table-hover salary-table"
                                            style={{ padding: "10px" }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">First Name</th>
                                                    <th scope="col">Last Name</th>
                                                    <th scope="col">Phone</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Appointment Date</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {bills.map((bill, index) => (
                                                    <tr key={bill._id}>

                                                        <td>{index + 1}</td>
                                                        <td>{bill.firstName}</td>
                                                        <td>{bill.lastName}</td>
                                                        <td>{bill.phone}</td>
                                                        <td>{bill.email}</td>
                                                        <td>{bill.appointmentdate}</td>
                                                        
                                                        <td>
                          <Link to={`../updateBill/${bill._id}`}>
                            <a className="btn btn-warning" href="">
                              <i className="fas fa-edit"></i>&nbsp;Edit
                            </a>
                          </Link>
                          
                            <button className="ml-5 btn btn-danger" href="" onClick={() => deleteBill(bill._id)}>
                              <i className="fas fa-delete"></i>&nbsp;Delete
                            </button>
                          
                          &nbsp;
                          
                          </td>
                                                      
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </Row>
                                </div>


                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

