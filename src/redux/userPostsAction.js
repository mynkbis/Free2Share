import axios from 'axios'

import {
FETCH_USERPOSTS_REQUEST,
FETCH_USERPOSTS_SUCCESS,
FETCH_USERPOSTS_FAILURE
}
    from './userPostsActionTypes'

export const fetchUserPostsRequest = () => ({
            type: FETCH_USERPOSTS_REQUEST
  })
export const fetchUserPostsSuccess = userPosts => ({
        type: FETCH_USERPOSTS_SUCCESS,
        payload: userPosts
} )
export const fetchUserPostsFailure = error =>( {
         type: FETCH_USERPOSTS_FAILURE,
        payload: error
})

