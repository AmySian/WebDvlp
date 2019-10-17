const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//GET BACK ALL THE THE POST
router.get("/", async function(req, res){
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
    console.log("onflick")
});

router.get("/specific", function(req, res){
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send('We are on Specific');
});


//SUBMIT A POST
router.post('/', async function(req, res){
    //console.log(req.body);
    const post = new Post({
        user: req.body.user,
        password: req.body.password
    });
    try{
   const savedPost = await post.save();
   res.json(savedPost);
    }catch(err){
        res.json({message: error});
    };
});

//SPECIFIC POST
router.get('/:postId', async (req,res)=> {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//Delete Post
router.delete('/:postId', async (req,res) => {
    try{
        const revomedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch (err) {
        res.json({message:err});
    }
})

//Update a Post
/*router.patch('/:postId', async (req,res) => {
    try{
    const updatedPost = await Post.updateOne({_id: req.params.postId}, 
        { $set: {user: req.body.user, password: req.body.password}})
        res.json(updateOne);

    }catch (err) {
        res.json({ message: err});
    }
})*/

module.exports = router;