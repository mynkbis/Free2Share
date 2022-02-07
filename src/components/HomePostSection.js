import React from 'react';
import PostCard from './PostCard';
import axios from 'axios';
import H5 from '@material-tailwind/react/Heading5';
import PostSectionCard from '../components/PostSectionCard'
import Pagination from '../components/Pagination'
import FadeLoader from "react-spinners/FadeLoader";
import { useState , useEffect} from 'react';

function HomePostSection() {
  const [postImages, setPostImages] = useState([])
const [postDetails, setPostDetails] = useState([])
const [currentPage,setCurrentPage]=useState(1)
const [postPerPage] = useState(4)
const indexofLastPost = currentPage * postPerPage;
const indexofFirstPost = indexofLastPost - postPerPage;
//changing page on paginate
const paginate = pageNumber => {
  setCurrentPage(pageNumber)
} 
  //fetching Posts from Post Table
  useEffect(() => axios.get('https://soal-capstone-project.herokuapp.com/showPublicPost')
    .then(res => {
        setPostDetails(postDetails => [...postDetails, res.data])
    })
    .catch(function (error) {
        console.log(error.toJSON());
    })
    , [])
    console.log(postDetails[0]);


      return (
  
   
      <>
      
      <div className="mb-10 py-2 border-t border-gray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                       <div className="text-center my-8">

                                            {/* //The Posts Section starts here */}
                                            <H5 color="gray">Public Posts</H5>
                                        </div></div>
                                </div></div>
      <div className="flex flex-wrap">
      {postDetails[0]?<PostSectionCard posts = {postDetails[0].slice(indexofFirstPost, indexofLastPost)} />: <p>NO POSTS BY USER</p>}
                             </div> 
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >   
                            {postDetails[0]?<Pagination paginate ={paginate} postsPerPage = {postPerPage} totalPosts = {postDetails[0].length} />:" "}
                            </div>
 </>

     )
}

export default HomePostSection;
