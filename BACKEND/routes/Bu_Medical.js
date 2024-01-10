const express = require("express");
const medical = require("../models/Bu_MedicalModel");

const router = express.Router();

//save medical

router.post("/medical/save", (req, res) => {
  const newMedical = new medical(req.body);

  console.log(newMedical);

  newMedical.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Medical saved Successfully",
    });
  });
});

//get medical

router.get("/medical", (req, res) => {
    medical.find().exec((err, medical) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: true,
        existingmedical: medical,
      });
    });
  });

  //get a specific post

router.get("/medical/:id", (req, res) => {
  let patientID = req.params.id;

 medical.findById(patientID, (err, post) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      post,
    });
  });
});

  //update medical

router.put("/medical/update/:id", (req, res) => {
    medical.findByIdAndUpdate(
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

  //delete medical

router.delete("/medical/delete/:id", (req, res) => {
    medical.findByIdAndDelete(req.params.id).exec((err, deletedmedical) => {
      if (err)
        return res.status(400).json({
          message: "Delete Unsuccesful",err
        });
      return res.json({
        message: "Delete Succesful",deletedmedical
      });
    });
  });

module.exports = router;