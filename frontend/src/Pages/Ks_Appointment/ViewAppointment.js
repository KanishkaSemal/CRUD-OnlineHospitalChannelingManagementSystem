import React, { Component } from "react";
import axios from "axios";
import Header from "../../Component/Headder/Headder";
import PatientSideBar from "../../Component/SideBar/PatientSideBar.js/PatientSideBar";

export default class ViewAppointment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    const url = `http://localhost:8000/appointment/${id}`;
    axios.get(url).then((res) => {
      if (res.data.success) {
        this.setState({
          post: res.data.post,
        });
        console.log(this.state.post);
      }
    });
  }

  printDocument() {
    const viewContainer = document.querySelector(".view-container");

    const printContents = viewContainer.innerHTML;

    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
  }

  render() {
    const {
      firstName,
      lastName,
      phone,
      age,
      gender,
      email,
      address,
      doctorName,
      appointmentdate,
      appointmenttime,
      discriptionOfDiagnosis,
    } = this.state.post;

    return (
      <div className="main-wrapper">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-body">
          <div className="body-wrapper">
            <div className="app-sidebar">
              <PatientSideBar />
            </div>
            <div class="view-container">
              <div style={{ marginTop: "70px", marginLeft: "150px" }}>
                <h4>
                  {firstName} {lastName}
                </h4>
                <hr />

                <dl className="row">
                  <dt className="col-sm-3">Patient COntact :</dt>
                  <dd className="col-sm-9">{phone}</dd>

                  <dt className="col-sm-3">Patient Age :</dt>
                  <dd className="col-sm-9">{age}</dd>

                  <dt className="col-sm-3">Patient Gender :</dt>
                  <dd className="col-sm-9">{gender}</dd>

                  <dt className="col-sm-3">Patient Email :</dt>
                  <dd className="col-sm-9">{email}</dd>

                  <dt className="col-sm-3">Address :</dt>
                  <dd className="col-sm-9">{address}</dd>

                  <dt className="col-sm-3">Doctor's Name :</dt>
                  <dd className="col-sm-9">{doctorName}</dd>

                  <dt className="col-sm-3">Appointment Date of Patient :</dt>
                  <dd className="col-sm-9">{appointmentdate}</dd>

                  <dt className="col-sm-3">Appointment time of Patient :</dt>
                  <dd className="col-sm-9">{appointmenttime}</dd>

                  <dt className="col-sm-3">Description of Diagnosis :</dt>
                  <dd className="col-sm-9">{discriptionOfDiagnosis}</dd>
                </dl>
              </div>
              <button className='btn btn-primary' onClick={this.printDocument} style={{marginLeft: '100px'}}>Print</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
