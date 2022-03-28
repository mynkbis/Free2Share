import {React, useState, useEffect} from 'react'
import { Upload, Button } from 'antd';
import { Input } from 'antd';
import Icon from '@ant-design/icons'
import axios from 'axios'

//need to pass the thumburl with the post request
// console.log(defaultFileList)
function GetUploadFile(properties) {
    const [imageUrl, setImageUrl]= useState({})
    const fileList = []
 
const props = {
  action: '',
  listType: 'picture',
  defaultFileList: [...fileList],
  onChange(info) {
    let fileList = [...info.fileList];
    const file = fileList[0];
    let reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
// console.log(file.name)
    reader.onload = (e) => {
      const base64Image = e.target.result;
      setImageUrl(base64Image);
    };
  }
};
   
function uploadImage(){
  axios.post('https://soal-capstone-project.herokuapp.com/createGallary',{
    "communityID": properties.communityId,
    "postedby": properties.userId
  })
  .then(res => {
    // console.log(imageUrl)
  axios.post('https://soal-capstone-project.herokuapp.com/uploadGallaryImage2', {
    "gallary_images" : imageUrl,
    "gallaryID":res.data.gallaryID,
    "communityID": properties.communityId,
    "postedby": properties.userId
}).then(res=> console.log(res))}
)   
// .then(res =>  console.log(res))  
.catch(function (error) {
    console.log(error.toJSON());
  })} 
//   console.log({imageUrl})
  return (
    <>
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> Upload
        </Button>
      </Upload>
      <Button className="buttonCSS" type="primary" onClick={uploadImage}>ADD IMAGE</Button>

    </>
  )
}

export default GetUploadFile
