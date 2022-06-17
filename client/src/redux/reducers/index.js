import { combineReducers } from 'redux';
import posts from './posts.js';
import modal from './modal.js';
import actions_list from './actions_list.js';

export default combineReducers({    
    posts,
    modal,
    actions_list
})