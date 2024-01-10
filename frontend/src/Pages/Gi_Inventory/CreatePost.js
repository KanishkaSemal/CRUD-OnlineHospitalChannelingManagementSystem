import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Component/Headder/Headder';
import AdminSideBar from '../../Component/SideBar/AdminSideBar/AdminSideBar';
import './inventory.css';


class CreatePost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Name: "",
            company_Name: "",
            Address: "",
            Qty: "",
            price: "",
            MFG: "",
            EXP: ""
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    validateInput = () => {
        const { Name } = this.state;
        if (!Name) {
            alert('Name is a required field!');
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { Name, company_Name, Address, Qty, price, MFG, EXP } = this.state;
        const data = {
            Name: Name,
            company_Name: company_Name,
            Address: Address,
            Qty: Qty,
            price: price,
            MFG: MFG,
            EXP: EXP
        }
        console.log(data);

        const url = `http://localhost:8000/product/save`;
        axios.post(url, data).then((res) => {
            if (res.data.success) {
                alert("Add new product successfully")
                this.setState({
                    Name: "",
                    company_Name: "",
                    Address: "",
                    Qty: "",
                    price: "",
                    MFG: "",
                    EXP: ""
                }

                )
            }
        })


    }

    render() {
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
                        <div className='form1'style={{ marginTop:40  }}>
                            <div className='my-div'style={{ marginLeft:450  }}>
                                <h1 className='h3 mb-3 font-weight-normal'style={{ marginTop:40,textAlign:'center' }}>Create new product</h1>

                                <form className='needs-form' noValidate>
                                    <div className='form' style={{ marginBottom: '5px' }}>
                                        <label style={{ marginBottom: '5px' }}> Name :</label>
                                        <input type='text'
                                            className='inventoryform'
                                            name="Name"
                                            placeholder='Enter the Name'
                                            value={this.state.Name}
                                            required 
                                            onChange={this.handleInputChange} 
                                            onBlur={this.validateInput}
                                            />
                                    </div>

                                    <div className='form-group' style={{ marginBottom: '5px' }}>
                                        <label style={{ marginBottom: '5px' }}> Company Name :</label>
                                        <input type='text'
                                            className={!this.state.company_Name ? 'input-error' : ''}
                                            name="company_Name"
                                            placeholder='Enter the company Name'
                                            value={this.state.company_Name}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='form-group' style={{ marginBottom: '5px' }}>
                                        <label style={{ marginBottom: '5px' }}> Address :</label>
                                        <input type='text'
                                            className={!this.state.Address ? 'input-error' : ''}
                                            name="Address"
                                            placeholder='Enter the Address'
                                            value={this.state.Address}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='form-group' style={{ marginBottom: '5px' }}>
                                        <label style={{ marginBottom: '5px' }}> Qty :</label>
                                        <input type='number'
                                            className={!this.state.Qty ? 'input-error' : ''}
                                            name="Qty"
                                            placeholder='Enter the Qty'
                                            value={this.state.Qty}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='form-group' style={{ marginBottom: '5px' }}>
                                        <label style={{ marginBottom: '5px' }}> price (Rs.):</label>
                                        <input type='number'
                                            className={!this.state.price ? 'input-error' : ''}
                                            name="price"
                                            placeholder='Enter the price'
                                            value={this.state.price}
                                            onChange={this.handleInputChange} />
                                    </div>

                                    <div className='form-group row'>
                                        <div className='col-6'>
                                            <label style={{ marginBottom: '5px' }}> MFG [D/M/Y]</label>
                                            <input type='date'
                                                className='inventoryform'
                                                name="MFG"
                                                placeholder='Enter the MFG'
                                                value={this.state.MFG}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className='col-6'>
                                            <label style={{ marginBottom: '5px' }}> EXP [D/M/Y]</label>
                                            <input type='date'
                                                className='inventoryform'
                                                name="EXP"
                                                placeholder='Enter the EXP'
                                                value={this.state.EXP}
                                                onChange={this.handleInputChange} />
                                        </div>
                                    </div>

                                    <button className='btn btn-success' type='submit' style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                        <i className='far fa-check-square'></i>
                                        &nbsp;Save
                                    </button>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePost;