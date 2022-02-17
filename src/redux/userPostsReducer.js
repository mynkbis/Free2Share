import 
{FETCH_USERPOSTS_REQUEST,
FETCH_USERPOSTS_FAILURE}
 from './userPostsActionTypes'

const initialState = {
    loading: false,
    userPosts:[],
    error:''
    }
 
    const fetchUserPostsReducer = (state = initialState, action) => {
    switch(action.type){
    case FETCH_USERPOSTS_REQUEST:
    return{
    ...state,
    loading:true
    }
    case FETCH_USERPOSTS_SUCCESS:
        // console.log(action)
    return{
    ...state,
    loading:false,
    userPosts:action.payload,
    error:''
    }
    case FETCH_USERPOSTS_FAILURE:
    return{
    ...state,
    loading:false,
    userPosts:[],
    error:action.payload
    
    }
    default:
        return state;
    }
   
    }
    export default fetchUserPostsReducer