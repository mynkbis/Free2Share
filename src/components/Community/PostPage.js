import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1-800x800.jpg';
import Image2 from 'assets/img/team-2-800x800.jpg';
import Image3 from 'assets/img/team-3-800x800.jpg';
import Image4 from 'assets/img/team-4-470x470.png';

export default function PostPage(props) {
    const [showModal, setShowModal] = React.useState(false);
console.log(props)
    return (
        <>
            <Button
                color="lightBlue"
                type="button"
                onClick={(e) => setShowModal(true)}
                ripple="light"
            >
                More Details
            </Button>

            <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
              
                <ModalBody>
              
            <div className="container max-w-7xl mx-5 px-4">
            <ModalHeader toggler={() => setShowModal(false)}>
               { props.post?.post_title}
                </ModalHeader>
                  
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                       Post Type : {props.post?.post_type}
                    </p>
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                       Public Post : {props.post?.isPublic?"Yes":"No"}
                    </p>
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                       Location : {props?.post?.generalLocation}
                    </p>
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                      Details : {props.post.product_description}
                    </p>
                    </div>
                    <div className="flex nowrap">
                    {props.post?.product_images?.map(item => {
                      
                      return(<TeamCard
                        img={item.url}
                    />)  
                    })}
              </div>
         
           
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