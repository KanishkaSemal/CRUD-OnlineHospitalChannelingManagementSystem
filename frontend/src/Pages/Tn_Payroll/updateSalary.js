import React, { useState, useEffect } from 'react';
import Header from '../../Component/Headder/Headder';
import AdminSideBar from '../../Component/SideBar/AdminSideBar/AdminSideBar';
import './addSalary.css';
import { Col, Row, Button } from 'react-bootstrap';
import { Form, Layout } from 'antd';
import Input from 'antd/es/input/Input';
import axios from 'axios';
import { useParams} from 'react-router-dom'

export default function UpdateSalary() {

    const [fullName, setFullName] = useState("");
    const [position, setPosition] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [basicSalary, setBasicSalary] = useState("");
    const [houseRendAllowance, setHouseRendAllowance] = useState("");
    const [childrenEduAllowance, setChildrenEduAllowance] = useState("");
    const [conveyanceAllowance, setConveyanceAllowance] = useState("");
    const [otherAllowances, setOtherAllowances] = useState("");
    const [epfContribution, setEpfContribution] = useState("");
    const [incomeTax, setIncomeTax] = useState("");


   
    const { id } = useParams();
  
    useEffect(() => {
        getPaymentById();
    }, []);


    const getPaymentById = async () => {
        const response = await axios.get(`http://localhost:8000/salaryRouter/getpay/${id}`);
        setFullName(response.data.fullName);
        console.log(response.data)
        setPosition(response.data.position);
        setYear(response.data.year);
        setMonth(response.data.month);
        setBasicSalary(response.data.basicSalary);
        setHouseRendAllowance(response.data.houseRendAllowance);
        setChildrenEduAllowance(response.data.childrenEduAllowance);
        setConveyanceAllowance(response.data.conveyanceAllowance);
        setOtherAllowances(response.data.otherAllowances);
        setEpfContribution(response.data.epfContribution);
        setIncomeTax(response.data.incomeTax);
        // alert(response.data.name);
        
      };

      const updatePayment = async () => {
        console.log("submit button clicked");
        
        try {
          await axios.put(`http://localhost:8000/salaryRouter/updatepayment/${id}`, {
            fullName,
            position,
            year,
            month,
            basicSalary,
            houseRendAllowance,
            childrenEduAllowance,
            conveyanceAllowance,
            otherAllowances,
            epfContribution,
            incomeTax
          });
          alert("success")
          
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
                    <Layout>
                        <div className='leave-content'>
                            <h1>Update Salary</h1>
                            <h6>update employee details down below.</h6>
                        </div>
                        <Form layout='vertical'  >
                            <div className='form-content'>
                                <Row >
                                    <Col >
                                    <label>Full Name</label>
                                            <input type='text' className='form-control' name='fullName' placeholder='Name with initials' onChange={(e) => setFullName(e.target.value)} value={fullName || ""} />
                                       
                                    </Col>
                                </Row>

                                <Row>


                                    <Col >
                                    <label>Position</label>
                                            <Input type='text' className='form-control' name='position' placeholder='ex: doctor/nurse' onChange={(e) => setPosition(e.target.value)} value={position || ""}/>
                                        
                                    </Col>

                                    <Col >
                                    <label>Year</label>
                                            <Input type='text' className='form-control' name='year' placeholder='Year' onChange={(e) => setYear(e.target.value)} value={year || ""}/>
                                        
                                    </Col>
                                    <Col >
                                    <label>Month</label>
                                            <Input type='text' className='form-control' name='month' placeholder='Month' onChange={(e) => setMonth(e.target.value)} value={month || ""}/>
                                        
                                    </Col>
                                </Row>

                            </div>

                            <div className='form1-content'>
                                <h3>Earnings</h3>
                            </div>

                            <div className='form-content'>
                                <Row >
                                    <Col >
                                    <label>Basic Salary</label>
                                            <Input type='text' className='form-control' name='basicSalary' placeholder='+Basic Salary' onChange={(e) => setBasicSalary(e.target.value)} value={basicSalary || ""}/>
                                       
                                    </Col>
                                </Row>

                                <Row>

                                    <Col >
                                    <label>Home Allowance</label>
                                            <Input type='text' className='form-control' name='houseRendAllowance' placeholder='+house allowance' onChange={(e) => setHouseRendAllowance(e.target.value)} value={houseRendAllowance || ""}/>
                                        
                                    </Col>

                                    <Col >
                                    <label>Child Allowance</label>
                                            <Input type='text' className='form-control' name='childrenEduAllowance' placeholder='+educational allowance' onChange={(e) => setChildrenEduAllowance(e.target.value)} value={childrenEduAllowance || ""}/>
                                        
                                    </Col>

                                </Row>

                                <Row>

                                    <Col >
                                    <label>Conveyance Allowance</label>
                                            <Input type='text' className='form-control' name='conveyanceAllowance' placeholder='+convey allowance' onChange={(e) => setConveyanceAllowance(e.target.value)} value={conveyanceAllowance|| ""}/>
                                        
                                    </Col>

                                    <Col >
                                    <label>Other Allowence</label>
                                            <Input type='text' className='form-control' name='otherAllowances' placeholder='+additional allowance' onChange={(e) => setOtherAllowances(e.target.value)} value={otherAllowances || ""}/>
                                        
                                    </Col>

                                </Row>

                            </div>
                            <div className='form1-content'>
                                <h3>Deductions</h3>
                            </div>

                            <div className='form-content'>

                                <Row>

                                    <Col >
                                    <label>EPF</label>
                                            <Input type='text' className='form-control' name='epfContribution' placeholder='-EPF' onChange={(e) => setEpfContribution(e.target.value)} value={epfContribution|| ""}/>
                                       
                                    </Col>

                                    <Col >
                                        
                                            <input type='text' className='form-control' name='incomeTax' placeholder='-Tax' onChange={(e) => setIncomeTax(e.target.value)} value={incomeTax || ""} />
                                      
                                    </Col>

                                </Row>

                            </div>




                            <div className='form-btn'>
                            <Button className="btn btn Siform-btn" type="button" onClick={() => {
                                    updatePayment();
                                }}> Update Salary </Button>

                            </div>



                        </Form>
                    </Layout>
                </div>
            </div>
        </div>
    );

}