const express = require("express");
const mongoose = require("mongoose");

const bodyParser =require('body-parser');
const cors = require ("cors");


const app = express();
require("dotenv").config();

//githma import routes
const apiRoutes = require('./routes/router')
const postRoutes =require('./routes/Gi_inventory');

//Ks_import routes
const Appointment = require('./routes/Ks_Appointment');



//Nv_import routes
const Patient = require('./routes/Nv_patient');
const Doctor =require('./routes/Nv_doctor');
const Admin =require('./routes/Nv_admin');
const Staff= require('./routes/Nv_staff');


//Ni import routes
const Chat = require('./routes/router');

 
 
//Bu_import Routes
const Medical = require('./routes/Bu_Medical');

 
 
//Si_import routes
const Leave = require('./routes/Si_MinorStaff');
const Task = require('./routes/Si_Task');

//Tn_Payroll

const salaryRouter = require("./routes/payrol");
 

// app middleware
app.use(bodyParser.json());
app.use(cors());

//Nv_user middleware
app.use('/patient',Patient);
app.use('/doctor',Doctor);
app.use('/admin',Admin);
app.use('/staff',Staff);

//ni middlewaare
app.use(Chat);





const dotenv = require("dotenv");



require("dotenv").config();
require('./Database/dbConnection')



app.use(postRoutes);


app.use(express.json());
app.use('/api', apiRoutes)

//Ks_Appointment
app.use(Appointment)

//Bu_Medical
app.use(Medical);

//Si_Leave routte middleware
app.use(Leave)
app.use(Task)


//Tn_Payroll

app.use('/salaryRouter', salaryRouter);


const port = process.env.PORT || 8000; 
app.listen(port, () => {    console.log(`Admin backend service one started on port ${port}`)})








 



 
