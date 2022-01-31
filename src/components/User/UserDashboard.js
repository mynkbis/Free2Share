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
import { useState , useEffect} from 'react'
import axios from 'axios'


const InputFile = styled('input')({
    display: 'none',
});

export default function UserDashboard() {
    const [communityList,setCommunityList]=useState([])

    // fetching the community details of the user
    useEffect(() => axios.post('https://soal-capstone-project.herokuapp.com/showCommunity', {
            "userID" : "61ec7ae59877e6be51d1cf63"
        })
        .then(res => setCommunityList(communityList => [...communityList, res]))
       ,[])
       console.log(communityList) 

       
// fetching the user details from user table
useEffect(() => axios.post('https://soal-capstone-project.herokuapp.com/getUserDetails', {
    "userID" : "61ec7ae59877e6be51d1cf63"
})
.then(res => console.log(res))
,[]) 
         

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
                                    //    src = {ProfilePicture}

                                    //put square images here
                                       src="https://images.thehairstyler.com/attachment_resources/attachments/265/original/the_right_hairstyle_for_your_face_shape_square.jpg"
                                        //  src={communityList[0].data[0].community_image.url}
                                        // class="card-img-top"
                                                alt="Profile picture"
                                                raised
                                            //    fluid 
                                             rounded
                                           height="100%"
                                        //    width="800px"
                                        flex= "1"
                                        width= '100%'
                                        height= '100%'
                                        resizeMode= 'contain'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                                    <Button color="lightBlue" ripple="light">
                                        Create New Community
                                    </Button>

                                    &nbsp;&nbsp;&nbsp;
                                    <Button color="lightBlue" ripple="light">
                                        Go to Community Dashboard
                                    </Button>

                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <Button color="lightBlue" ripple="light">
                                                Edit Profile
                                            </Button>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                               {/* {communityList[0].data.length} */}
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
                            </div>

                            <div className="text-center my-8">
                                <H3 color="gray">User Name</H3>
                                {/* <H3 color="gray">{communityList.data[0]}</H3> */}
                                <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                    <Icon name="place" size="xl" />
                                    -- Location --
                                </div>
                                <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                    <Icon name="work" size="xl" />
                                    Member Since - date
                                </div>

                            </div>

                            <div className="mb-10 py-2 border-t border-gray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                        <LeadText color="blueGray">
                                            Gyaan about User
                                        </LeadText>
                                        <div className="text-center my-8">
                                            <H5 color="gray">Posted by User</H5>
                                        </div></div>
                                </div></div>
                            <div className="flex flex-wrap relative z-50">
                                <PostCard color="red" icon="cloud_upload" title="Lending Books">
                                    <div>- Member name</div>
                                    Description of the product being offered to be lent by the member
                                    <div>  Status - Open / close </div>
                                    {/* <PostPage /> */}
                                </PostCard>

                                <PostCard
                                    color="lightBlue"
                                    icon="back_hand"
                                    title="Wanted a Cat"
                                >
                                    <div>- Member name</div>

                                    Description of the product wanted by the member
                                    <div>  Status - Open / close </div>
                                    {/* <PostPage /> */}
                                </PostCard>

                                <PostCard
                                    color="teal"
                                    icon="volunteer_activism"
                                    title="Giving Away Photo Frames"
                                >
                                    <div>- Member name</div>
                                    Description of the product given away by the member
                                    <div>  Status - Open / close </div>
                                    {/* <PostPage /> */}
                                </PostCard>
                            </div>

                            {/* PhotoGallery Code starts here */}
                            <div className="text-center my-8">
                                <H5 color="gray">Uploaded by User</H5>
                                <PhotoGallery />

                            </div>

                        </div></div>

                </div>

            </section >

        </>
    );
}
