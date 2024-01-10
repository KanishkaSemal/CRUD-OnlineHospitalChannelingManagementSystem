const express = require('express');
const task = require("../models/Si_TaskModel");

const router = express.Router();

//save tasks
router.post("/Task/save", (req, res) => {
    const newTask = new task(req.body);
  
    console.log(newTask);
  
    newTask.save((err) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Task saved Successfully",
      });
    });
  });

  //get task
  router.get('/Task',(req, res) => {
    task.find().exec((err, task) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
            success: true,
            dexistingtask: task, 
    });
  });
});

//get a specific task
router.get("/Task/:id", (req,res) => {
  let taskId = req.params.id;

  task.findById(taskId,(err,post) => {
    if(err){
      return res.status(400).json({success:false, err});
    }

    return res.status(200).json({
      success:true,
      post,
    });
  });
});

  //update task
  router.put("/Task/update/:id", (req, res) => {
    task.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (err, post) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: "Updated Succesfully",
        });
      }
    );
  });

  //delete task
  router.delete("/Task/delete/:id", (req, res) => {
    task.findByIdAndRemove(req.params.id).exec((err, deletedtask) => {
      if (err)
        return res.status(400).json({
          message: "Delete Unsuccesful",err
        });
      return res.json({
        message: "Delete Succesful",deletedtask
      });
    });
  });


  module.exports = router;