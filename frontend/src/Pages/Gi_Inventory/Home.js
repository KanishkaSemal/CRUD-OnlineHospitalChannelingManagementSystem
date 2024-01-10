import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Component/Headder/Headder';
import AdminSideBar from '../../Component/SideBar/AdminSideBar/AdminSideBar';
import { Col, Row } from 'react-bootstrap';
import './inventory.css';




export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        this.retrievePosts();
    }


    

    retrievePosts() {
        const url = 'http://localhost:8000/product'
        axios.get(url).then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });

                console.log(this.state.posts)
            }
        });
    }


    onDelete = (id) => {
        const url = `http://localhost:8000/product/delete/${id}`;

        axios.delete(url).then((res) => {
            alert("Delete Successfully");
            this.retrievePosts();
        })

    }
    filterData(posts, searchKey) {
        const result = posts.filter((post) =>
            post.Name.toLowerCase().includes(searchKey)
        )

        this.setState({ posts: result })
    }
    
    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        const url = 'http://localhost:8000/product'
        axios.get(url).then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPosts, searchKey)
            }
        });
    }

    printData() {
        const printWindow = window.open('', '', 'height=800,width=800');
        printWindow.document.write('<html><head><title>DIV Contents</title>');
        printWindow.document.write('</head><body >');
        printWindow.document.write(document.getElementById('divToPrint').innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
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

                        <div className="app-details1">


                            <div className='my-div1'>
                                <div className='container'>
                                    <div className='row'style={{ marginTop:80  }}>
                                        <div className='col-lg-9 mt-2 mb-2' >
                                            <h1>All Products </h1>
                                        </div>
                                        <div className='col-lg-3 mt-2 mb-2'>
                                            <input
                                                className='form-control'
                                                type='search'
                                                placeholder='Search'
                                                name='searchQuery'
                                                onChange={this.handleSearchArea}>

                                            </input>
                                        </div>
                                    </div>
                                </div>
                                <div id="divToPrint">
<center>
                                    <table className="table table-hover" style={{ marginTop: 2,marginRight:500}}>

                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">company_Name</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Qty</th>
                                                <th scope="col">price</th>
                                                <th scope="col">MFG</th>
                                                <th scope="col">EXP</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.posts.map((posts, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>
                                                        <a href={`/post/${posts._id}`} style={{ textDecoration: 'none' }}>
                                                            {posts.Name}
                                                        </a>
                                                    </td>
                                                    <td>{posts.company_Name}</td>
                                                    <td>{posts.Address}</td>
                                                    <td>{posts.Qty}</td>
                                                    <td>{posts.price}</td>
                                                    <td>{posts.MFG}</td>
                                                    <td>{posts.EXP}</td>
                                                    <td>
                                                        <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                                        </a>
                                                        <t>   </t>
                                                        <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                                                            <i className="fas fa-trash-alt"></i>&nbsp;Delete
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    </center>
                                    <button className="btn btn-success"><a href="/add" style={{ textDecoration: 'none', color: 'white' }}>Create new post </a></button>
                                    <t>                                                                      </t>
                                    <button className="btn btn-success"><a onClick={this.printData} style={{  textAlign:'center', color: 'white' }}>Print </a></button>
                                    <t>                                                                                                               </t>
                                    <button className="btn btn-success"><a onClick={this.onDownload} style={{  textAlign:'center', color: 'white' }}>Download </a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        )
    }

}