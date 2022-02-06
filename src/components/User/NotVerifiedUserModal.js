import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import {useHistory} from 'react-router-dom'

export default function NotVerifiedUserModal() {
    const History=useHistory();
    const [showModal, setShowModal] = React.useState(true);

    return (
        <>
            {/* <Button
                color="lightBlue"
                type="button"
                onClick={(e) => setShowModal(true)}
                ripple="light"
            >
                Open regular Modal
            </Button> */} 

            <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
                <ModalHeader toggler={() => setShowModal(false)}>
                  EMAIL NOT VERIFIED
                </ModalHeader>
                <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                   In order to our access the features of our site, the email address of your Free2Share account needs to be verified.
                   Once you click on the link in an email we've sent you, you're all set to go!
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
        </>
    );
}