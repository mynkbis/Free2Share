import {React, useState, useEffect} from 'react';
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Icon from "@material-tailwind/react/Icon";
import Input from '@material-tailwind/react/Input';
import Button from '@material-tailwind/react/Button';
import axios from 'axios'
import authHeader from 'authHeader';

function AddMembers(properties) {
    console.log(properties)
    const [memberList, setMemberList] = useState([])
    const [showModal, setShowModal] = useState(false)
      const [memberId, setMemberId] = useState([])
      const [userDetails, setUserDetails] = useState({})

      console.log({memberId})
// need to check if the user is an admin who is allowed to add members
      let userId = ((localStorage.getItem("userId")))
    //    // fetching the user details from user table
    // useEffect(() => axios.get('https://soal-capstone-project.herokuapp.com/getUserDetails', {
    //     headers : authHeader()
    // })
    // .then(res => {setUserDetails(res.data) 
    //     console.log(userDetails);})  
    // .catch(function (error) {
    //     console.log(error.toJSON());
    //   })
    // ,[]) 
    //     console.log(userDetails);   
function submitMemberId(){
    axios.post('https://soal-capstone-project.herokuapp.com/inviteLink', {
        name: properties.userName,
        userID: properties.userId._id,
        communityName: properties.communityName,
        communityID: properties.communityId,
        email: memberId
    })
    .then(res => {
        console.log(res);})  
    .catch(function (error) {
        console.log(error.toJSON());
      })
}
        
       
  //API call to add user to community is still pending. 
//   also need to check if the user is already on th website. 
//   also need to check if the person trying to add is an admin. 
//   also need to check the the member being added is already a member of the community.

  
        return (
  
  <div>
<div className="flex justify-left mt-10">

{/* Code for Add Member Modal */}
<Button
                color="lightBlue"
                type="button"
                onClick={(e) => setShowModal(true)}
                ripple="light"
            >
                Add Members
            </Button>


<Modal size="large" active={showModal} toggler={() => setShowModal(false)}>
    <ModalHeader toggler={() => setShowModal(false)}>
        Enter Email Address
    </ModalHeader>
    <ModalBody>
        <Input
            type="email"
            placeholder="Email Address"
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
            onClick={(e) => {setShowModal(false); 
                submitMemberId();
                setMemberList(oldArray => [...oldArray, memberId])
            }}
            ripple="light"
        >
            Save Changes
        </Button>
    </ModalFooter>
</Modal>
</div>

      
  </div>
)}

export default AddMembers;
