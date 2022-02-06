
import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import {useHistory} from 'react-router-dom'
import DefaultNavbar from 'components/DefaultNavbar';
import Login from './Login';


export default function Logout() {
let History = useHistory();
const [showModal, setShowModal] = React.useState(true);
    localStorage.removeItem("AccessToken")
  localStorage.removeItem("userID")

    return (
      <>
            {/* <DefaultNavbar flag="true" /> */}
            <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                 LOGOUT
                </ModalHeader>
                <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                  You have been successfully logged out!
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="red"
                        buttonType="link"
                        onClick={(e) => History.push("/login")}
                        ripple="dark"
                    >
                        Close
                    </Button>

                   
                </ModalFooter>
            </Modal>
           
           <Login />
    </>
    );
}
