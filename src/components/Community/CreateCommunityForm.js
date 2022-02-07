import { React, useState } from 'react';
import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Button from '@material-tailwind/react/Button';
import Textarea from "@material-tailwind/react/Textarea";
import AddMembers from './AddMembers';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'; 
toast.configure()

const successToast = ()=>{
    // // Set to 3sec
    toast.success('Your Community has been created Successfully!', {position:toast. TOP_CENTER, autoClose:5000})
     }

export default function CreateCommunityForm(props) {
    let history = useHistory()
    // console.log(props.user.userId)
  
    const [communityName, setCommunityName] = useState('')
    const [communityDesc, setCommunityDesc] = useState('');

    //getting the userid from the localstorage
let userId = ((localStorage.getItem("userId")))
let AccessToken = ((localStorage.getItem("AccessToken")))
console.log(userId)

    function submitForm() {
    console.log("inside submitForm");
    //  console.log(document.getElementById("inputName").value);
    console.log(communityName, " ", communityDesc)
    axios.post("https://soal-capstone-project.herokuapp.com/createCommunity", {
        communityName: communityName,
        communityDescription: communityDesc,
      createdByID: userId
    }).then(function (response) {
      console.log(response);
      if(response.data.message === "Failed! This Community already exists."){history.push("/CommunityExistsModal")}
      else {
          {successToast()}
    {history.push("/CommunityDashboardPage",{ communityId: response.data.communityID })}}
    })
      .catch(function (error) {
        console.log(error);
      });
  }
    return (
        <div className="flex flex-wrap justify-center mt-24">
            <div className="w-full lg:w-8/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="flex-auto p-5 lg:p-10">
                        <div className="w-full text-center">
                            <H3 color="gray">Form your own Community Group </H3>
                            <Paragraph color="blueGray">
                                Complete this form.
                            </Paragraph>
                        </div>

                        <form method = "POST" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex gap-8 mt-16 mb-12">
                                <Input
                                    type="text"
                                    placeholder="Name for your Community"
                                    color="lightBlue"
                                    onChange={event => setCommunityName(event.target.value)}
                                    required
                                />
                            </div>

                            <Textarea 
                            color="lightBlue" placeholder="Message"  
                            onChange={event => setCommunityDesc(event.target.value)} 
                            />
                     

                            <div className="flex justify-center mt-10">
                                <Button color="lightBlue" ripple="light" type = "submit" onClick={submitForm}>
                                    Create My Community
                                </Button>
                            </div>
                            </form >
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
