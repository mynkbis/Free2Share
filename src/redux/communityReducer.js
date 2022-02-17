import 
{FETCH_COMMUNITY_REQUEST,
FETCH_COMMUNITY_SUCCESS,
FETCH_COMMUNITY_FAILURE}
 from './communityActionTypes'

const initialState = {
    loading: false,
    communities:[],
    error:''
    }
 
    const fetchCommunityReducer = (state = initialState, action) => {
    switch(action.type){
    case FETCH_COMMUNITY_REQUEST:
    return{
    ...state,
    loading:true
    }
    case FETCH_COMMUNITY_SUCCESS:
        // console.log(action)
    return{
    ...state,
    loading:false,
    communities:action.payload,
    error:''
    }
    case FETCH_COMMUNITY_FAILURE:
    return{
    ...state,
    loading:false,
    communities:[],
    error:action.payload
    
    }
    default:
        return state;
    }
   
    }
    export default fetchCommunityReducer