import { PostModel } from '../models/PostModel.js';

export const getPostsPage = async (req, res, next) => {
     try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error });    
    }
}

export const createPost = async (req, res, next) => {
    try {
        const requestedPost = req.body;
        const newPost = new PostModel(requestedPost);
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(500).json({ error: error });    
    }

}

export const updatePost = async (req, res, next) => {
    try {
        const updatedPost = req.body;
        const post = await PostModel.findByIdAndUpdate(
            { _id: updatedPost._id },
            updatedPost,
            { new: true }
        );

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error });    
    }
}

export const deletePost = async (req, res, next) => {
    try {
        const id = req.params.id;
        await PostModel.deleteOne({ _id: id });
        res.status(200).json(id);
    } catch (error) {
        res.status(500).json(`Can't delete post with id: ${req.params.id}`);   
    }
}