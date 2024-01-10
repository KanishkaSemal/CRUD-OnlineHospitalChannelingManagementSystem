const express = require("express");
const posts = require("../models/Si_StaffModel");

const router = express.Router();

//save add

router.post("/Leave/save", (req, res) => {
  let newPost = new posts(req.body);
    console.log("sssss", req.body);
  newPost.save((err) => {
    if (err) {
      return res.status(400).json({error: err});
    }
    return res.status(200).json({
      success: "Leave saved successfully",
    });
  });
});

// get Leave

router.get('/Leave',(req, res) => {
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

router.get('/Leave/:id', (req, res) => {
  let leaveId = req.params.id;

  posts.findById(leaveId, (err, post) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      post,
    });
  });
});

//update Leave
router.put('/Leave/update/:id',(req,res)=>{
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

 //Delete Leave
 router.delete("/Leave/delete/:id", (req, res) => {
    posts.findByIdAndDelete(req.params.id).exec((err, deletedleave) => {
      if (err) return res.status(400).json({
          message: "Delete Unsuccesful",
          err,
        });
      return res.json({
        message: "Delete Succesful",
        deletedleave,
      });
    });
  });

module.exports = router;

