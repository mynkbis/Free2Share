import Button from '@material-tailwind/react/Button';
import Header from 'components/profile/Header';
import H3 from '@material-tailwind/react/Heading3';
import "./Register.css"
import { useHistory } from "react-router";
import { useState } from 'react';


export default function ProfileEditting() {
    const History=useHistory();
    const[name,setName]=useState('');
    const[image,setImage]=useState('');
    const[hobbies,SetHobbies]=useState('');
    const[dob,setDob]=useState('');
    const[address,setAddress]=useState({
        line1:"line1",
        line2:"line2",
        city:"city",
        state:"state",
        country:"country",
        pin_code:"pin_code",
        });

    const[gender,setGender]=useState("");




  const save=()=>{
History.push("./profile")
  }
    
    return (<>
    <Header/>
    
        <section className="relative py-16 bg-gray-100">
             <div className="container max-w-7xl px-4 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                     <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                         <span>Select Profile pic  <input type="file"></input> </span>                                                                          
                          </div>
                          </div>
                  <div className="text-center my-8">
                        <H3 color="gray">Test User</H3>
                        <div className="mt-0 mb-2 text-gray-700 font-medium flex items-center justify-center gap-2">
                         <label>UserName:</label>
                         <input className='Profileupdate_username' placeholder='Enter Name'></input>
                        </div>
                        <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                        <label>Occupation:</label>
                         <input className='Profileupdate_Occupation' placeholder='Enter profession'></input>
                           
                        </div>
                        <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                        <label>Hobbies:</label>
                         <input className='Profileupdate_Education' placeholder='Enter Hobbies'></input>
                        </div>
                        <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                        <label>Address:</label>
                         <input className='Profileupdate_Address' placeholder='Enter Address'></input>
                        </div>
                    </div>
<Button className="profile_save" onClick={save}>save</Button>
           
                </div>
            </div>
        </div>
    </section>
        </> );
}