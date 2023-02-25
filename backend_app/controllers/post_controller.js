const cloudinary = require('cloudinary').v2;
const Post = require('../models/post_model')


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


exports.getAllPost = async (req, res) => {

    try{
        const posts = await Post.find({})
        res.status(200).json({
            success: true,
            data: posts
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Fetching posts failed, please try again",
        })
    }
}

exports.createPost = async (req, res) => {
    try{
        const {name, prompt, photo} = req.body;

        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url
        })

        res.status(200).json({
            success: true,
            data: newPost
        })
    }catch(err){
        res.json(500).json({
            success: false,
            message: "Unable to create a post, pplease try again"
        })
    }
}