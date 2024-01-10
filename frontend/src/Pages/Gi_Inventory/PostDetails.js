import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Component/Headder/Headder';
import AdminSideBar from '../../Component/SideBar/AdminSideBar/AdminSideBar';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';
import './inventory.css';
import jsPDF from 'jspdf';

export default class PostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }




    componentDidMount() {
        const id = this.props.match.params.id;

        const url = `http://localhost:8000/product/${id}`;
        axios.get(url).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });
                console.log(this.state.post);
            }
        });
    }
    printDocument = () => {
        const { Name, company_Name, Address, Qty, price, MFG, EXP } = this.state.post;

        const printWindow = window.open('', '', 'width=800,height=800');
        printWindow.document.write(
            `
            <html>
            <head>
            <title>Print Window</title>
            </head>
            <body>
            <h1>${Name}</h1>
            <ul>
            <li>Company Name : ${company_Name}</li>
            <li>Address : ${Address}</li>
            <li>Qty : ${Qty}</li>
            <li>Price : ${price}</li>
            <li>MFG : ${MFG}</li>
            <li>EXP : ${EXP}</li>
            </ul>
             
            </body>
            </html>
            `
        );
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
    }



    downloadDocument = () => {
        const { Name, company_Name, Address, Qty, price, MFG, EXP } = this.state.post;

        const doc = new jsPDF();
        doc.text(`${Name}`, 10, 10);
        doc.text(`Company Name : ${company_Name}`, 10, 20);
        doc.text(`Address : ${Address}`, 10, 30);
        doc.text(`Qty : ${Qty}`, 10, 40);
        doc.text(`Price : ${price}`, 10, 50);
        doc.text(`MFG : ${MFG}`, 10, 60);
        doc.text(`EXP : ${EXP}`, 10, 70);
        doc.save(`${Name}`);
    }
    render() {
        const { Name, company_Name, Address, Qty, price, MFG, EXP } = this.state.post;

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
                        <div className='my-div' style={{ marginTop: 60, textAlign: 'center' }}>
                            <div style={{ marginTop: '20px' }}>
                                <h4 style={{ textAlign: 'left', marginLeft: 100 }}>{Name}  <Link className="btn btn-danger" to="/product" style={{ marginLeft: 900 }} >
                                    &nbsp;Back
                                </Link>

                                </h4>
                                <hr />

                                <div>
                                    <dl className='row' style={{ textAlign: 'left', marginLeft: 100 }}>
                                        <dt className='col-sm-3'>Name :</dt>

                                        <dd className='col-sm-9'>
                                            {Name}

                                        </dd>
                                        <dt className='col-sm-3'>Company Name :</dt>
                                        <dd className='col-sm-9'>
                                            {company_Name}

                                        </dd>



                                        <dt className='col-sm-3'>Address    :</dt>
                                        <dd className='col-sm-9'>{Address}</dd>

                                        <dt className='col-sm-3'>Qty :</dt>
                                        <dd className='col-sm-9'>{Qty}</dd>

                                        <dt className='col-sm-3'>price :</dt>
                                        <dd className='col-sm-9'>{price}</dd>

                                        <dt className='col-sm-3'>MFG :</dt>
                                        <dd className='col-sm-9'>{MFG}</dd>

                                        <dt className='col-sm-3'>EXP :</dt>
                                        <dd className='col-sm-9'>{EXP}</dd>


                                        <QRCode style={{ alignContent: 'end' }}
                                            value={`${Name},${company_Name}, ${Address}, ${Qty}, ${price}, ${MFG}, ${EXP}`}
                                            size={200}
                                            fgColor="#000000"
                                            bgColor="#ffffff"
                                        />

                                    </dl>

                                    <Link className="btn btn-success" to="#" style={{ textAlign: 'center', color: 'white', marginBlockEnd:200,marginRight:20 }} onClick={this.printDocument} >
                                            &nbsp;Print
                                        </Link>
                                        <Link className="btn btn-success" to="#" style={{ textAlign: 'center', color: 'white',marginBlockEnd:200,marginRight:700 }} onClick={this.downloadDocument} >
                                            &nbsp;Download
                                        </Link>
                                </div>



                            </div>



                        </div>




                    </div>
                </div>
            </div>


        )
    }
}