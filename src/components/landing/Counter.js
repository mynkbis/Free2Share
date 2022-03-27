import H4 from '@material-tailwind/react/Heading4';
import LeadText from '@material-tailwind/react/LeadText';
import axios from 'axios';
import { useState } from 'react';

export default function Counter() {

    const [UserCount, setUserCount] = useState("0");
    const [CommunityCount, setCommunityCount] = useState("0");
    const [PostCount, setPostCount] = useState("0");
    if(UserCount === "0"){
    axios.get("https://soal-capstone-project.herokuapp.com/getUserCount", {
    
      }).then(function (response) {
        //console.log(response.data.UserCount);
        setUserCount(response.data.UserCount);
      })
        .catch(function (error) {
          console.log(error);
        });
      }
      if(PostCount === "0"){
        axios.get("https://soal-capstone-project.herokuapp.com/getPostCount", {
        
          }).then(function (response) {
            //console.log(response.data.PostCount);
            setPostCount(response.data.PostCount);
          })
            .catch(function (error) {
              console.log(error);
            });
          }
          if(CommunityCount === "0"){
            axios.get("https://soal-capstone-project.herokuapp.com/getCommunityCount", {
            
              }).then(function (response) {
                //console.log(response.data.CommunityCount);
                setCommunityCount(response.data.CommunityCount);
              })
                .catch(function (error) {
                  console.log(error);
                });
              }

    return (
        <div className=" flex content-center items-center justify-center">
           
                            <LeadText color="gray-100">
                             
                            <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                               {UserCount}
                                            </span>
                                            <span className="text-sm text-gray-700">
                                                Users
                                            </span>
                                        </div>
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            {CommunityCount}
                                            </span>
                                            <span className="text-sm text-gray-700">
                                                Communities
                                            </span>
                                        </div>
                                        <div className="lg:mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            {PostCount}
                                            </span>
                                            <span className="text-sm text-gray-700">
                                                Posts
                                            </span>
                                        </div>
                                    </div>
                                </div>


                            </LeadText>
                        </div>
          
    
    );
}
