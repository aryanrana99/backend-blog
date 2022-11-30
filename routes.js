const express = require('express');
const router = express.Router();
const Model = require('../model/model');


router.post('/createPost',async (req,res)=>{
    const newPost = newModel({
        title : req.body.title,
        author : req.body.author,
        content : req.body.content,
    })
    try{
    const result = await newPost.save();
    res.status(200).json(result);

    }catch(error){
    res.status(400).json({message : error.message})
    }
});

//GetMethod

router.get('/getAllPost',async (req,res)=>{
    try {
        const result = await newPost.save();
        res.status(200).json(result);

    } catch (error) 
    {
        res.status(500).json({ message : error.message})
    }
})

router.get('/getPost/:id', (req,res)=>{
    const id = req.params.id
    res.send(`Post post with id ${id}`)
})

//Patch
router.patch('/editPost/:id', (req,res)=>{
    const id = req.params.id
    res.send(`Edit post with id ${id}`)
})

//Delete
router.delete('/deletePost/:id', (req,res)=>{
    const id = req.params.id
    res.send(`Deleted post with id ${id}`)
})


module.exports = router;