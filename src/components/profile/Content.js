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

export default function Content(props) {
let History=useHistory();
const [usersData, setUsersData]=useState([]);
const[username,setUsername]=useState('');
const editProfile=()=>{
   History.push('./profileUpdate')  // will redirect to edit page
  
    }
     
    const backtoDashboard=()=>{
console.log("user dashbooard"); // will be linked to user dashboard for now landing/home page
History.push('./landing')
    }

    const logOut=(props)=>{
        localStorage.removeItem("AccessToken")
        localStorage.removeItem("userID");   // once logout it will delete/clear the local storage data
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
                            <Button color="lightBlue" ripple="light"
                                onClick={editProfile}>
                                    Edit
                                </Button>
                                </div>
                            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:self-center flex justify-center mt-10 lg:justify-end lg:mt-0">
                                
                                <Button color="lightBlue" ripple="light"
                                onClick={backtoDashboard}
                                >
                                    back
                                </Button>
                                 <Button color="lightBlue" ripple="light"
                                onClick={logOut}
                                >
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
                            <H3 color="gray">Test User</H3>
                            <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                                <Icon name="place" size="xl" />
                                Los Angeles, California
                            </div>
                            <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                                <Icon name="work" size="xl" />
                                Solution Manager - Creative Tim Officer
                            </div>
                            <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                                <Icon name="account_balance" size="xl" />
                                University of Computer Science
                            </div>
                        </div>

                      
                    </div>
                </div>
            </div>
        </section>
    );
}