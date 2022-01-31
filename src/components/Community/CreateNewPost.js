import { React, useState } from 'react';
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

toast.configure()

const InputFile = styled('input')({
    display: 'none',
});

const successToast = ()=>{
    // // Set to 3sec
    toast.success('Post created successfully!', {position:toast. TOP_CENTER, autoClose:5000})
     }

export default function CreateNewPost(props) {
  
    const [postTitle, setPostTitle] = useState('')
    const [postType, setPostType] = useState('')
    const [isPublicFlag, setIsPublicFlag] = useState(false)
    const [postLocation, setPostLocation] = useState('');
    const [itemName, setItemName] = useState('')
    const [postDetails, setPostDetails] = useState('')
    const [submissionSuccessful, setSubmissionSuccessful]=useState(false)
    
    
   
    function submitForm() {
    console.log("inside submitForm");
    //  console.log(document.getElementById("inputName").value);
  axios.post("https://soal-capstone-project.herokuapp.com/createPost",
  {
    communityID: '61f67e7b56da8ef394dc31df',
    post_title: postTitle,
    product_name: itemName,
    product_description : postDetails,
    post_type: postType,
    isPublic: isPublicFlag,
    generalLocation: postLocation,
    post_status: "Available",
    postedby: "61ec7ae59877e6be51d1cf63"
}
// {
//     "communityID": "61f67e7b56da8ef394dc31df",
//     "post_title": "mobile for lend",
//     "product_name": "Redmi Note 9 Pro",
//     "product_description" : "RAM 4 GB , Storage 64 GB, 5.6' Display",
//     "post_type": "lend",
//     "isPublic": false,
//     "generalLocation": "my building",
//     "post_status": "Available",
//     "postedby": "61ec7ae59877e6be51d1cf63"
// }
    ).then(function (response) {
    //   console.log(response);
    //   setSubmissionSuccessful(true)
    {successToast()}
    })
      .catch(function (error) {
        console.log(error);
      });
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
<label htmlFor="icon-button-file">
<InputFile accept="image/*" id="icon-button-file" type="file" />
                                        <IconButton color="primary" aria-label="upload picture (max 3)" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>
</div>
                            <div className="flex justify-center mt-10">
                                <Button color="lightBlue" ripple="light" type = "submit" onClick={submitForm}>
                                    Add Post
                                </Button>
                                    {/* {submissionSuccessful?{successToast}:<></>} */}
                            </div>
                            </form >
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
