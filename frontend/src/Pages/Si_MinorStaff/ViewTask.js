import React, { Component } from 'react';

import axios from 'axios';

import Header from '../../Component/Headder/Headder';

import AdminSideBar from '../../Component/SideBar/AdminSideBar/AdminSideBar';




export default class ViewTask extends Component {

    constructor(props) {

        super(props);




        this.state = {

            post: {}

        };

    }




    componentDidMount() {

        const id = this.props.match.params.id;




        const url = `http://localhost:8000/Task/${id}`;

        axios.get(url).then((res) => {

            if (res.data.success) {

                this.setState({

                    post: res.data.post

                });

                console.log(this.state.post);

            }

        });

    }




    printDocument() {

        const viewContainer = document.querySelector('.view-container');

        const printContents = viewContainer.innerHTML;

        const originalContents = document.body.innerHTML;




        document.body.innerHTML = printContents;

        window.print();




        document.body.innerHTML = originalContents;

    }




    downloadFile = () => {

        const { taskName, assignTo, createdAt, sta, taskdiscription } = this.state.post;





        const taskData = `Task Name: ${taskName}
        Assign To: ${assignTo}
        Set Due Date: ${createdAt}
        Status: ${sta}
        Task Description: ${taskdiscription}`;





        const blob = new Blob([taskData], { type: "text/plain" });





        const url = URL.createObjectURL(blob);





        const link = document.createElement("a");

        link.download = `${taskName}_data.txt`;

        link.href = url;





        document.body.appendChild(link);

        link.click();





        document.body.removeChild(link);

        URL.revokeObjectURL(url);

    }







    render() {

        const { taskName, assignTo, createdAt, sta, taskdiscription } = this.state.post;




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

                        <div class="view-container">

                            <div style={{ marginTop: '100px', marginLeft: '150px' }}>

                                <h4>{taskName}</h4>

                                <hr />



                                <dl className='row'>

                                    <dt className='col-sm-3'>Assign To :</dt>

                                    <dd className='col-sm-9'>

                                        {assignTo}

                                    </dd>


                                    <dt className='col-sm-3'>Created At :</dt>

                                    <dd className='col-sm-9'>{createdAt}</dd>




                                    <dt className='col-sm-3'>Status :</dt>

                                    <dd className='col-sm-9'>{sta}</dd>




                                    <dt className='col-sm-3'>Task Description :</dt>

                                    <dd className='col-sm-9'>{taskdiscription}</dd>

                                </dl>


                            </div>

                            <button className='btn btn-primary' onClick={this.printDocument} style={{ marginLeft: '100px' }}>Print</button>

                            <button className='btn btn-primary' onClick={this.downloadFile} style={{ marginLeft: '10px' }}>Download</button>

                        </div>

                    </div>

                </div>

            </div>





        )

    }

}
