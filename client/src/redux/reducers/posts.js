import { getPosts, getType, createPost, updatePost, deletePost } from "../actions/index.js";
import { INIT_STATE } from "../constants";

export default function postsReducer(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(getPosts.getPostsRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(getPosts.getPostsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case getType(getPosts.getPostsFailure):
            return {
                ...state,
                isLoading: false
            }
        case getType(createPost.createPostSuccess):
            return {
                ...state,
                data: [...state.data, action.payload ]
            }
        case getType(createPost.createPostFailure):
            return {
                ...state
            }
        
        case getType(updatePost.updatePostSuccess):
            return {
                ...state,
                data: state.data.map((post) =>
                    post._id === action.payload._id ? action.payload : post
                )
            }
        
        case getType(deletePost.deletePostSuccess):
            console.log(action.payload);
            return {
                ...state,
                data: state.data.filter(post => 
                    post._id !== action.payload
                )
            }
        case getType(deletePost.deletePostFailure):
            return {
                ...state,
            }
        default:
            return state;
    }
}