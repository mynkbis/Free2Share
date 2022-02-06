import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import {useHistory} from 'react-router-dom'

export default function IncorrectPasswordModal() {
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
                  INCORRECT PASSWORD
                </ModalHeader>
                <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                    The Password you entered is incorrect. Please try again later!
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