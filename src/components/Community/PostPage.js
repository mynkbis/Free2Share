import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Title from 'components/landing/Title';
import axios from 'axios'
import TeamCard from 'components/landing/TeamCard';

export default function PostPage(props) {
    const [postedBy, setPostedBy]= useState('')
    const [interestBy, setInterestBy] = useState('')
    const [postId, setPostId]= useState('')
    console.log(props)
    const [showModal, setShowModal] = React.useState(false);

    let userId = ((localStorage.getItem("userId")))
   
    const handleInterested = () => {
        setPostId(props.postId)
    setPostedBy(props.postedby)
    setInterestBy(userId)
        axios.post('https://soal-capstone-project.herokuapp.com/Community', {
           "postId": postId,
            "postedBy":postedBy,
            "interestBy":userId
        })
            .then(res => console.log("user will be notified"))
            .catch(function (error) {
                console.log(error.toJSON());
            })
            
        }
    

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
              <div className="flex justify-center mt-10">
                                <Button color="lightBlue" ripple="light" type = "submit" onClick={handleInterested}>
                                   Interested
                                </Button>
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
    )
}