import axios from 'axios'

import {
FETCH_USER_REQUEST,
FETCH_USER_SUCCESS,
FETCH_USER_FAILURE
}
    from './userActionTypes'

export const fetchUserRequest = () => ({
            type: FETCH_USER_REQUEST
  })
export const fetchUserSuccess = user => ({
        type: FETCH_USER_SUCCESS,
        payload: user
} )
export const fetchUserFailure = error =>( {
         type: FETCH_USER_FAILURE,
        payload: error
})

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.post('https://soal-capstone-project.herokuapp.com/showCommunity', {
            "userID": "61ec7ae59877e6be51d1cf63"
        })
            .then(res => {
                const user = res.data
                console.log(user)
                dispatch(fetchUserSuccess(user))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUserFailure(errorMsg))
            })
    }
} 