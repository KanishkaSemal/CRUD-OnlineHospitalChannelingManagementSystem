const express = require("express");
const posts = require("../models/Oshi_Code");

const router = express.Router();

//save add

router.post("/CodesRouter/save", (req, res) => {
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

router.route("/CodesRouter").get((req,res)=>{

  posts.find().then((salaries)=>{
      res.json(salaries)
  }).catch((err)=>{
      console.log(err)
  })
})

//update post
router.put('/CodesRouter/update/:id',(req,res)=>{
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
 
 router.delete("/CodesRouter/delete/:id", (req, res) => {
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

