import 
{FETCH_USER_REQUEST,
FETCH_USER_SUCCESS,
FETCH_USER_FAILURE}
 from './userActionTypes'

const initialState = {
    loading: false,
    user:[],
    error:''
    }
 
    const fetchUserReducer = (state = initialState, action) => {
    switch(action.type){
    case FETCH_USER_REQUEST:
    return{
    ...state,
    loading:true
    }
    case FETCH_USER_SUCCESS:
        // console.log(action)
    return{
    ...state,
    loading:false,
    user:action.payload,
    error:''
    }
    case FETCH_USER_FAILURE:
    return{
    ...state,
    loading:false,
    user:[],
    error:action.payload
    
    }
    default:
        return state;
    }
   
    }
    export default fetchUserReducer