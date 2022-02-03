import { React, useState } from 'react';
import H3 from '@material-tailwind/react/Heading3';
import Paragraph from '@material-tailwind/react/Paragraph';
import Input from '@material-tailwind/react/Input';
import Icon from "@material-tailwind/react/Icon";
import Button from '@material-tailwind/react/Button';
import Textarea from "@material-tailwind/react/Textarea";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import axios from 'axios';




export default function CreateCommunityForm() {
    const [showModal, setShowModal] = useState(false);
    const [memberId, setMemberId] = useState([])
    const [communityName, setCommunityName] = useState('')
    const [communityDesc, setCommunityDesc] = useState('');
    const [memberList, setMemberList] = useState([])
    console.log({ memberId })
    console.log({ memberList })
    console.log(communityName, communityDesc)
    // const [showModalCode, setShowModalCode] = React.useState(false);

    function submitForm() {
    console.log("inside submitForm");
    //  console.log(document.getElementById("inputName").value);
    axios.post("https://soal-capstone-project.herokuapp.com/createCommunity", {
        communityName: communityName,
        communityDescription: communityDesc,
        createdByID: '61ec7ae59877e6be51d1cf63'
    }).then(function (response) {
      console.log(response);
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


                            <div className="flex justify-left mt-10">

                                {/* Code for Add Member Modal */}

                                <Button

                                    color="lightBlue"
                                    buttonType="link"
                                    size="lg"
                                    rounded={false}
                                    block={false}
                                    iconOnly={false}
                                    onClick={(e) => setShowModal(true)}
                                    ripple="light"
                                >
                                    <Icon name="person_add" /> Add Members to your Community
                                </Button>

                                <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
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
                                            onClick={(e) => {setShowModal(false); setMemberList(oldArray => [...oldArray, memberId])}}
                                            ripple="light"
                                        >
                                            Save Changes
                                        </Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                            <div className="flex justify-center mt-10">
                                <Button color="lightBlue" ripple="light" type = "submit" onClick={submitForm}>
                                    Create My Community
                                </Button>
                            </div>
                            </form >
                    </div>
                </div>
            </div>
        </div>
    );
}
