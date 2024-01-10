const express = require("express");
const cors =require("cors");
const router = express.Router();
const app = express();
const users = require("../models/Nv_patient");
const bcrypt = require('bcryptjs');

// register user
router.post("/AddPatient",async(req,res)=>{
    let newData = new users(req.body);
  const data = req.body
  console.log("data",data)
  try {
    newData.save((err) => {

      if (err) {
        return res.status(400).json({
          message: err
        });
      }

      return res.status(200).json({
        status: '2100',
        message: "data added succsesfull",
        name: "sadunika"

      });

    });

  } catch (err) {
    return res.status(400).json({
      messages: err
    });
 }
});

// get userdata
router.get("/GetPatient",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
    }
})

// get individual user
router.get("/GetPatient/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;
        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)
    } catch (error) {
        res.status(422).json(error);
    }
})


// update user data
router.patch("/UpdatePatient/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateduser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });
        console.log(updateduser);
        res.status(201).json(updateduser);
    } catch (error) {
        res.status(422).json(error);
    }
})


// delete user
router.delete("/DeletePatient/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const deletuser = await users.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);
    } catch (error) {
        res.status(422).json(error);
    }
})


//login

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await users.findOne({ email: email });

    if (user && user.password === password) {
      res.status(200).json({ message: "Login successful",data:user });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal server error" });
  }
});


   



module.exports = router;









