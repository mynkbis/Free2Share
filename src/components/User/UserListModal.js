import React, { useState , useEffect} from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { NavLink, useHistory } from 'react-router-dom'
import FadeLoader from "react-spinners/FadeLoader";
import axios from 'axios'

export default function UserListModal(props) {
    console.log(props?.communityMember)
// const memberList =[];
const [memberList, setMemberList] = useState([])
const [showModal, setShowModal] = useState(false);

console.log(memberList)
  //  thi sapi call is to get the name of the user whose member Id i have..
useEffect(() => props?.communityMember?.map(item => axios.post('https://soal-capstone-project.herokuapp.com/getUserDetails', {
    userID : item.memberid
})
.then(res => {
  console.log(res)
 setMemberList(res.data.name)
    // console.log(memberList)
    })  
.catch(function (error) {
    console.log(error); 
  })), [])
console.log(memberList) 


    return (
        <>
            <Button
                color="lightBlue"
                type="button"
                onClick={(e) => setShowModal(true)}
                ripple="light"
            >
                Community Members
            </Button>

            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                Community Members
                </ModalHeader>
                <ModalBody>

                   {memberList?memberList.map((item, index) => (
                      
       <li className='indent' key={index}>
          
        <div>{item}</div>
        
        </li>)): <FadeLoader />}
                   
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

                  </ModalFooter>
            </Modal>
        </>
    );
}