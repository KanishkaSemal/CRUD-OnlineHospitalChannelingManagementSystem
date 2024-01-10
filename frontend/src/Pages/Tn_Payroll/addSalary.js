import React, { useState } from 'react';
import Header from '../../Component/Headder/Headder';
import AdminSideBar from '../../Component/SideBar/AdminSideBar/AdminSideBar';
import './addSalary.css';
import { Button, Col, Row } from 'react-bootstrap';
import { Form, Layout } from 'antd';
import Input from 'antd/es/input/Input';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'


export default function AddSalary() {


    const [fullName, setFullName] = useState("");
    const [position, setPosition] = useState("");
    const [year, setYear] = useState("");
    // console.log(fullName);
    const [month, setMonth] = useState("");
    const [basicSalary, setBasicSalary] = useState("");
    const [houseRendAllowance, setHouseRendAllowance] = useState("");
    const [childrenEduAllowance, setChildrenEduAllowance] = useState("");
    const [conveyanceAllowance, setConveyanceAllowance] = useState("");
    const [otherAllowances, setOtherAllowances] = useState("");
    const [epfContribution, setEpfContribution] = useState("");
    const [incomeTax, setIncomeTax] = useState("");
    let [totAllowances, setTotalAllowances] = useState(0);
    let [astimatedSallery, setAstimatedSallery] = useState(0);


    function handleSubmit() {
        console.log("submit button clicked");

        let totalAllowance = Number(otherAllowances) + Number(conveyanceAllowance) + Number(childrenEduAllowance) + Number(houseRendAllowance);
        setTotalAllowances(totalAllowance)

        let astimatedSal = ((Number(basicSalary) + totalAllowance) - (Number(incomeTax) + Number(epfContribution)));
        setAstimatedSallery(astimatedSal);

        Swal.fire({
            title: 'Employee Total Allowances:\n' + "LKR " + totalAllowance + '\nEmployee Estimated Salary:\n' + "LKR " + astimatedSal,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success');
                const data = {
                    fullName: fullName,
                    position: position,
                    year: year,
                    month: month,
                    basicSalary: basicSalary,
                    houseRendAllowance: houseRendAllowance,
                    childrenEduAllowance: childrenEduAllowance,
                    conveyanceAllowance: conveyanceAllowance,
                    otherAllowances: otherAllowances,
                    epfContribution: epfContribution,
                    incomeTax: incomeTax,
                    netSalary: astimatedSal

                };

                axios.post("http://localhost:8000/salaryRouter/addPay", data)
                    .then((res) => {
                        console.log(res);

                    })
                    .catch((err) => {
                        console.log(err);
                        alert("Error")
                        toast.error(err.response.data);
                    });
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info');
            }
        });



    }



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
                        <div className='leave-content' style={{ marginLeft: 600 }}>
                            <h1>Manage Salary</h1>
                            <h6>Add employee details down below.</h6>
                        </div>
                        <Form layout='vertical' style={{ marginRight: 400, textAlign: 'center' }} >
                            <div className='form-content'>
                                <Row >
                                    <Col >
                                        <Form.Item
                                            label='Full name'
                                            name='fullName'
                                            required rules={[{ required: true }]}>
                                            <Input type='text' className='form-control' name='fullName' placeholder='Name with initials' onChange={(e) => setFullName(e.target.value)} />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>


                                    <Col >
                                        <Form.Item
                                            label="Position"
                                            name="position"
                                            required rules={[{ required: true }]}
                                        >
                                            <Input type='text' className='form-control' name='position' placeholder='ex: doctor/nurse' onChange={(e) => setPosition(e.target.value)} />
                                        </Form.Item>
                                    </Col>

                                    <Col >
                                        <Form.Item
                                            label='Year'
                                            name='year'
                                            required rules={[{ required: true }]}>
                                            <Input type='text' className='form-control' name='year' placeholder='Year' onChange={(e) => setYear(e.target.value)} />
                                        </Form.Item>
                                    </Col>
                                    <Col >
                                        <Form.Item
                                            label='Month'
                                            name='month'
                                            required rules={[{ required: true }]}>
                                            <Input type='text' className='form-control' name='month' placeholder='Month' onChange={(e) => setMonth(e.target.value)} />
                                        </Form.Item>
                                    </Col>
                                </Row>

                            </div>

                            <div className='form1-content'>
                                <h3>Earnings</h3>
                            </div>

                            <div className='form-content'>
                                <Row >
                                    <Col >
                                        <Form.Item
                                            label='Basic salary'
                                            name='basicSalary'
                                            required rules={[{
                                                required: true, pattern: /^[0-9]+$/,
                                                message: 'Please enter a valid digit number for the basic salary.',
                                            },]}>

                                            <Input type='text' className='form-control' name='basicSalary' placeholder='+Basic Salary' onChange={(e) => setBasicSalary(e.target.value)} />

                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>

                                    <Col >
                                        <Form.Item
                                            label="House rent allowance"
                                            name="houseRendAllowance"
                                            required rules={[{ required: true }]}
                                        >
                                            <Input type='text' className='form-control' name='houseRendAllowance' placeholder='+house allowance' onChange={(e) => setHouseRendAllowance(e.target.value)} />
                                        </Form.Item>
                                    </Col>

                                    <Col >
                                        <Form.Item
                                            label='Children education allowance'
                                            name='childrenEduAllowance'
                                            required rules={[{ required: true }]}>
                                            <Input type='text' className='form-control' name='childrenEduAllowance' placeholder='+educational allowance' onChange={(e) => setChildrenEduAllowance(e.target.value)} />
                                        </Form.Item>
                                    </Col>

                                </Row>

                                <Row>
                                    <Col >
                                        <Form.Item
                                            label="Conveyance Allowance"
                                            name="conveyanceAllowance"
                                            required rules={[{ required: true }]}
                                        >
                                            <Input type='text' className='form-control' name='conveyanceAllowance' placeholder='+convey allowance' onChange={(e) => setConveyanceAllowance(e.target.value)} />
                                        </Form.Item>
                                    </Col>

                                    <Col >
                                        <Form.Item
                                            label='Other allowance'
                                            name='otherAllowances'
                                            required rules={[{ required: true }]}>
                                            <Input type='text' className='form-control' name='otherAllowances' placeholder='+additional allowance' onChange={(e) => setOtherAllowances(e.target.value)} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </div>
                            <div className='form-content'>
                                <h3>Deductions</h3>
                            </div>

                            <div className='form-content'>
                                <Row>
                                    <Col >
                                        <Form.Item
                                            label="EPF contribution"
                                            name="epfContribution"
                                            required rules={[{ required: true }]}
                                        >
                                            <Input type='text' className='form-control' name='epfContribution' placeholder='-EPF' onChange={(e) => setEpfContribution(e.target.value)} />
                                        </Form.Item>
                                    </Col>

                                    <Col >
                                        <Form.Item
                                            label='Income Taxes'
                                            name='incomeTax'
                                            required rules={[{ required: true }]}>
                                            <Input type='text' className='form-control' name='incomeTax' placeholder='-Tax' onChange={(e) => setIncomeTax(e.target.value)} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </div>
                            <div className='form-btn'>
                                <Button className="btn btn Siform-btn" type="button" onClick={() => {
                                    handleSubmit();
                                }}> Add Salary </Button>
                            </div>
                        </Form>
                    </Layout>
                </div>
            </div>

        </div>
    );
}
