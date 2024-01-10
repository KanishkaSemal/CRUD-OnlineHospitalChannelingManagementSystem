import React, { Component } from "react";
import axios from "axios";
import Header from "../../Component/Headder/Headder";
import PatientSideBar from "../../Component/SideBar/PatientSideBar.js/PatientSideBar";
import { Col, Row } from "react-bootstrap";
import "./Appointment.css";

export default class AppointmentHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    const url = `http://localhost:8000/Appointment`;
    axios.get(url).then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });

        console.log(this.state.posts);
      }
    });
  }

  onDelete = (id) => {
    const url = `http://localhost:8000/Appointment/delete/${id}`;

    axios.delete(url).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    });
  };
  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.firstName.toLowerCase().includes(searchKey)
    );

    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    const url = `http://localhost:8000/Appointment`;
    axios.get(url).then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  printData() {
    const printWindow = window.open("", "", "height=400,width=800");
    printWindow.document.write("<html><head><title>DIV Contents</title>");
    printWindow.document.write("</head><body >");
    printWindow.document.write(document.getElementById("divToPrint").innerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  }

  render() {
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

            <div className="app-details">
              <div className="my-div">
                <div className="container">
                  <div className="row">
                    <div className="KsHome">
                      <h1>All Appointments... </h1>
                    </div>
                    <div className="col-lg-3 mt-2 mb-2">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        name="searchQuery"
                        onChange={this.handleSearchArea}
                      ></input>

                      <a
                        className="btn btn-danger"
                        href="/AppointmentDashboard"
                        style={{ marginLeft: 980,}}
                      >
                        &nbsp;Back
                      </a>
                    </div>
                  </div>
                </div>
                <div id="divToPrint">
                  <table
                    className="Ks_table table-hover"
                    style={{
                      marginLeft: 20,
                      marginTop: 2,
                      textAlign: "start",
                      marginRight: 380,
                    }}
                  >
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Doctor</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.posts.map((posts, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>
                            <a
                              href={`/ViewAppointment/${posts._id}`}
                              style={{ textDecoration: "none" }}
                            >
                              {posts.firstName}
                            </a>
                          </td>

                          <td>{posts.phone}</td>
                          <td>{posts.email}</td>
                          <td>{posts.doctorName}</td>
                          <td>{posts.appointmentdate}</td>
                          <td>{posts.appointmenttime}</td>

                          <td>
                            <a
                              className="btn btn-warning"
                              href={`/EditAppointment/${posts._id}`}
                            >
                              <i className="fas fa-edit"></i>&nbsp;Update
                            </a>
                            &nbsp;
                            <a
                              className="btn btn-danger"
                              href="#"
                              onClick={() => this.onDelete(posts._id)}
                            >
                              <i className="fas fa-trash-alt"></i>&nbsp;Delete
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
