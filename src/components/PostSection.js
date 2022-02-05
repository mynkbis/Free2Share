import React from 'react';
import PostCard from './PostCard';
import axios from 'axios';
import { useState } from 'react';

function PostSection() {
 
  const [Post_title, setPost_title] = useState("");
  const [Product_name, setProduct_name] = useState("");
  const [Product_desc, setProduct_desc] = useState("");
  const [Post_type, setPost_type] = useState("");
  const [Product_images, setProduct_images] = useState("");
  
  if(Post_title === ""){
  axios.get("https://soal-capstone-project.herokuapp.com/showPublicPost", {
  
    }).then(function (response) {
      console.log(response);
      console.log(response.data[0].post_title);
     setPost_title(response.data[0].post_title);
     setProduct_name(response.data[0].product_name);
     setProduct_desc(response.data[0].Product_description);
     setPost_type(response.data[0].post_type);
     setProduct_images(response.data[0].product_images);
    })
      .catch(function (error) {
        console.log(error);
      });
    }

  return <div>
      <div className='flex flex-wrap items-center mt-20 mb-20'>
      <PostCard post_title={Post_title} product_name={Product_name}  product_desc={Product_desc} post_type={Post_type} />
      <PostCard />
      <PostCard />

      </div>
      
  </div>;
}

export default PostSection;
