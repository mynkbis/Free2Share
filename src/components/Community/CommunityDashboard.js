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
import CommunityTestimonial from './CommunityTestimonial';
import { useState } from 'react'
import Input from '@material-tailwind/react/Input';

import Stack from '@mui/material/Stack';
import Textarea from "@material-tailwind/react/Textarea";

const InputFile = styled('input')({
    display: 'none',
});

export default function CommunityDashboard() {
    const [showModal, setShowModal] = useState(false);
    const [memberId, setMemberId] = useState([])
    const [memberList, setMemberList] = useState([])
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
                                                src={ProfilePicture}
                                                alt="Profile picture"
                                                raised
                                                rounded
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                                              
                                            
                                       <Button color="lightBlue" ripple="light" >
                                        Add Members
                                    </Button>
                                    &nbsp;&nbsp;&nbsp;
                                    <Button color="lightBlue" ripple="light"> 
                                        Add Post
                                    </Button>
                                    
                                    </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                                22
                                            </span>
                                            <span className="text-sm text-gray-700">
                                                Friends
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
                                <H3 color="gray">Community Name</H3>
                                <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                    <Icon name="place" size="xl" />
                                    -- Location --
                                </div>
                                <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                    <Icon name="work" size="xl" />
                                    Created by - Creative Tim Officer
                                </div>
                                <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                                    <Icon name="account_balance" size="xl" />
                                    Active Since - Date
                                </div>
                            </div>

                            <div className="mb-10 py-2 border-t border-gray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                        <LeadText color="blueGray">
                                            Description of community -  An artist of considerable range, Jenna
                                            the name taken by Melbourne-raised,
                                            Brooklyn-based Nick Murphy writes,
                                            performs and records all of his own
                                            music, giving it a warm, intimate feel
                                            with a solid groove structure. An artist
                                            of considerable range.
                                        </LeadText>
                                        <div className="text-center my-8">
                                            <H5 color="gray">Posted by Members</H5>
                                        </div></div>
                                </div>
                                <div className="flex flex-wrap relative z-50">
                                    <PostCard color="red" icon="cloud_upload" title="Lending Books">
                                        <div>- Member name</div>
                                        Description of the product being offered to be lent by the member
                                        <div>  Status - Open / close </div>
                                    </PostCard>
                                    <PostCard
                                        color="lightBlue"
                                        icon="back_hand"
                                        title="Wanted a Cat "
                                    >
                                        <div>- Member name</div>

                                        Description of the product wanted by the member
                                        <div>  Status - Open / close </div>
                                    </PostCard>
                                    <PostCard
                                        color="teal"
                                        icon="volunteer_activism"
                                        title="Giving Away Photo Frames"
                                    >
                                        <div>- Member name</div>
                                        Description of the product given away by the member
                                        <div>  Status - Open / close </div>
                                    </PostCard>
                                </div>

                                {/* PhotoGallery Code starts here */}
                                <div className="text-center my-8">
                                    <H5 color="gray">Community Photo Gallery</H5>

                                    {/* For Upload picture option */}


                                    <label htmlFor="icon-button-file">
                                        <InputFile accept="image/*" id="icon-button-file" type="file" />
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>


                                    <PhotoGallery />

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
                                                onClick={(e) => { setShowModal(false); setMemberList(oldArray => [...oldArray, memberId]) }}
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
