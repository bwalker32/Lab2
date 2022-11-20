const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Post = require("../models/Post");

// REPLACE WITH ''
const privateKey = '';

router.use(function (req, res, next) {
    if (req.header("Authorization")) {
        try {
            req.payload = jwt.verify(req.header("Authorization"), privateKey, {
                algorithms: ["RS256"],
            });
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    } else {
        return res.status(401).json({ error: "Unauthorized"});
    }
    next();
});

router.post("/", async function (req, res) {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.payload.id,
        dateCreated: req.body.dateCompleted,
        dateCreated: req.body.dateCreated,
        completed: req.body.completed,
    });
    return post
    .save()
    .then((savedPost) => {
        return res.status(201).json({
            _id: savedPost._id,
            title: savedPost.title,
            content: savedPost.content,
            author: savedPost.author,
            dateCreated: savedPost.dateCreated,
            dateCompleted: savedPost.dateCompleted,
            completed: savedPost.completed,
        });
    })
    .catch((error) => {
        return res.status(500).json({ error: error.message });
    });
});


// Get all
router.get("/", async function (req, res, next) {
    const posts = await Post.find().where("author").equals(req.payload.id).exec();
    return res.status(200).json({ posts: posts });
});

// Get individual
router.get("/:id", async function (req, res, next) {
    const post = await Post.findOne().where("_id").equals(req.params.id).exec();
    return res.status(200).json(post);
});

// Delete todo
router.delete("/:id", async function (req, res, next) {
    try {
        const post = await Post.findOne().where("_id").equals(req.params.id).exec();
        return res.status(200).json(post);      
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

// Complete todo
router.put("/:id", async function (req, res, next) {
    try {
        const post = await Post.findOneAndUpdate().where("_id").equals(req.params.id).exec();
        post.completed = !post.completed;
        post.save();
        return res.status(200).json(post);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
    
    
});

module.exports = router;