import axios from 'axios';

const initialState ={
    user: {}
}

const GET_USER = 'GET_USER'
const GET_POSTS = 'GET_POSTS'


export function getUser(){
    let userData = axios.get('/auth/me').then( res => {
        return res.data;
    })
    return {
        type:GET_USER,
        payload: userData
    }
}

export function getPosts(){
    let postData = axios.get('/api/posts').then(res => {
        return res.data;
    })
    return {
        type:GET_POSTS,
        payload: postData
    }
}

export default function reducer(state= initialState, action){
    switch(action.type){
        case GET_USER + '_FULFILLED':
        return Object.assign({}, state, {user: action.payload})
      

        default:
    return state;
    }
}