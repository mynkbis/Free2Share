import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { NavLink, useHistory } from 'react-router-dom'
import FadeLoader from "react-spinners/FadeLoader";

export default function CommunityListModal(props) {
    const History=useHistory();
    const [showModal, setShowModal] = useState(false);
 console.log(props.list)
    return (
        <>
            <Button
                color="lightBlue"
                type="button"
                onClick={(e) => setShowModal(true)}
                ripple="light"
            >
               Your Communities
            </Button>

            <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                  Your Communities
                </ModalHeader>
                <ModalBody>
                   {props.list?props.list.map((item, index) => (
                      
       <li className='indent' key={index}>
           <NavLink to={{
           pathname:'/CommunityDashboardPage', 
           state:{communityId :item._id}
        }}>
        {item.communityName}
        </NavLink>
        </li>)):<FadeLoader />}
                   
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