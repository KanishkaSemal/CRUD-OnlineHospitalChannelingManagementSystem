const express = require("express");
const posts = require("../models/Oshi_Billing");

const router = express.Router();

//save add

router.post("/BillingRouter/save", (req, res) => {
  let newPost = new posts(req.body);

  newPost.save((err) => {
    if (err) {
      return res.status(400).json({error: err});
    }
    return res.status(200).json({
      success: "saved successfully",
    });
  });
});

// get post

router.route("/BillingRouter/getbill/:id").get((req, res)=>{
  let paymentId = req.params.id;
  posts.findById(paymentId).then((payment)=>{
     res.json(payment)
  }).catch((err)=>{
      console.log("Cannot get Payment");
  });
});


router.route("/BillingRouter").get((req,res)=>{

  posts.find().then((salaries)=>{
      res.json(salaries)
  }).catch((err)=>{
      console.log(err)
  })
})  


//update post
router.put('/BillingRouter/update/:id',(req,res)=>{
    posts.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        (err, post) => {
          if (err) {
            return res.status(400).json({
              error: err
            });
          }
          return res.status(200).json({
            success: "Updated Succesfully",
          });
        }
      );
 });

 //Delete post
 
 router.delete("/BillingRouter/delete/:id", (req, res) => {
    posts.findByIdAndDelete(req.params.id).exec((err, deletedappointment) => {
      if (err) return res.status(400).json({
          message: "Delete Unsuccesful",
          err,
        });
      return res.json({
        message: "Delete Succesful",
        deletedappointment,
      });
    });
  });
module.exports = router;

