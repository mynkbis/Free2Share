import axios from 'axios'

import {
FETCH_COMMUNITY_REQUEST,
FETCH_COMMUNITY_SUCCESS,
FETCH_COMMUNITY_FAILURE
}
    from './communityActionTypes'

export const fetchCommunityRequest = () => ({
            type: FETCH_COMMUNITY_REQUEST
  })
export const fetchCommunitySuccess = communities => ({
        type: FETCH_COMMUNITY_SUCCESS,
        payload: communities
} )
export const fetchCommunityFailure = error =>( {
         type: FETCH_COMMUNITY_FAILURE,
        payload: error
})

export const fetchCommunities = () => {
    return (dispatch) => {
        dispatch(fetchCommunityRequest)
        axios.post('https://soal-capstone-project.herokuapp.com/showCommunity', {
            "userID": "61ec7ae59877e6be51d1cf63"
        })
            .then(res => {
                const communities = res.data
                console.log(communities)
                dispatch(fetchCommunitySuccess(communities))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchCommunityFailure(errorMsg))
            })
    }
} 