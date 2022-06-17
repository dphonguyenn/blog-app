import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as apis from '../../apis';

function* fetchPostsSaga(action) {
    try {
        const posts = yield call(apis.fetchPosts);
        console.log('[posts]', posts);
        yield put(actions.getPosts.getPostsSuccess(posts.data));
    } catch (error) {
        console.log('error:', error);
        yield put(actions.getPosts.getPostsFailure(error))
    }
}

function* createPostSaga(action) {
    try {
        const post = yield call(apis.createPost, action.payload);
        console.log('[post]', post.data);
        yield put(actions.createPost.createPostSuccess(post.data));
    } catch (error) {
        console.log('error:', error);
        yield put(actions.createPost.createPostFailure(error));
    }
}

function* updatePostSaga(action) {
    try {
        const updatePost = yield call(apis.updatePost, action.payload);
        console.log('[post]', updatePost.data);
        yield put(actions.updatePost.updatePostSuccess(updatePost.data));
    } catch (error) {
        console.log('error:', error);
        yield put(actions.updatePost.updatePostFailure(error));                                  
    }
}

function* deletePostSaga(action) {
    try {
        yield call(apis.deletePost, action.payload);
        yield put(actions.deletePost.deletePostSuccess(action.payload.id));
    } catch (error) {
        console.log('error:', error);
        yield put(actions.deletePost.deletePostFailure(error));
    }    
}

function* mySaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
    yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga);
}

export default mySaga;