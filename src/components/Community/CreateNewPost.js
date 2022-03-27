import { React, useState, useEffect } from 'react';
import H6 from '@material-tailwind/react/Heading6';
import H3 from '@material-tailwind/react/Heading3';
import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Button from '@material-tailwind/react/Button';
import Textarea from "@material-tailwind/react/Textarea";
import axios from 'axios';
import Radio from "@material-tailwind/react/radio"
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import Checkbox from "@material-tailwind/react/Checkbox"
import {Alert} from 'components/Community/Alert'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DefaultFooter from '../DefaultFooter'
import DefaultNavbar from '../DefaultNavbar'
import {useForm } from 'react-hook-form'
import GetUploadFile from '../User/GetUploadFile'
import authHeader from 'authHeader';

toast.configure()


// last attempt was to make the form fields blank once the post is created
const InputFile = styled('input')({
    display: 'none',
});

const successToast = ()=>{
    // // Set to 3sec
    toast.success('Post created successfully!', {position:toast. TOP_CENTER, autoClose:5000})
    // reset()
//    {clearFields()}
}
     

export default function CreateNewPost(props) {
    const {reset, handleSubmit} = useForm();
    const [postTitle, setPostTitle] = useState('')
    const [postType, setPostType] = useState('')
    const [isPublicFlag, setIsPublicFlag] = useState(false)
    const [postLocation, setPostLocation] = useState('');
    const [itemName, setItemName] = useState('')
    const [postDetails, setPostDetails] = useState('')
    const [submissionSuccessful, setSubmissionSuccessful]=useState(false)
   
    function submitForm() {
    console.log("submiting new post", props.communityId);
  axios.post("https://soal-capstone-project.herokuapp.com/createPost",
  {
    headers : authHeader(),
    communityID: props.communityId,
    post_title: postTitle,
    product_name: itemName,
    product_description : postDetails,
    post_type: postType,
    isPublic: isPublicFlag,
    generalLocation: postLocation,
    post_status: "Available",
}
    ).then(function (response) {
    //   console.log(response);
    //   setSubmissionSuccessful(true)
    //   setPostDetails('')
    {successToast()}
  
    })
      .catch(function (error) {
        console.log(error);
      });
    }

    function uploadImage(){

    }

   console.log("postTitle", postTitle,"itemName", itemName, "postDetails", postDetails,"postType", postType , "isPublicFlag", isPublicFlag, "postLocation", postLocation)
  const handlePostTypeRadioButtons = e => {
    const { id } = e.target;
    setPostType(id);
  };
  const handlePostisPublic = e => {
    const { id } = e.target;
  setIsPublicFlag(id)
    
  };

    return (
        <>
        <div className="absolute w-full z-20">
        <DefaultNavbar />
    </div>
    <main>
        <div className="flex flex-wrap justify-center mt-24">
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center">
                            <H3 color="gray">Create a New Post </H3>
                            <Paragraph color="blueGray">
                                Complete this form.
                            </Paragraph>
                        </div>

                        <form method = "POST" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex-right gap-8 mt-16 mb-12">
                            <H6 color="lightBlue">Post Title</H6>
                                <Input
                                    type="text"
                                    placeholder="Make the title brief and specific"
                                    color="lightBlue"
                                    onChange={event => setPostTitle(event.target.value)}
                                    required
                                />
                            </div>
{/* Post Type */}
<div className="flex-right gap-8 mt-16 mb-12">
<H6 color="lightBlue">Post Type</H6>
                            <Radio
            color="lightBlue"
            text="Lend"
            id="lend"
            name="posttype"
            onChange={handlePostTypeRadioButtons}
        />
        <Radio
            color="lightBlue"
            text="Borrow"
            id="borrow"
            name="posttype"
            onChange={handlePostTypeRadioButtons}
        />
          <Radio
            color="lightBlue"
            text="Want"
            id="want"
            name="posttype"
            onChange={handlePostTypeRadioButtons}
        />
        <Radio
            color="lightBlue"
            text="Gift"
            id="gift"
            name="posttype"
            onChange={handlePostTypeRadioButtons}
        />
        </div>
{/* // Give away post open to only this community or public? */}
<div className="flex-right gap-8 mt-16 mb-12">
<H6 color="lightBlue">If Gifting / Wanted, make it public Post?</H6>
<Radio
            color="lightBlue"
            text="Yes"
            id="yes"
            name="makeitpublic"
            onChange=  {handlePostisPublic}
        />
        <Radio
            color="lightBlue"
            text="No"
            id="no"
            name="makeitpublic"
            onChange=  {handlePostisPublic}
        />
        </div>
                                                       {/* location */}
                                                      
  <div className="flex-right gap-8 mt-16 mb-12">
  <H6 color="lightBlue">General Location</H6>
                                <Input
                                    type="text"
                                    placeholder="General Location"
                                    color="lightBlue"
                                    onChange={event => setPostLocation(event.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex-right gap-8 mt-16 mb-12">
  <H6 color="lightBlue">Item Name</H6>
  
                                <Input
                                    type="text"
                                    placeholder="Item Name"
                                    color="lightBlue"
                                    onChange={event => setItemName(event.target.value)}
                                    required
                                />
                            </div>
{/* Item Details  */}
<div className="flex-right gap-8 mt-16 mb-12">
<H6 color="lightBlue">Details</H6>
                            <Textarea 
                            color="lightBlue" placeholder="Specific Details about your item."  
                            onChange={event => setPostDetails(event.target.value)} 
                            />
</div>
{/* Item Images */}    
{/* Code for adding images */}
<div className="flex-right gap-8 mt-16 mb-12">
<H6 color="lightBlue">Add Image</H6>
<input
  type="file"
  name="file"
  multiple
  id="input-files"
  class="form-control-file border"
/>

<GetUploadFile />
{/* <label htmlFor="icon-button-file">
<InputFile accept="image/*" id="icon-button-file" type="file" onClick={uploadImage}/>
                                        <IconButton color="primary" aria-label="upload picture (max 3)" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </label> */}
</div>
                            <div className="flex justify-center mt-10">
                                <Button color="lightBlue" ripple="light" type = "submit" onClick={handleSubmit(submitForm)}>
                                    Add Post
                                </Button>
                                    {/* {submissionSuccessful?{successToast}:<></>} */}
                                    <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
                            </div>
                            </form >
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
          </main>
          <DefaultFooter />
      </>
    );
}
