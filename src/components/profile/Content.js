import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from 'assets/img/team-2-800x800.jpg';
import { Link, useHistory } from "react-router-dom";
// import EditIcon from '@mui/icons-material/Edit';
// const user=getuser();
import axios from "axios"   
import { useEffect, useState } from 'react';
import Login from 'pages/Login';
import authHeader from 'authHeader';


export default function Content(props) {
let History=useHistory();
const userid=(localStorage.getItem('userId'))

// const [usersData, setUsersData]=useState([]);
// const[username,setUsername]=useState('');

const [userDetails, setUserDetails]=useState({    
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
    newHobbies:"",
    newRoles:"",
    newUser_status:"",
    newcreatedAt:"",
    newUpdatedAt:"",
    newEmail:"",
    newEmailStatus:"",})


    axios.get("https://soal-capstone-project.herokuapp.com/getUserDetails",{
        headers : authHeader()
    }).then(res=>{
        (sessionStorage.setItem("Name-is", res.data.name))
        setUserDetails({
            newUserName:res.data.name,
            newMobile:res.data.mobile,
            newDOB:res.data.birth_date,
            newGender:res.data.gender,
            newLine1:res.data.location,
            // newLine2:res.data.name,
            // newCity:res.data.name,
            // newState:res.data.name,
            // newCountry:res.data.name,
            // newPincode:res.data.name,
            
            newHobbies:res.data.hobbies,
            newRoles:res.data.roles,
            newUser_status:res.data.user_status,
            newcreatedAt:res.data.createdAt,
            newUpdatedAt:res.data.updatedAt,
            newEmail:res.data.email,
            newEmailStatus:res.data.email_status

        })
        
        // console.log("tryinggg", userDetails)
        // console.log("from database",res)
    }).catch(error=>{
        alert("Something went wrong try again")
// console.log(error)  
    })
const [UserMatter,setUserMatter]=useState('');


const editProfile=()=>{
   History.push('./profileUpdate')  // will redirect to edit page
  
    }
     
    const backtoDashboard=()=>{
// console.log("user dashbooard"); // will be linked to user dashboard for now landing/home page
History.push('/UserDashboardPage')
    }

    const logOut=(props)=>{
        localStorage.clear();
        // localStorage.removeItem("AccessToken")
        // localStorage.removeItem("userID"); 
        // localStorage.removeItem("userId");  // once logout it will delete/clear the local storage data
History.push('./login')
    }

    return (
      
        <section className="relative py-16 bg-gray-100">
                 <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-40 -mt-20">
                                        <Image
                                            src={ProfilePicture}
                                            alt="Profile picture"
                                            raised
                                            rounded
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='Edit_btn'>
                          
                                </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                                
                                <Button color="lightBlue" ripple="light"
                                onClick={backtoDashboard}>
                                    back
                                </Button>
                                <Button color="lightBlue" ripple="light"
                                onClick={editProfile}>
                                    Edit
                                </Button>
                                 <Button color="lightBlue" ripple="light"
                                onClick={logOut}>
                                    Signout
                                    </Button> 
                            </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    {/* <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            22
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Friends
                                        </span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            10
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Photos
                                        </span>
                                    </div>
                                    <div className="lg:mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            89
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Comments
                                        </span>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="text-center my-8">
                        <H3 color="gray">{userDetails.newUserName}</H3>
                            
                        <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                             <Icon name="male/female" size="xl" /> Gender: {userDetails.newGender}
                            </div>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="" size="xl"/>Birthday: {userDetails.newDOB}
                            </div>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="phone" size="xl" />
                                {userDetails.newMobile}
                            </div>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="email" size="xl" />
                                {userDetails.newEmail}: {userDetails.newEmailStatus}
                            </div>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="face" size="xl" /> Role: {userDetails.roles}
                            </div>
                         
                           <div className="mt-0 mb-2 text-gray-80 font-medium flex items-center justify-center gap-2">
                                <Icon name="" size="xl" />User Status: <strong>{userDetails.newUser_status}</strong>
                            </div>
                             <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="edit" size="xl" /> Hobbies: {userDetails.newHobbies}
                            </div>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="create" size="xl" />Created At: {userDetails.newcreatedAt}
                            </div>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="update" size="xl" /> Last Updated: {userDetails.newUpdatedAt}
                            </div>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="map" size="xl" /> Address: {userDetails.newLine1}, {userDetails.newLine2}, {userDetails.newCity}, {userDetails.newCountry}, {userDetails.newPincode}
                            </div>
                          
                                
                        </div>

                      
                    </div>
                </div>
              
            </div>
        </section>
    );
}