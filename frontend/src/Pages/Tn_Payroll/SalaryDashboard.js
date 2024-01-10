import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Component/Headder/Headder";
import AdminSideBar from '../../Component/SideBar/AdminSideBar/AdminSideBar';
import { Button } from "react-bootstrap";
import "./addSalary.css";
import "../Tn_Payroll/addSalary"
import { useRef } from 'react';


export default function SalaryDashboard() {

  const [payments, setPayment] = useState([]);
  const [query, setQuery] = useState();
  const [filterVal, setFilterVal] = useState("");

  useEffect(() => {
    getPayments();
  }, []);

  const getPayments = async () => {
    const response = await axios.get(
      "http://localhost:8000/salaryRouter/getsalaries"
    );
    setPayment(response.data);
    setQuery(response.data);
  };

  const deletePayment = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8000/salaryRouter/deletepayment/${id}`
      );
      getPayments();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setPayment(query);
    } else {
      const filterResult = query.filter((item) =>
        item.fullName.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setPayment(filterResult);
    }
    setFilterVal(e.target.value);
  };

  const downloadReport = (tableRef) => {

    const table = tableRef.current;
    const csvData = [];



    // Get table header
    const header = Array.from(table.querySelectorAll('thead th')).map(th => th.innerText);
    csvData.push(header);



    // Get table rows
    const rows = Array.from(table.querySelectorAll('tbody tr')).map(tr => Array.from(tr.querySelectorAll('td')).map(td => td.innerText));
    csvData.push(...rows);



    // Create CSV file
    const csv = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });



    // Download file
    const link = document.createElement("a");





    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);

    link.setAttribute("download", "report.csv");

    link.style.visibility = 'hidden';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

  }
  const tableRef = useRef(null);




  return (
    <div className="main-wrapper">
      <div className="app-header">
        <Header />
      </div>
      <div className="app-body">
        <div className="body-wrapper">
          <div className="app-sidebar">
            <AdminSideBar />
          </div>

          <div className="app-details">
            <div className="my-div">
              <div className="container">
                <div className="row">
                  <div className="KsHome">
                    <h1>All Salary Details </h1>
                  </div>
                  <div className="col-lg-3 mt-2 mb-2">
                    <input
                      type="text"
                      className="form-control rounded mb-5"
                      placeholder="Search"
                      value={filterVal}
                      onInput={(e) => handleFilter(e)}
                    // onChange={(e)=> setQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div >
                  <button className="btn btn-success">
                    <a
                      href="/addSalary"
                      style={{ textAlign: 'center', color: 'white', marginLeft: 50, marginRight: 50 }}
                    >
                      Add Salary{" "}
                    </a>
                  </button>
                </div>
                <table
                  ref={tableRef}
                  className="table table-hover"
                  style={{ padding: "2px" }}
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">position</th>
                      <th scope="col">month</th>
                      <th scope="col">year</th>
                      <th scope="col">BasicSal</th>
                      <th scope="col">Rent Alw</th>
                      <th scope="col">Education Alw</th>
                      <th scope="col">Conveye Alw</th>
                      <th scope="col">Other Alw</th>
                      <th scope="col">EPF</th>
                      <th scope="col">Tax</th>
                      <th scope="col">Net Sal</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment, index) => (
                      <tr key={payment._id}>

                        <td>{index + 1}</td>
                        <td>{payment.fullName}</td>
                        <td>{payment.position}</td>
                        <td>{payment.month}</td>
                        <td>{payment.year}</td>
                        <td>{payment.basicSalary}</td>
                        <td>{payment.houseRendAllowance}</td>
                        <td>{payment.childrenEduAllowance}</td>
                        <td>{payment.conveyanceAllowance}</td>
                        <td>{payment.otherAllowances}</td>
                        <td>{payment.epfContribution}</td>
                        <td>{payment.incomeTax}</td>
                        <td>{payment.netSalary}</td>
                        <td>

                          <a className="btn btn-warning" href={`/updateSalary/${payment._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Edit
                          </a>
                          &nbsp;
                          <Button
                            className="btn btn-danger"
                            href="#"
                            onClick={() => deletePayment(payment._id)}
                          >
                            <i className="fas fa-trash-alt"></i>&nbsp;Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>

                <button className="btn btn-primary" onClick={() => downloadReport(tableRef)}>
                  Download Report
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>


  );
}
