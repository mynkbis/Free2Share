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
import { useState, useEffect, useDispatch } from 'react'
import axios from 'axios';
import CommunityListModal from './CommunityListModal';
import FadeLoader from "react-spinners/FadeLoader";
import { css } from '@emotion/react';
import { connect } from 'react-redux';
import PostSectionCard from '../../components/PostSectionCard'
// import { fetchCommunities } from '../../redux/community/actions/communityActions';
import Pagination from '../../components/Pagination'
import CreateCommunityForm from 'components/Community/CreateCommunityForm';
import { useHistory } from 'react-router-dom'; 
import GetDate  from 'components/GetDate';
import UserPostSection from '../UserPostSection'
import authHeader from 'authHeader';
import dateFormat from 'dateformat';

const InputFile = styled('input')({
    display: 'none',
});

function UserDashboard() {
    let history = useHistory();
    // const dispatch = useDispatch();
    const [communityList, setCommunityList] = useState([])
    const [CommunityCount, setCommunityCount] = useState("0");
    const [PostCount, setPostCount] = useState("0");
    const [PhotoCount, setPhotoCount] = useState("0");
    const [NotificationCount, setNotificationCount] = useState("0");
    const [userDetails, setUserDetails] = useState({})
     const [userGallery, setUserGallery] = useState([])

    if(CommunityCount === "0"){
        axios.get("https://soal-capstone-project.herokuapp.com/getCommunityCountByUser", {
            headers : authHeader()
          }).then(function (response) {
            console.log(response.data.CommunityCount);
            setCommunityCount(response.data.CommunityCount);
          })
            .catch(function (error) {
              console.log(error);
            });
          }
          if(PostCount === "0"){
            axios.get("https://soal-capstone-project.herokuapp.com/getPostCountByUser", {
                headers : authHeader()
              }).then(function (response) {
                console.log(response.data.PostCount);
                setPostCount(response.data.PostCount);
              })
                .catch(function (error) {
                  console.log(error);
                });
              }

    useEffect(() => axios.get('https://soal-capstone-project.herokuapp.com/showCommunity', {
        headers : authHeader()

    })
        .then(res => setCommunityList(communityList => [...communityList, res]))
        .catch(function (error) {
            console.log(error.toJSON());
        })
        , [])
     console.log(communityList);  

    // fetching the user details from user table
    useEffect(() => axios.get('https://soal-capstone-project.herokuapp.com/getUserDetails', {
        headers : authHeader()
    })
    .then(res => {setUserDetails(res) 
        console.log(userDetails);})  
    .catch(function (error) {
        console.log(error);
      })
    ,[]) 
        console.log("userDetais: ",userDetails);   

        //fetching Photos from Gallery Table
  useEffect(() => axios.get('https://soal-capstone-project.herokuapp.com/showGallaryByUser', {
    headers : authHeader()
})
    .then(res => {
        setUserGallery(res.data[0].gallary_images)
  
    })
    .catch(function (error) {
        console.log(error);
    })
    , [])
    console.log(userGallery);

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
                                    <Button color="lightBlue" ripple="light" onClick ={() => {history.push("/profile")}}>
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
                                                
                                                // src={ProfilePicture}
                                             src={userDetails ? (userDetails?.data?.user_image?.url) : ProfilePicture}

                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-3/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">

                                    <div className="mr-3 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            {CommunityCount ? CommunityCount : 0}
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Communities
                                        </span>
                                    </div>
                                   
                                    <div className="mr-3 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                        {PhotoCount ? PhotoCount : 0}
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Photos
                                        </span>
                                    </div>

                                    <div className="mr-3 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                        {NotificationCount ? NotificationCount : 0}
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Notifications
                                        </span>
                                    </div>

                                    <div className="lg:mr-3 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            {PostCount? PostCount : 0}
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Posts
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center my-8">
                                <H3 color="gray">{userDetails?.data?.name}</H3>
                                {/* <H3 color="gray">{communityList.data[0]}</H3> */}
                                <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                    <Icon name="place" size="xl" />
                                    {userDetails?.data?.address?.city}{", "}  
                                    {userDetails?.data?.address?.state}{", "}  
                                    {userDetails?.data?.address?.country}
                                </div>
                                <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                    <Icon name="work" size="xl" />
                                    Member Since - {dateFormat(userDetails?.createdAt, "mmm dS, yyyy")}
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
                                <PhotoGallery userGalleryimages = {userGallery}/>

                            </div>

                        </div></div>

                </div>

            </section >

        </>
    )  }
    export default UserDashboard

                        