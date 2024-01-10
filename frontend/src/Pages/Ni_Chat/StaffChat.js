import React, { Component } from 'react';
import Header from '../../Component/Headder/Headder';
import StaffSidebar from '../../Component/SideBar/StaffSideBar/StaffSideBar';
import Swal from 'sweetalert2'
import AccountCSS from './account.module.css';
import { Form, Button, Table, Row, Col, Container, Dropdown, Modal } from "react-bootstrap";
import { IoMdSend } from "react-icons/io";
import { GrUserAdmin } from "react-icons/gr";
import { BsFillChatLeftTextFill, BsPeopleFill, BsPersonCircle, BsChatDots, BsCheck, BsCheckAll, BsFillPersonFill, BsPeople } from "react-icons/bs";
import axios from 'axios';
import ScrollableFeed from 'react-scrollable-feed';
import { MdAdminPanelSettings } from "react-icons/md";
import { RiStethoscopeFill } from "react-icons/ri";

class StaffChat extends Component {

    constructor(props) {
        super(props)

        this.state = {

            reciver: [{
                reciverName: '',
                reciverID: ''
            }],

            sennder: [{
                sennderName: '',
                sennderID: ''
            }

            ],

            systemAvbUsers: [{
                name: '',
                id: ''
            }],

            systemPrevMessageUsers: [{
                name: '',
                id: ''
            }],

            selectedChatType: 'prevChat',
            reciverSelected: false,
            message: '',
            userType: '',
            allMessages: [],
            editDioVisible: false,
            editedMessageObject: '',
            editedMessage: '',
            systemPrevMessageUsersDuplicate: []


        }

        this.navigateToHome = this.navigateToHome.bind(this);
        this.navigateNewMessage = this.navigateNewMessage.bind(this);
        this.navigatePrevMessage = this.navigatePrevMessage.bind(this);
        this.selectedReciver = this.selectedReciver.bind(this);
        this.changeMessageHandler = this.changeMessageHandler.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.navigateDoctorUsers = this.navigateDoctorUsers.bind(this);
        this.navigateAdminUsers = this.navigateAdminUsers.bind(this);
        this.dateConverter = this.dateConverter.bind(this);
        this.editMessage = this.editMessage.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.changeEditMessageHandler = this.changeEditMessageHandler.bind(this);
        this.handleEditSave = this.handleEditSave.bind(this);
        this.handleMessageDelete = this.handleMessageDelete.bind(this);
        this.handleSearchArea = this.handleSearchArea.bind(this);


    }

    filterData(students, searchKey) {

      
        const result = students.filter(
            (item) =>
                item.fname.toLowerCase().includes(searchKey) || //toLowerCase() helps to filter the data using the lowercase letters.
                item.fname.toUpperCase().includes(searchKey) || //toUpperCase() helps to filter the data using the Uppercase letters.
                item.lname.toLowerCase().includes(searchKey) ||
                item.lname.toUpperCase().includes(searchKey)
        );

        console.log("sukiii112222",result);

        let { systemAvbUsers } = this.state;
        systemAvbUsers = [];

        result.map(obj => {

            let dataObj = {
                name: obj.fname + " " + obj.lname,
                id: obj.compId
            }

            systemAvbUsers.push(dataObj);

        });

        this.setState({
            systemAvbUsers,
            
        });



       
    }



    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

       let url = this.state.userType === 'Admin' ? 'http://localhost:8000/admin/GetAdmin' : 'http://localhost:8000/doctor/GetDoctor';

