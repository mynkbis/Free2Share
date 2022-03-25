import Button from '@material-tailwind/react/Button';
import Header from 'components/profile/Header';
import H3 from '@material-tailwind/react/Heading3';
import "./Register.css"
import { useHistory } from "react-router";
import { useState } from 'react';
import axios from 'axios';

export default function ProfileEditting() {
    const History=useHistory();
    const details = sessionStorage.getItem('Name-is');
    console.log("for profile edit checking surybs", details)


    const save=()=>{
        History.push("./profile")
        alert("Updated successfully")
          }
        
        
    // const[name,setName]=useState('');
    // const[image,setImage]=useState('');
    // const[hobbies,SetHobbies]=useState('');
    // const[dob,setDob]=useState('');
    // const[address,setAddress]=useState({
    //     line1:"line1",
    //     line2:"line2",
    //     city:"city",
    //     state:"state",
    //     country:"country",
    //     pin_code:"pin_code",
    //     });

    // const[gender,setGender]=useState("");

    const [userdata, setUserData]=useState({    
        newUserName:"",
        newMobile:"",
        newDOB:"",
        newGender:"",
        newLine1:"",
        newLine2:"",
        newCity:"",
        newState:"",
        newCountry:"",
        newPincode:"",
    })


    const eventHandler=(e)=>{
        setUserData({...userdata, [e.target.name]:[e.target.value]})
   }

   const databaseUserName= localStorage.getItem('userId')
console.log('userId is', databaseUserName)

// if(databaseUserName){
//     axios.post("https://soal-capstone-project.herokuapp.com/dashboard/user/edit",{
//         userID: databaseUserName,
//         newUserName:userdata.value,
//         // newMobile:userdata.newMobile,
//         // newDOB:userdata.newDOB,
//         // newGender:userdata.newGender,
//         // newLine1:userdata.newLine1,
//         // newLine2:userdata.newLine1,
//         // newCity:userdata.newCity,
//         // newState:userdata.newState,
//         // newCountry:userdata.newCountry,
//         // newPincode:userdata.newPincode
        
//     }).then(res=>{
//         // console.log(res)
//         alert("successful")
    
//         History.push("./profile") // once edit is done successfully will redirect to profile/userdashboard
//     }).catch(error=>{
//         console.log(error)
//         History.push("./Profile")
//         alert("unexpected event occured kindly try again")
     
//     })
// }
// else{   
  
// //   alert("Kindly login");
//   History.push('./profile');
   

// }

    
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
                  
                        <H3 className="usernameFromDb">{details}</H3>
                        <div className="Line1">
                         <label>UserName: </label>
                         <input className='Profileupdate_username' defaultValue={userdata.newUserName} name="newUserName" placeholder='Enter Name' onChange={eventHandler}></input>
                        </div>
                        <div className="Line1">
                        <label>Mobile: </label>
                         <input className='newMobile' name="newMobile" defaultValue={userdata.newMobile} placeholder='Enter mobile number' onChange={eventHandler}></input>
                         </div>
                         <div className="Line1">
                        <label>DOB: </label>
                         <input type="date" name="newDOB" defaultValue={userdata.newDOB} className='Profileupdate_Education' placeholder='DOB' onChange={eventHandler}></input>
                        </div>
                        <div className="Line1">
                        <label>Gender: </label>
                         <input className='newGender' defaultValue={userdata.newGender} name='newGender' placeholder='Gender' onChange={eventHandler}></input>
                         </div>
                        <div className="Line1">
                        <label>Address: </label>
                         <input className='newAdd' name='newLine1' defaultValue={userdata.newLine1} placeholder='Line 1'onChange={eventHandler}></input>
                        </div>
                        <div className="Line1">
                        <label>Address: </label>
                         <input className='newAdd2' name='newLine2' defaultValue={userdata.newLine2} placeholder='Line 2' onChange={eventHandler}></input>
                        </div>
                        <div className="Line1">
                        <label>City: </label>
                         <input className='newCity' defaultValue={userdata.newCity} name="newCity" placeholder='City'onChange={eventHandler}></input>
                        </div>
                        <div className="Line1">
                        <label>State: </label>
                         <input className='state' name='newstate' defaultValue={userdata.newState} placeholder='State'onChange={eventHandler}></input>
                        </div>
                        <div className="Line1">
                        <label>Country: </label>
                         <input className='country' name='newCountry' defaultValue={userdata.newCountry} placeholder='Country'onChange={eventHandler}></input>
                        </div>
                        <div className="Line1">
                        <label>Pin Code: </label>
                         <input className='pin' name='newPincode' defaultValue={userdata.newPincode} placeholder='Pin Code'onChange={eventHandler}></input>
                        </div>
                    </div>
                    <Button className="profile_save" onClick={save}>save</Button>
           
                </div>
            </div>
        </div>
    </section>
        </> );
}