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
import axios from 'axios';
import PostCard from 'components/landing/PostCard'
import PhotoGallery from 'components/landing/PhotoGallery'
import { styled } from '@mui/material/styles';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import CommunityTestimonial from './CommunityTestimonial';
import { useState, useEffect } from 'react'
import Input from '@material-tailwind/react/Input';
import PostPage from './PostPage';
import AddMembers from './AddMembers'
import CommunityMemberList from './CommunityMemberList'
import Stack from '@mui/material/Stack';
import Textarea from "@material-tailwind/react/Textarea";
import {useHistory} from 'react-router-dom'
import CommunityPostSection from '../CommunityPostSection'
import CommunityDashboardPage from '../../pages/CommunityDashboardPage'
import UserListModal from 'components/User/UserListModal';
import authHeader from 'authHeader';
import dateFormat from 'dateformat';
import GetUploadFile from 'components/User/GetUploadFile'

const InputFile = styled('input')({
    display: 'none',
});

export default function CommunityDashboard(props) {
    console.log("communityId : ", props.communityId)
    const communityId = props.communityId
    console.log("communityId in var : ",communityId)
    let history = useHistory()
    const [showModal, setShowModal] = useState(false);
    const [memberId, setMemberId] = useState([])
    const [memberList, setMemberList] = useState([])
    const [communityData, setCommunityData] = useState({})
     // fetching the community details from community table for that specific id
     useEffect(() => axios.get(`https://soal-capstone-project.herokuapp.com/showCommunityByID/${communityId}`, {
        headers : authHeader() 
    })   
    .then(res =>  setCommunityData(res.data))  
    .catch(function (error) {
        console.log(error.toJSON());
      }),[]) 

       

    let userId = ((localStorage.getItem("userId")))
    console.log(communityData)
    return (
        <>
           <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-40 -mt-20">
                                    <Image
                                            src={communityData?.community_image?.url}
                                            alt="Profile picture"
                                            raised
                                            rounded
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                              <AddMembers communityId = {communityId}/>
                         
                                    &nbsp;&nbsp;&nbsp;
                                    <Button color="lightBlue" ripple="light" onClick ={() => {history.push("/createNewPost", {communityId:communityData?.communityId})}}> 
                                        Add Post
                                    </Button>
                                    &nbsp;&nbsp;&nbsp;
                                    {/* <Button color="lightBlue" ripple="light">  */}
                                    <Button color="lightBlue" ripple="light" onClick ={() => {history.push("/CommunityMemberList",{communityMember:communityData?.communityMember} )}}> 
                                       Member List
                                      
                                    </Button>
                                    </div>
                                    {/* <UserListModal communityMember={communityData[0]?.communityMember}/> */}
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            {communityData? (communityData?.communityMember?.length) : 0}
                                            </span>
                                            <span className="text-sm text-gray-700">
                                                Members
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
                                        <div className="lg:mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                                89
                                            </span>
                                            <span className="text-sm text-gray-700">
                                                Posts
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center my-8">
                                <H3 color="gray">{communityData?.communityName}</H3>
                                <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                    <Icon name="work" size="xl" />
                                    created by - {communityData?.createdByID?.name}, created on - {dateFormat(communityData?.createdAt, "mmm dS, yyyy")}
                                </div>
                               
                        </div>

                            <div className="mb-10 py-2 border-t border-gray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                        <LeadText color="blueGray"> Community Info : 
                                            {/* Description of community -  */}
                                             {communityData?.communityDescription}
                                          
                                        </LeadText>
                                       
                                            <H5 color="gray">Posted by Members</H5>
                                         
                                        </div>
                                        <div className="text-center my-8"><CommunityPostSection communityID={communityId}/></div> 
                                </div>
                               
                                  
                              

                                {/* PhotoGallery Code starts here */}
                                <div className="text-center my-8">
                                    <H5 color="gray">Community Photo Gallery</H5>

                                    {/* For Upload picture option */}
                                    <GetUploadFile communityId = {communityId} userId = {userId} />

                                    {/* <label htmlFor="icon-button-file">
                                        <InputFile accept="image/*" id="icon-button-file" type="file" />
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>


                                    <PhotoGallery /> */}

                                    {/* Testimonial with Carousel */}





                                </div>
                            </div>
                        </div>
                        <div className="text-center my-8">

                            <H5 color="gray">Member Testimonials</H5>
                            <div>

                                <div className="flex justify-center mt-10">

                                    {/* Code for Add Member Modal */}

                                    <Button

                                        color="lightBlue"
                                        buttonType="link"
                                        size="lg"
                                        rounded={false}
                                        block={false}
                                        iconOnly={false}
                                        onClick={(e) => setShowModal(true)}
                                        ripple="light"
                                    >
                                        <Icon name="feedback" /> Write a Testimonial
                                    </Button>

                                    <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
                                        <ModalHeader toggler={() => setShowModal(false)}>
                                            Enter Testimonial
                                        </ModalHeader>
                                        <ModalBody>
                                            <Input
                                                type="textarea"
                                                placeholder="Your Testimonial"
                                                color="lightBlue"
                                                onChange={event => setMemberId(event.target.value)}
                                            />
                                        </ModalBody>
                                        <ModalFooter>

                                            <Button
                                                color="red"
                                                buttonType="link"
                                                onClick={(e) => setShowModal(false)}
                                                ripple="dark"
                                            >
                                                Close
                                            </Button>

                                            <Button
                                                color="green"
                                                onClick={(e) => { setShowModal(false); }}
                                                // onClick={(e) => { setShowModal(false); setMemberList(oldArray => [...oldArray, memberId]) }}
                                                ripple="light"
                                            >
                                                Save Changes
                                            </Button>
                                        </ModalFooter>
                                    </Modal>

                                </div>
                                <CommunityTestimonial />


                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </>
    );
}
