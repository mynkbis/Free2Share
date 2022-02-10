import {React, useState, useEffect} from 'react'
import { Upload, Button } from 'antd';
import { Input } from 'antd';
import Icon from '@ant-design/icons'
import axios from 'axios'

//need to pass the thumburl with the post request
// console.log(defaultFileList)
function GetUploadFile() {
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

    reader.onload = (e) => {
      const base64Image = e.target.result;
      setImageUrl(base64Image);
    };
  }
};
   
function uploadImage(){axios.post('https://soal-capstone-project.herokuapp.com/uploadPostImage', {
    "product_image" : imageUrl,
    "postId":"6202cf3b8bee879a0ed109c7"
})   
.then(res =>  console.log(res))  
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
