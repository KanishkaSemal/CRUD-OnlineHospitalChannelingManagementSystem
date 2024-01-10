
const express = require("express");
const cors = require("cors");
const router = express.Router();
const app = express();
const users = require("../models/Nv_Admin");



// get userdata
router.get("/GetAdmin", async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(201).json(userdata)
    console.log(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
})

// get individual user
router.get("/GetAdmin/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const userindividual = await users.findById({ _id: id });
    console.log(userindividual);
    res.status(201).json(userindividual)

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

//signup

router.post("/signup",async(req,res)=>{
  const{fname,lname,email,mobile,nic,password,confirmPassword,compId}=req.body
  const data={
    fname:fname,
    lname:lname,
    email:email,
    mobile:mobile,
    nic:nic,
    password:password,
    confirmPassword:confirmPassword,
    compId:compId

  }

  try {
    const check =await users.findOne({email:email})

    if(check){
      res.json("exist")
    }
    //if email is new
    else{
      res.json("notexist")
      await users.insertMany([data])
    }

  } catch(e) {
    res.json("notexist")
    
  }
})

module.exports = router;