        axios.get(url).then((res) => {
          
            if (res.data) {
               
                this.filterData(res.data, searchKey);
            }
        });
    };


    handleMessageDelete(e) {
        e.preventDefault();

        let { editedMessageObject } = this.state;


        const url = `http://localhost:8000/api/message/deleteMessagById/${editedMessageObject._id}`;

        axios.delete(url).then((res) => {
            if (res.data.status) {
                this.getAllMessages();
                this.handleClose();
            }
        })
    }

    handleEditSave(e) {
        e.preventDefault();

        const { editedMessageObject } = this.state;

        const url = `http://localhost:8000/api/message/updateMessageById/${editedMessageObject._id}`;

        axios.put(url, editedMessageObject).then((res) => {
            if (res.data.status) {
                this.getAllMessages();
                this.handleClose();
            }
        })

    }

    changeEditMessageHandler = (event) => {
        if (event.target.value) {
            this.setState({
                editedMessageObject: { ...this.state.editedMessageObject, msg: event.target.value }
            }, () => {
                console.log("edited msg", this.state.editedMessageObject)
            })
        }
    }


    handleClose() {
        this.setState({
            editDioVisible: false
        })

    }

    editMessage(messageObject) {

        console.log("editmsg", messageObject)
        this.setState({
            editDioVisible: true,
            editedMessageObject: messageObject
        })

    }

    navigateAdminUsers = (e) => {
        e.preventDefault();

        const url = 'http://localhost:8000/admin/GetAdmin';
       
        axios.get(url).then((res) =>{

                let { systemAvbUsers } = this.state;
                systemAvbUsers = [];
        
                res.data.map(obj => {
        
                    let dataObj = {
                        name: obj.fname + " "+obj.lname,
                        id: obj.compId
                    }
        
                    systemAvbUsers.push(dataObj);
        
                });
        
                this.setState({
                    systemAvbUsers,
                    userType: 'Admin'
                });


         
            
        })


        //write axios call to get all admin users
        // const adminUsersList = [{
        //     "name": "rathnapala jayaweera",
        //     "id": "AD0002"
        // },
        // {
        //     "name": "kumari hewage",
        //     "id": "AD0003"
        // },
        // {
        //     "name": "jagath somapala",
        //     "id": "AD0004"
        // },
        // {
        //     "name": "john doe",
        //     "id": "AD0005"
        // },
        // {
        //     "name": "jane smith",
        //     "id": "AD0006"
        // }, {
        //     "name": "peter parker",
        //     "id": "AD0007"
        // },
        // {
        //     "name": "clark kent",
        //     "id": "AD0008"
        // },
        // {
        //     "name": "bruce wayne",
        //     "id": "AD0009"
        // },
        // {
        //     "name": "tony stark",
        //     "id": "AD0010"
        // },
        // {
        //     "name": "natasha romanoff",
        //     "id": "AD0011"
        // }];

       



    }

    navigateDoctorUsers = (e) => {
        e.preventDefault();

        //write axios call to get all staff users
        
        const url = 'http://localhost:8000/doctor/GetDoctor';
       
        axios.get(url).then((res) =>{

                let { systemAvbUsers } = this.state;
                systemAvbUsers = [];
        
                res.data.map(obj => {
        
                    let dataObj = {
                        name: obj.fname + " "+obj.lname,
                        id: obj.compId
                    }
        
                    systemAvbUsers.push(dataObj);
        
                });
        
                this.setState({
                    systemAvbUsers,
                    userType: 'Doctor',
                    selectedChatType: 'newChat'
                });

            })


        // const doctorUsersList = [
        //     {
        //         "name": "John Smith",
        //         "id": "DO0001"
        //     },
        //     { "name": "Jagath Sapmal", "id": "DO12345" },
        //     {
        //         "name": "Maria Garcia",
        //         "id": "DO0003"
        //     },
        //     {
        //         "name": "Raj Patel",
        //         "id": "DO0004"
        //     },
        //     {
        //         "name": "Giovanni Rossi",
        //         "id": "DO0005"
        //     },
        //     {
        //         "name": "Emily Wilson",
        //         "id": "DO0006"
        //     },
        //     {
        //         "name": "Juan Gonzalez",
        //         "id": "DO0007"
        //     },
        //     {
        //         "name": "Hiroshi Nakamura",
        //         "id": "DO0008"
        //     },
        //     {
        //         "name": "Marta Sanchez",
        //         "id": "DO0009"
        //     },
        //     {
        //         "name": "Alexandre Dupont",
        //         "id": "DO0010"
        //     }
        // ];


 

    }


    addMessageHistoryData() {


        const data = {

            "personOne": this.state.sennder.sennderID,
            "personOneName": this.state.sennder.sennderName,
            "personTwo": this.state.reciver.reciverID,
            "personTwoName": this.state.reciver.reciverName

        }

        try {
            const url = 'http://localhost:8000/api/messageHistory/getHistoryByUsernames';
            axios.post(url, data).then((res) => {


                if (!res.data.status) {

                    const url = ' http://localhost:8000/api/messageHistory/addMessageHistory';
                    axios.post(url, data).then((res) => {


                        if (res.data.status) {



                        } else {
                            Swal.fire({

                                position: 'top-end',
                                icon: 'error',
                                title: res.data.message,
                                showConfirmButton: false,
                                timer: 1500
                            }
                            )
                
                        }

                    })

                } else {

                    console.log(" else check")

                }

            })


        } catch {
          
            Swal.fire({

                position: 'top-end',
                icon: 'error',
                title: "error in retriving previos message history",
                showConfirmButton: false,
                timer: 1500
            }
            )
        }


    }

    addMessage = (e) => {
        e.preventDefault();

        this.addMessageHistoryData();

        const { reciver: { reciverID, reciverName }, message } = this.state;

        if (!reciverID || !reciverName || !message) {
            Swal.fire({

                position: 'top-end',
                icon: 'warning',
                title: "Please Select user Or Enter message",
                showConfirmButton: false,
                timer: 1500
            }
            )
            return;
        }

        const postData = {
            "doctorId": reciverID.startsWith('DO') ? reciverID : "",
            "adminId": reciverID.startsWith('AD') ? reciverID : "",
            "staffId": this.state.sennder.sennderID,
            "sennder": this.state.sennder.sennderID,
            "reciver": reciverID,
            "msg": message,
            "seenStatus": "false"
        };

        const url = 'http://localhost:8000/api/message/insertNewMessage';

        axios.post(url, postData).then((res) => {
            if (res.data.status) {
                this.setState({
                    message: ''
                })
            } else {
                Swal.fire({

                    position: 'top-end',
                    icon: 'error',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500
                }
                )
            }
        });
    }


    changeMessageHandler = (event) => {

      
            this.setState({
                message: event.target.value
            })

       

    }

    selectedReciver = (reciver) => {

        console.log("mmmmmmm", reciver)
        this.setState({
            reciverSelected: true,
            reciver: {
                reciverName: reciver.name,
                reciverID: reciver.id
            },
        }, () => {

            this.interval = setInterval(() => {
                this.getAllMessages();
            }, 1000);


        })
    }


    navigatePrevMessage(e) {
        e.preventDefault();
        this.setState({
            selectedChatType: 'prevChat'
        })
    }

    navigateNewMessage(e) {
        e.preventDefault();
        this.setState({
            selectedChatType: 'newChat'
        })
    }


    getloggedUser() {

        const userId = sessionStorage.getItem("LogUserId");
        const userName = sessionStorage.getItem("LogUserName");

        this.setState({
            sennder: {
                sennderName: userName,
                sennderID: userId
            },
        }, () => {
            this.interval = setInterval(() => {
                this.getMessageHistoryByUser();
            }, 3000);



        })
    }

    getAllMessages() {

        const { reciver: { reciverID, reciverName } } = this.state;
        const url = 'http://localhost:8000/api/message/getAllMessages';

        if (!reciverID || !reciverName) {
            alert("Please Select user");
            return;
        }


        const data = {
            "doctorId": reciverID.startsWith('DO') ? reciverID : "",
            "adminId": reciverID.startsWith('AD') ? reciverID : "",
            "staffId": this.state.sennder.sennderID,
        }

        axios.post(url, data).then((res) => {
            if (res.data.status) {

                this.setState({
                    allMessages: res.data.data
                })

            } else {
                this.setState({
                    allMessages: []
                })

            }
        })

    }

    getMessageHistoryByUser() {

        console.log("///////", this.state.sennder.sennderID)
        if (this.state.sennder.sennderID !== "") {

            const url = 'http://localhost:8000/api/messageHistory/getHistoryBySender';
            const data = {
                "personOne": this.state.sennder.sennderID
            }

            axios.post(url, data).then((res) => {

                const users = res.data.data;
                if (res.data.status) {
                    let { systemPrevMessageUsers, systemPrevMessageUsersDuplicate } = this.state;
                    systemPrevMessageUsers = [];
                    systemPrevMessageUsersDuplicate = [];



                    for (let i = users.length - 1; i >= 0; i--) { // Iterate through the array from last to first
                        const obj = users[i];

                        let dataObj = {
                            name: obj.personTwoName === this.state.sennder.sennderName ? obj.personOneName : obj.personTwoName,
                            id: obj.personTwo === this.state.sennder.sennderID ? obj.personOne : obj.personTwo
                        }

                        if (systemPrevMessageUsersDuplicate.indexOf(dataObj.name) === -1) {
                            systemPrevMessageUsers.push(dataObj);
                            systemPrevMessageUsersDuplicate.push(dataObj.name);
                        }
                    }

                    this.setState({
                        systemPrevMessageUsers,
                        systemPrevMessageUsersDuplicate

                    }, () => {
                        console.log("11111sss", this.state.systemPrevMessageUsers)
                    });



                } else {
                    alert(res.data.message);
                }
            })


        } else {
            alert("loged user cant identifay please refresh the page");
        }
    }

    componentDidMount() {

        this.getloggedUser();





    }

    navigateToHome(e) {

        e.preventDefault();

        console.log("im hereeeee")
        this.props.history.push('/products');

    }

    dateConverter(e) {





        const current = new Date();
        var date = current.getDate();
        var month = current.getMonth();
        var year = current.getFullYear();
        var my2 = date + "/" + month + "/" + year



        var myDate = new Date(e);



        var date = myDate.getDate();
        var month = myDate.getMonth();
        var year = myDate.getFullYear();

        var hour = myDate.getHours();
        var minute = myDate.getMinutes();
        var second = myDate.getSeconds();
        var ap = "AM";
        if (hour > 11) { ap = "PM"; }
        if (hour > 12) { hour = hour - 12; }
        if (hour == 0) { hour = 12; }
        if (hour < 10) { hour = "0" + hour; }
        if (minute < 10) { minute = "0" + minute; }
        if (second < 10) { second = "0" + second; }
        var timeString = (hour + ':' + minute + " " + ap);
        var yearStrinig = date + "/" + month + "/" + year



        var dilDate = ((yearStrinig == my2 ? "" : yearStrinig) + " " + " " + timeString)
        return dilDate;
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
                            <StaffSidebar />
                        </div>
                        <div className='app-content'>

                            <Row>


                                <div className={AccountCSS.container}>
                                    <div style={{ "backgroundColor": "#649da9", "width": "500px", "marginLeft": "-12px", "height": "45px", "marginBottom": "20px" }}>

                                        {/*card for buttons*/}
                                        <Row>
                                            <Col xs={6}>
                                                <div style={{ "marginTop": "10px", "marginLeft": "10px" }}><span style={{ "fontWeight": "700" }}>{this.state.sennder.sennderName}</span> </div>
                                            </Col>
                                            <Col xs={2}>
                                            </Col>
                                            <Col >
                                                <Button style={{ "backgroundColor": "#649da9", "float": "right", "height": "30px", "marginTop": "4px", "fontSize": "larger" }} className="btn " variant="addDel" type="submit" onClick={this.navigatePrevMessage}>
                                                    <BsPeopleFill style={{ "alignItems": "center", "backgroundColor": "#649da9", "height": "34spx", "marginTop": "-5px", "fontSize": "larger" }} />
                                                </Button>
                                            </Col>
                                            <Col >
                                                <Button style={{ "backgroundColor": "#649da9", "height": "30px", "marginTop": "4px", "fontSize": "larger" }} className="btn " variant="addDel" type="submit" onClick={this.navigateDoctorUsers}>
                                                    <BsFillChatLeftTextFill style={{ "alignItems": "center", "backgroundColor": "#649da9", "height": "22px", "marginTop": "-5px", "fontSize": "larger" }} />
                                                </Button>
                                            </Col>
                                        </Row>





                                    </div>

                                    {/*card for all users*/}
                                    {this.state.selectedChatType === 'newChat' &&
                                        <>
                                            <Row>
                                                <Col xs={6}>
                                                    <span>{this.state.userType} New Chat</span>
                                                </Col>
                                                <Col xs={2}>
                                                </Col>
                                                <Col >
                                                    <Button style={{ "backgroundColor": "#649da9", "float": "right", "height": "30px", "marginTop": "2px", "fontSize": "larger" }} className="btn " variant="addDel" type="submit" onClick={this.navigateAdminUsers}>
                                                        <MdAdminPanelSettings style={{ "alignItems": "center", "backgroundColor": "#649da9", "height": "34spx", "marginTop": "-20px", "fontSize": "larger" }} />
                                                    </Button>
                                                </Col>
                                                <Col >
                                                    <Button style={{ "backgroundColor": "#649da9", "height": "30px", "fontSize": "larger", "marginTop": "2px" }} className="btn " variant="addDel" type="submit" onClick={this.navigateDoctorUsers}>
                                                        <RiStethoscopeFill style={{ "alignItems": "center", "backgroundColor": "#649da9", "height": "22px", "marginTop": "-18px", "fontSize": "larger" }} />
                                                    </Button>
                                                </Col>
                                                  {/* handle serch area */}
                                                  <Col>
                                                    <div>
                                                        <input
                                                            className="form-control"
                                                            type="search"
                                                            placeholder="Search"
                                                            name="searchQuery"
                                                            onChange={this.handleSearchArea}
                                                            style={{
                                                                

                                                                marginRight: "18px",

                                                                borderColor: "rgba(6, 21, 117,0.5)",
                                                                marginTop:"15px"
                                                               
                                                            }}
                                                        ></input>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div style={{
                                                "backgroundColor": "#f7f7f7",
                                                "width": "470px",
                                                "height": "760px",   // Set the fixed height
                                                "overflowY": "auto", // Set overflow-y to scroll
                                                "marginTop": "10px",
                                                "scrollbarWidth": "thin",
                                                "scrollbarColor": "#ccc #f7f7f7" // Set the scrollbar color
                                            }}>
                                                {this.state.systemAvbUsers.map(user =>
                                                    <div
                                                        style={{
                                                            "backgroundColor": "#f7f7f7",
                                                            "width": "470px",
                                                            "height": "50px",
                                                            "borderBottom": "inset",
                                                            "containerType": "size",
                                                            "display": "flex",
                                                            "alignItems": "center",
                                                            "cursor": "pointer"
                                                        }}
                                                        key={user.id} // Add key prop to avoid warning
                                                        onClick={() => this.selectedReciver(user)}
                                                    >
                                                        <div style={{ "marginLeft": "10px" }}><BsPersonCircle /></div>
                                                        <div style={{ "marginLeft": "15px", "fontWeight": "600" }}>{user.name}</div>
                                                    </div>
                                                )}
                                            </div>

                                        </>
                                    }


                                    {/* card for new previos chat */}
                                    {this.state.selectedChatType === 'prevChat' &&
                                        <>
                                            <Row>
                                                <Col xs={6}>
                                                    <span> previous Chat</span>
                                                </Col>
                                                <Col xs={2}>
                                                </Col>
                                                <Col >
                                                    {/* <Button style={{ "backgroundColor": "#649da9", "float": "right", "height": "30px", "marginTop": "2px", "fontSize": "larger" }} className="btn " variant="addDel" type="submit" onClick={this.navigateAdminUsers}>
                                                        <BsPeopleFill style={{ "alignItems": "center", "backgroundColor": "#649da9", "height": "34spx", "marginTop": "-20px", "fontSize": "larger" }} />
                                                    </Button> */}
                                                </Col>
                                                <Col >
                                                    {/* <Button style={{ "backgroundColor": "#649da9", "height": "30px", "fontSize": "larger", "marginTop": "2px" }} className="btn " variant="addDel" type="submit" onClick={this.navigateDoctorUsers}>
                                                        <BsFillChatLeftTextFill style={{ "alignItems": "center", "backgroundColor": "#649da9", "height": "22px", "marginTop": "-18px", "fontSize": "larger" }} />
                                                    </Button> */}
                                                </Col>
                                            </Row>
                                            <div style={{
                                                "backgroundColor": "#f7f7f7",
                                                "width": "470px",
                                                "height": "760px",   // Set the fixed height
                                                "overflowY": "auto", // Set overflow-y to scroll
                                                "marginTop": "10px",
                                                "scrollbarWidth": "thin",
                                                "scrollbarColor": "#ccc #f7f7f7" // Set the scrollbar color
                                            }}>
                                                {this.state.systemPrevMessageUsers.map(user =>
                                                    <div
                                                        style={{
                                                            "backgroundColor": "#f7f7f7",
                                                            "width": "470px",
                                                            "height": "50px",
                                                            "borderBottom": "inset",
                                                            "containerType": "size",
                                                            "display": "flex",
                                                            "alignItems": "center",
                                                            "cursor": "pointer"
                                                        }}
                                                        key={user.id} // Add key prop to avoid warning
                                                        onClick={() => this.selectedReciver(user)}
                                                    >
                                                        <div style={{ "marginLeft": "10px" }}><BsPersonCircle /></div>
                                                        <div style={{ "marginLeft": "15px", "fontWeight": "600" }}>{user.name}</div>
                                                    </div>
                                                )}
                                            </div>

                                        </>
                                    }


                                </div>




                                <div className={AccountCSS.containertwo}>

                                    <div style={{ "backgroundColor": "#649da9", "width": "1160px", "marginLeft": "-12px", "height": "45px" }}>

                                        <Row>
                                            <div style={{ "marginTop": '7px' }}>
                                                <Col>
                                                    {/* reciver name */}
                                                    {this.state.reciverSelected && <>
                                                        <span style={{ "marginLeft": "20px", "fontWeight": "500", "fontSize": "20px" }}><BsPersonCircle /></span><span style={{ "marginLeft": "20px", "fontWeight": "500" }}>{this.state.reciver.reciverName}</span>
                                                    </>}
                                                </Col>
                                            </div>

                                        </Row>

                                    </div>


                                    {/* message container */}
                                    <Modal show={this.state.editDioVisible} onHide={this.handleClose} centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title></Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Edit Message</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="name@example.com"
                                                        autoFocus
                                                        value={this.state.editedMessageObject.msg}
                                                        onChange={this.changeEditMessageHandler}
                                                    />
                                                </Form.Group>

                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={this.handleEditSave}>
                                                Save Changes
                                            </Button>
                                            <Button variant="primary" onClick={this.handleMessageDelete}>
                                                Delete
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>

                                    <div style={{ 'height': '600px', 'display': 'block', "backgroundColor": "rgb(255 255 255)", "marginTop": "50px" }} className="container " >
                                        <ScrollableFeed>
                                            {
                                                this.state.allMessages &&

                                                this.state.allMessages.map(muBobject => (


                                                    <><h5 style={{ "textAlign": "left", "width": "300px", "display": "inline-block", "overflow": "hidden", "wordBreak": "break-all", "marginLeft": "5px" }}>{muBobject.sennder == this.state.sennder.sennderID && <span
                                                        style={{ "backgroundColor": " #c7e0f4", "fontSize": "16px" }}><div style={{ "fontSize": "12px", "marginBottom": "5px" }}>{muBobject.sennder == this.state.sennder.sennderID && <BsFillPersonFill />}{" "}{muBobject.sennder == this.state.sennder.sennderID && this.dateConverter(muBobject.createdAt)}</div>
                                                        <span onClick={() => this.editMessage(muBobject)} style={{ "padding": "9px", "backgroundColor": "rgb(173 206 255 / 50%)", "borderRadius": "10px", "float": "left" }}>{muBobject.sennder == this.state.sennder.sennderID ? muBobject.msg : ""}
                                                        </span>
                                                    </span>}</h5> <div style={{ "fontSize": "small", "marginBottom": "12px", "marginTop": "-5px", "marginLeft": "5px", "marginRight": "10px" }}>{muBobject.sennder == this.state.sennder.sennderID && muBobject.seenStatus == 'true' ? <BsCheckAll /> : muBobject.sennder == this.state.sennder.sennderID && <BsCheckAll />}</div><h5
                                                        style={{ "textAlign": "right", "width": "310px", "position": "inline-block", "overflow": "hidden", "wordBreak": "break-all", "marginLeft": "auto", "marginRight": "10px" }}>{muBobject.sennder != this.state.sennder.sennderID && <span
                                                            style={{ "fontSize": "16px" }}><div style={{ "fontSize": "small", "marginBottom": "5px", "marginRight": "10px" }}>{this.state.reciver.reciverID.startsWith('DO') ? <RiStethoscopeFill/> : <MdAdminPanelSettings/>}{"  "}&nbsp;{" "}{muBobject.sennder != this.state.sennder.sennderID && this.dateConverter(muBobject.createdAt)}</div><span style={{ "padding": "9px", "backgroundColor": "rgb(240 240 241)", "borderRadius": "10px", "float": "right" }} >{muBobject.sennder != this.state.sennder.sennderID && muBobject.msg}</span></span>}</h5>


                                                    </>


                                                ))


                                            }



                                            {this.state.allMessages.length == 0 && !this.state.reciver.reciverID && <div style={{ "width": "500px", "backgroundColor": "rgb(210 220 228 / 11%)", "padding": "10px", "fontWeight": "700", "WebkitTextStroke": "thin", "marginBottom": "5px", "marginLeft": "200px", "marginTop": "190px", "fontSize": "50", "color": "#b9cad6" }}><span style={{ "marginLeft": "40PX" }}><BsChatDots />   NO MESSAGES</span></div>}

                                        </ScrollableFeed>
                                    </div>





                                    {this.state.reciver.reciverID && <>
                                        {/* text area for typing */}
                                        <div style={{ "minHeight": "10vh", "marginLeft": "-12px", "width": "1150px", "backgroundColor": "rgb(255 255 255)" }}  >
                                            <Form style={{"width":"1150px","maxWidth":"1150px","marginTop":"5px","marginLeft":"5px","padding":"1px","border":"0px"}} >

                                                <Form.Group controlId="exampleForm.ControlTextarea1" >
                                                    <Form.Label></Form.Label>
                                                    <Form.Control onChange={this.changeMessageHandler} value={this.state.message} as="textarea" rows={2} style={{ "marginTop": "14px" }} />
                                                </Form.Group>

                                                <Button style={{ "marginBottom": "10px", "backgroundColor": "#e8e5e5","width":"70px" }} className="btn " variant="addDel" type="submit" onClick={this.addMessage}>
                                                    <IoMdSend style={{ "siz": "10px" }} />
                                                </Button>
                                            </Form>
                                        </div>
                                    </>}

                                </div>

                            </Row>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StaffChat;

