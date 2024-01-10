const express = require("express");
// const keys = require("../config/keys");
const Tn_PayModel = require("../models/Tn_PayModel");
require("dotenv").config();

const router = express.Router();

router.post("/addPay", (req, res) =>{

    const fullName = req.body.fullName;
    const position = req.body.position;
    const year = req.body.year;
    const month = req.body.month;
    const basicSalary = req.body.basicSalary;
    const houseRendAllowance = req.body.houseRendAllowance;
    const childrenEduAllowance = req.body.childrenEduAllowance;
    const conveyanceAllowance = req.body.conveyanceAllowance; 
    const otherAllowances = req.body.otherAllowances;
    const epfContribution = req.body.epfContribution;
    const incomeTax = req.body.incomeTax;
    const netSalary = req.body.netSalary

    const newSalary = new Tn_PayModel({
        fullName,
        position,
        year,
        month,
        basicSalary,
        houseRendAllowance,
        childrenEduAllowance,
        conveyanceAllowance,
        otherAllowances,
        epfContribution,
        incomeTax,
        netSalary

    })

    newSalary.save().then(()=>{
        res.json("Payment created succesfully")
    }).catch((err)=>{
        console.log(err);
        res.json("Unsuccessfully")
    })
})




  router.route("/getsalaries").get((req,res)=>{

    Tn_PayModel.find().then((salaries)=>{
        res.json(salaries)
    }).catch((err)=>{
        console.log(err)
    })
})

// router.route("/getpay/:id").get(async(req,res)=>{
//     let paymentId = req.params.id;
//     const payment = await Tn_PayModel.findById(paymentId)
//     .then((salary)=> {
//         res.json(salary)
//     }).catch((err) => {
//         console.log(err.message);
//         res.status(500).send({status:"Error with getting the salary", error: err.message});
//     })
// })

router.route("/getpay/:id").get((req, res)=>{
    let paymentId = req.params.id;
    Tn_PayModel.findById(paymentId).then((payment)=>{
       res.json(payment)
    }).catch((err)=>{
        console.log("Cannot get Payment");
    });
  });

router.route("/deletepayment/:id").delete(async(req,res) =>{
    let paymentId = req.params.id;

    await Tn_PayModel.findByIdAndDelete(paymentId)
    .then(()=>{
        res.status(200).send({status: "Salary deleted" });
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error: err.message});
    })
})


router.route("/updatepayment/:id").put(async(req,res)=>{
    let paymentId = req.params.id;
    const {fullName,position,year,month,basicSalary,
	houseRendAllowance,childrenEduAllowance,conveyanceAllowance,
	otherAllowances,epfContribution,incomeTax} = req.body; 

    const updateSalary ={
        fullName,
		position,
		year,
		month,
		basicSalary,
		houseRendAllowance,
		childrenEduAllowance,
		conveyanceAllowance,
		otherAllowances,
		epfContribution,
		incomeTax
    }

    const update = await Tn_PayModel.findByIdAndUpdate(paymentId, updateSalary)
    .then((salary)=>{

        res.json(salary)

    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error: err.message});
    })   
})

  //Get all users details router




module.exports = router;