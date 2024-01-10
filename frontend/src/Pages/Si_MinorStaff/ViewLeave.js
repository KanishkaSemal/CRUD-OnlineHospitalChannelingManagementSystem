import React, { Component } from "react";

import axios from "axios";

import Header from "../../Component/Headder/Headder";

import StaffSideBar from '../../Component/SideBar/StaffSideBar/StaffSideBar';





export default class ViewLeave extends Component {

  constructor(props) {

    super(props);




    this.state = {

      post: {},

    };

  }




  componentDidMount() {

    const id = this.props.match.params.id;




    try {

      const url = `http://localhost:8000/leave/${id}`;

      axios.get(url).then((res) => {

        if (res.data.success) {

          this.setState({

            post: res.data.post,

          });

          console.log(this.state.post);

        }

      });

    }

    catch (err) {

      console.log(err)

    }

  }




  printDocument() {

    const viewContainer = document.querySelector(".view-container");




    const printContents = viewContainer.innerHTML;




    const originalContents = document.body.innerHTML;




    document.body.innerHTML = printContents;




    window.print();




    document.body.innerHTML = originalContents;

  }




  downloadFile = () => {

    const { firstName, LastName, email, phone, position, department, leaveDate, requestfor, leaveType, comment } = this.state.post;






    // Create a string with the patient data

    const patientData = `Patient Name: ${firstName} ${LastName}

    Applicant's First Name: ${firstName}

    Applicant's Last Name: ${LastName}

    Email: ${email}

    Contact Number: ${phone}

    Position: ${position}

    Department: ${department}

    Leave Date: ${leaveDate}

    Request For: ${requestfor}

    Type of Leave: ${leaveType}

    Reason for Leave: ${comment}`;






    // Create a blob with the text data

    const blob = new Blob([patientData], { type: "text/plain" });






    // Create a temporary URL to the blob

    const url = URL.createObjectURL(blob);






    // Create a temporary link to trigger the download

    const link = document.createElement("a");

    link.download = `${firstName}_${LastName}_data.txt`;

    link.href = url;






    // Click the link to trigger the download

    document.body.appendChild(link);

    link.click();






    // Remove the temporary link and URL

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

  }





  render() {

    const {

      firstName,

      LastName,

      email,

      phone,

      position,

      department,

      leaveDate,

      requestfor,

      leaveType,

      comment,

    } = this.state.post;




    return (

      <div className="main-wrapper">

        <div className="app-header">

          <Header />

        </div>

        <div className="app-body">

          <div className="body-wrapper">

            <div className="app-sidebar">

              <StaffSideBar />

            </div>

            <div class="view-container">

              <div style={{ marginTop: "70px", marginLeft: "150px" }}>

                <h4>

                  {firstName} {LastName}

                </h4>

                <hr />




                <dl className="row">

                  <dt className="col-sm-3">Applicant's Email :</dt>

                  <dd className="col-sm-9">{email}</dd>




                  <dt className="col-sm-3">Applicant's Contact No :</dt>

                  <dd className="col-sm-9">{phone}</dd>




                  <dt className="col-sm-3">Applicant's Position :</dt>

                  <dd className="col-sm-9">{position}</dd>




                  <dt className="col-sm-3">Applicant's Department :</dt>

                  <dd className="col-sm-9">{department}</dd>




                  <dt className="col-sm-3">Date of Leave :</dt>

                  <dd className="col-sm-9">{leaveDate}</dd>




                  <dt className="col-sm-3">Request For :</dt>

                  <dd className="col-sm-9">{requestfor}</dd>




                  <dt className="col-sm-3">Type of Leave :</dt>

                  <dd className="col-sm-9">{leaveType}</dd>




                  <dt className="col-sm-3">Reason for the Leave :</dt>

                  <dd className="col-sm-9">{comment}</dd>




                </dl>

              </div>

              <button className='btn btn-primary' onClick={this.printDocument} style={{ marginLeft: '100px' }}>Print</button>

              <button className='btn btn-primary' onClick={this.downloadFile} style={{ marginLeft: '10px' }}>Download</button>

            </div>

          </div>

        </div>

      </div>

    );

  }

}