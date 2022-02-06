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

const InputFile = styled('input')({
    display: 'none',
});



export default function CreateNewPost() {
  
    const [postTitle, setPostTitle] = useState('')
    const [postLocation, setPostLocation] = useState('');
    const [postDetails, setPostDetails] = useState('')
    // console.log({ memberId })
    // console.log({ memberList })
    // console.log(communityName, communityDesc)
    // const [showModalCode, setShowModalCode] = React.useState(false);

    function submitForm() {
    console.log("inside submitForm");
    //  console.log(document.getElementById("inputName").value);
//     axios.post("https://soal-capstone-project.herokuapp.com/createCommunity", {
//         communityName: communityName,
//         communityDescription: communityDesc,
//       createdByID: '61ec7ae59877e6be51d1cf63'
//     }).then(function (response) {
//       console.log(response);
//     })
//       .catch(function (error) {
//         console.log(error);
//       });
   }
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
        />
        <Radio
            color="lightBlue"
            text="Borrow"
            id="borrow"
            name="posttype"
        />
          <Radio
            color="lightBlue"
            text="Want"
            id="want"
            name="posttype"
        />
        <Radio
            color="lightBlue"
            text="Gift"
            id="gift"
            name="posttype"
        />
        </div>
{/* // Give away post open to only this community or public? */}
<div className="flex-right gap-8 mt-16 mb-12">
<H6 color="lightBlue">If Gifting, make it public?</H6>
<Radio
            color="lightBlue"
            text="Yes"
            id="want"
            name="makeitpublic"
        />
        <Radio
            color="lightBlue"
            text="No"
            id="gift"
            name="makeitpublic"
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
                            </div>
                            </form >
                    </div>
                </div>
            </div>
        </div>
    );
}
