import React from 'react';

const getUser = () => {
const userStr=sessionStorage.getItem('user') // will try to read the info from user session
if(userStr)return JSON.parse(userStr);
else return null;
};

const getToken=()=>{
    return sessionStorage.getItem('token') || null;
}

const UserSession=(token, user)=>{
sessionStorage.setItem('token', token)
sessionStorage.setItem('user', JSON.stringify(user));
}

const removeUserSession=()=>{
sessionStorage.removeItem("token");
sessionStorage.removeItem("user");
}

export default { getUser, getToken, UserSession, removeUserSession }