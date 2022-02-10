import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import H5 from '@material-tailwind/react/Heading5';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/team-2-800x800.jpg';
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import IconButton from '@mui/material/IconButton';
import PostCard from 'components/landing/PostCard'
import PhotoGallery from 'components/landing/PhotoGallery'
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useState, useEffect} from 'react'
import axios from 'axios';
import CommunityListModal from './CommunityListModal';
import FadeLoader from "react-spinners/FadeLoader";
import { css } from '@emotion/react';
import PostSectionCard from '../../components/PostSectionCard'
// import { fetchCommunities } from '../../redux/community/actions/communityActions';
import Pagination from '../../components/Pagination'
import CreateCommunityForm from 'components/Community/CreateCommunityForm';
import { useHistory } from 'react-router-dom'; 
import {connect, useDispatch} from 'react-redux';
import { fetchCommunityFailure, fetchCommunitySuccess } from '../../redux/communityAction'
import GetDate  from 'components/GetDate';
 import UserPostSection from '../UserPostSection'

const InputFile = styled('input')({
    display: 'none',
});

function UserDashboard() {
    let history = useHistory();
    // const dispatch = useDispatch();
    const [communityList, setCommunityList] = useState([])
    const [userDetails, setUserDetails] = useState({})

//getting the userid from the localstorage
let userId = ((localStorage.getItem("userId")))
let AccessToken = ((localStorage.getItem("AccessToken")))
console.log(userId)
const dispatch = useDispatch()

    useEffect(() => axios.post('https://soal-capstone-project.herokuapp.com/showCommunity', {
        "userID": userId,
        "AccessToken": AccessToken
    })
        .then(res => {setCommunityList(communityList => [...communityList, res])
        console.log(res.data)
    dispatch(fetchCommunitySuccess(res.data))
        })
        .catch(function (error) {
            console.log(error);
            dispatch(fetchCommunityFailure(error))
        })
        , [])
     console.log(communityList);  
// still to add provider



    // fetching the user details from user table
    useEffect(() => axios.post('https://soal-capstone-project.herokuapp.com/getUserDetails', {
        "userID" : userId
    })
    .then(res => {setUserDetails(res.data) 
        console.log(userDetails);})  
    .catch(function (error) {
        console.log(error.toJSON());
      })
    ,[]) 
        console.log(userDetails);   


    // //fetching Posts from Post Table
    // useEffect(() => axios.post('https://soal-capstone-project.herokuapp.com/showPostByUser', {
    //     // "userID": userId
    //     "userID" : "61ec7ae59877e6be51d1cf63"
    // })
    //     .then(res => {
    //         setPostDetails(postDetails => [...postDetails, res.data])
          
    //     })
    //     .catch(function (error) {
    //         console.log(error.toJSON());
    //     })
    //     , [])
    //     console.log(postDetails[0]);
      
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  
    return (
        <>

            <section className="relative py-16 bg-gray-100">
                <div className="container max-w-7xl px-4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">


                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                                    <Button color="lightBlue" ripple="light" onClick ={() => {history.push("/createCommunity")}}>
                                        Create New Community
                                    </Button>

                                    &nbsp;&nbsp;&nbsp;
                                    {/* <Button color="lightBlue" ripple="light"> */}
                                    <CommunityListModal list={communityList[0]?.data} />
                                    {/* // </Button> */}
                                    &nbsp;&nbsp;&nbsp;
                                    <Button color="lightBlue" ripple="light">
                                        Edit Profile
                                    </Button>
                                </div>
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <div className="w-40 -mt-20">
                                            <Image
                                                style={{
                                                    borderRadius: "50%",
                                                    width: '300px',
                                                    height: '300px',
                                                    objectFit: 'cover'
                                                }}
                                                src={ProfilePicture}
                                                // {userDetails.?data[0]?.user_image? src={userDetails.data[0].user_image.url}: 

                                            //  src={userDetails? userDetails.data[0].user_image.url: {ProfilePicture}}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">

                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            {communityList[0] ? communityList[0].data.length : 0}
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Communities
                                        </span>
                                    </div>

                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            10
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Photos
                                        </span>
                                    </div>

                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            0
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Notifications
                                        </span>
                                    </div>

                                    <div className="lg:mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            8
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Posts
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center my-8">
                                <H3 color="gray">{userDetails?.name}</H3>
                                {/* <H3 color="gray">{communityList.data[0]}</H3> */}
                                <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                    <Icon name="place" size="xl" />
                                    -- Location --
                                    {userDetails?.data?.address?.city} 
                                    {/* check this after user address is updates */}
                                </div>
                                <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                    <Icon name="work" size="xl" />
                                    Member Since - {GetDate( userDetails?.createdAt)}
                                </div>

                            </div>

                            <div className="mb-10 py-2 border-t border-gray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                        <div className="text-center my-8">

                                            {/* //The Posts Secion starts here */}
                                            <H5 color="gray">Posted by User</H5>
                                         </div>
                                         </div>
                                </div></div>

                        <UserPostSection />

                            {/* PhotoGallery Code starts here */}
                            <div className="text-center my-8">
                                <H5 color="gray">Uploaded by User</H5>
                                <PhotoGallery />

                            </div>

                        </div></div>

                </div>

            </section >

        </>
    )  }
    export default UserDashboard

                        