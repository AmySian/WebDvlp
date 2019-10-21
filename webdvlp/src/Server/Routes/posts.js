const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
const Postproduct = require('../models/Products')

//GET BACK ALL THE THE POST

//USER
router.get("/users", async function(req, res){
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
});

//PRODUCTS
router.get("/products", async function(req, res){
    try{
        const posts = await Postproduct.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
});


//SUBMIT A POST

//USER
router.post('/users', async function(req, res){
    const post = new Post({
        user: req.body.user,
        address: req.body.address,
        password: req.body.password,
        product_list: req.body.product_list
    });
    try{
   const savedPost = await post.save();
   res.json(savedPost);
    }catch(err){
        res.json({message: error});
    };
});

//PRODUCT
router.post('/products', async function(req, res){
    const post = new Postproduct({
        name: req.body.name,
        price: req.body.price,
        promotion: req.body.promotion
    });
    try{
   const savedPost = await post.save();
   res.json(savedPost);
    }catch(err){
        res.json({message: error});
    };
});

//GET SPECIFIC USER POST OR PRODUCT

router.get('/:postId', async (req,res)=> {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//DELETE SPECIFIC USER POST OR PRODUCT
router.delete('/:postId', async (req,res) => {
    try{
        const revomedPost = await Post.deleteOne({_id: req.params.postId}, function (err) {});
        res.json(removedPost);
    } catch (err) {
        res.json({message:err});
    }
})

//UPDATE SPECIFIC USER POST OR PRODUCT
router.patch('/:postId', async (req,res) => {
    try{
    const updatedPost = await Post.updateOne({_id: req.params.postId}, 
        { $set: {user: req.body.user, password: req.body.password}})
        res.json(updateOne);

    }catch (err) {
        res.json({ message: err});
    }
})


/*router.get("/specific", function(req, res){
    res.setHeader('Content-Type', 'text/plain')
});*/

module.exports = router;