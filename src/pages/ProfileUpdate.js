import Button from '@material-tailwind/react/Button';
import Header from 'components/profile/Header';
import H3 from '@material-tailwind/react/Heading3';
import "./Register.css"
import { useHistory } from "react-router";
import { useState } from 'react';
import axios from 'axios';
import authHeader from 'authHeader';

export default function ProfileEditting() {
    const History=useHistory();
    const [newUserName, setnewUserName]=useState('');   
    const [newMobile, setnewMobile]=useState('');   
    const [newDOB, setnewDOB]=useState('');   
    const [newGender, setnewGender]=useState('');   
    const [newLine1, setnewLine1]=useState('');   
    const [newLine2, setnewLine2]=useState('');   
    const [newCity, setnewCity]=useState('');   
    const [newState, setnewState]=useState('');     
    const [newCountry, setnewCountry]=useState('');   
    const [newPincode, setnewPincode]=useState('');   
    
    const eventHandlernewUserName =(e)=>{
        setnewUserName(e.target.value)
   }
   const eventHandlernewGender =(e)=>{
    setnewGender(e.target.value)
}
   const eventHandlernewMobile =(e)=>{
    setnewMobile(e.target.value)
    }
    const eventHandlernewDOB =(e)=>{
        setnewDOB(e.target.value)
        }
        const eventHandlernewLine1 =(e)=>{
            setnewLine1(e.target.value)
            }
            const eventHandlernewLine2 =(e)=>{
                setnewLine2(e.target.value)
                }
                const eventHandlernewCity =(e)=>{
                    setnewCity(e.target.value)
                    }
                    const eventHandlernewState =(e)=>{
                        setnewState(e.target.value)
                        }
                        const eventHandlernewCountry =(e)=>{
                            setnewCountry(e.target.value)
                            }
                            const eventHandlernewPincode =(e)=>{
                                setnewPincode(e.target.value)
                                }

    const [OldUserData, setOldUserData] =useState({    
        user_image: "",
        UserName:"",
        Mobile:"",
        DOB:"",
        Gender:"",
        Line1:"",
        Line2:"",
        City:"",
        State:"",
        Country:"",
        Pincode:"",
        Hobbies:"",
        Roles:"",
        User_status:"",
        createdAt:"",
        UpdatedAt:"",
        Email:"",
        EmailStatus:"",})
   
    if(OldUserData.UserName === ""){
        axios.get("https://soal-capstone-project.herokuapp.com/getUserDetails",{
        headers : authHeader()
    }).then(res=>{
        setOldUserData({
            user_image: res.data.user_image.url,
            UserName:res.data.name,
            Mobile:res.data.mobile,
            DOB:res.data.birth_date,
            Gender:res.data.gender,
            Line1:res.data.address.line1,
            Line2:res.data.address.line2,
            City:res.data.address.city,
            State:res.data.address.state,
            Country:res.data.address.country,
            Pincode:res.data.address.pin_code,
            Hobbies:res.data.hobbies,
            Roles:res.data.roles,
            User_status:res.data.user_status,
            createdAt:res.data.createdAt,
            UpdatedAt:res.data.updatedAt,
            Email:res.data.email,
            EmailStatus:res.data.email_status

        })
     
        

    }).catch(error=>{
        alert("Something went wrong try again") 
    })
    }
    const save=()=>{
     
        const databaseUserName= localStorage.getItem('userId')
        console.log('userId is', databaseUserName)
     
     if(databaseUserName){
         axios.post("https://soal-capstone-project.herokuapp.com/dashboard/user/edit",{
             headers : authHeader(),
             newUserName:newUserName ? newUserName : OldUserData.UserName,
             newMobile:newMobile ? newMobile : OldUserData.Mobile,
             newDOB:newDOB ? newDOB : OldUserData.DOB,
             newGender:newGender ? newGender : OldUserData.Gender,
             newLine1:newLine1 ? newLine1 : OldUserData.Line1,
             newLine2:newLine2 ? newLine2 : OldUserData.Line2,
             newCity:newCity ? newCity : OldUserData.City,
             newState:newState ? newState : OldUserData.State,
             newCountry:newCountry ? newCountry : OldUserData.Country,
             newPincode:newPincode ? newPincode : OldUserData.Pincode
             
         }).then(res=>{
             // console.log(res)
             alert("successful")
         
             History.push("./profile") // once edit is done successfully will redirect to profile/userdashboard
         }).catch(error=>{
             console.log(error)
             History.push("./Profile")
             alert(error)
          
         })
     }
    }






  


    
    return (<>
    <Header/>
    
        <section className="relative py-16 bg-gray-100">
        <div className="container max-w-7xl px-4 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64 ">
                <div className="profile_pic1 m-10">
                    <div className="profile_pic">
                     <div className="profile_pic">
                         <span>Upload a Photo: <input className='profie_pic3' type="file"></input> </span>                                                                          
                          </div>
                          </div>
                  <div className="UpdateProfile">
                  
                        <H3 className="usernameFromDb">{OldUserData.UserName}</H3>
                        <div className="Line1">
                         <label>Name: </label>
                         <input className='Profileupdate_username' defaultValue={OldUserData.UserName} name="newUserName" placeholder='Enter Name' onChange={eventHandlernewUserName}></input>
                        </div>
                        <div className="Line1">
                        <label>Mobile: </label>
                         <input className='newMobile' name="newMobile" defaultValue={OldUserData.Mobile} placeholder='Enter mobile number' onChange={eventHandlernewMobile}></input>
                         </div>
                         <div className="Line1">
                        <label>DOB: </label>
                         <input type="date" name="newDOB" defaultValue={OldUserData.DOB} className='Profileupdate_Education' placeholder='DOB' onChange={eventHandlernewDOB}></input>
                        </div>
                        <div className="Line1">
                        <label>Gender: </label>
                         <input className='newGender' defaultValue={OldUserData.Gender} name='newGender' placeholder='Gender' onChange={eventHandlernewGender}></input>
                         </div>
                        <div className="Line1">
                        <label>Address: </label>
                         <input className='newAdd' name='newLine1' defaultValue={OldUserData.Line1} placeholder='Line 1'onChange={eventHandlernewLine1}></input>
                        </div>
                        <div className="Line1">
                        <label>Address: </label>
                         <input className='newAdd2' name='newLine2' defaultValue={OldUserData.Line2} placeholder='Line 2' onChange={eventHandlernewLine2}></input>
                        </div>
                        <div className="Line1">
                        <label>City: </label>
                         <input className='newCity' defaultValue={OldUserData.City} name="newCity" placeholder='City'onChange={eventHandlernewCity}></input>
                        </div>
                        <div className="Line1">
                        <label>State: </label>
                         <input className='state' name='newstate' defaultValue={OldUserData.State} placeholder='State'onChange={eventHandlernewState}></input>
                        </div>
                        <div className="Line1">
                        <label>Country: </label>
                         <input className='country' name='newCountry' defaultValue={OldUserData.Country} placeholder='Country'onChange={eventHandlernewCountry}></input>
                        </div>
                        <div className="Line1">
                        <label>Pin Code: </label>
                         <input className='pin' name='newPincode' defaultValue={OldUserData.Pincode} placeholder='Pin Code'onChange={eventHandlernewPincode}></input>
                        </div>
                    </div>
                    <Button className="profile_save" onClick={save}>save</Button>
           
                </div>
            </div>
        </div>
    </section>
        </> );
}