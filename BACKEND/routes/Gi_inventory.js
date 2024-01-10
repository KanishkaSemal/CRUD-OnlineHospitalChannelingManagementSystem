const express = require("express");
const posts = require("../models/Gi_inventoryModel");

const router = express.Router();

//save add

router.post("/product/save", (req, res) => {
  const newPost = new posts(req.body);

  console.log(newPost);

  newPost.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "saved Successfully",
    });
  });
});

//get posts

router.get("/product", (req, res) => {
  posts.find().exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPosts: posts,
    });
  });
});

//get a specific post

router.get("/product/:id", (req, res) => {
  let productId = req.params.id;

  posts.findById(productId, (err, post) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({
      success: true,
      post,
    });
  });
});

//update

router.put("/product/update/:id", (req, res) => {
  posts.findByIdAndUpdate(
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

//delete
router.delete("/product/delete/:id", (req, res) => {
  posts.findByIdAndDelete(req.params.id).exec((err, deletedproduct) => {
    if (err)
      return res.status(400).json({
        message: "Delete Unsuccesful",
        err,
      });
    return res.json({
      message: "Delete Succesful",
      deletedproduct,
    });
  });
});

module.exports = router;
