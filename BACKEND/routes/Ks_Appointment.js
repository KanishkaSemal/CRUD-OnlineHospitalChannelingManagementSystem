const express = require("express");
const posts = require("../models/Ks_Appointment");

const router = express.Router();

//save add

router.post("/Appointment/save", (req, res) => {
  const newPost = new posts(req.body);
  
   console.log(newPost);
   
  newPost.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Appointment saved successfully",
    });
  });
});

// get Appointment

router.get('/Appointment',(req, res) => {
    posts.find().exec((err, posts) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
            success: true,
            existingPosts: posts  
    });
  });
});

//get a specific post

router.get("/appointment/:id", (req, res) => {
  let appointmentId = req.params.id;

  posts.findById(appointmentId, (err, post) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      post,
    });
  });
});

//update Appointment
router.put('/Appointment/update/:id',(req,res)=>{
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

 //Delete Appointment
 router.delete("/Appointment/delete/:id", (req, res) => {
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
