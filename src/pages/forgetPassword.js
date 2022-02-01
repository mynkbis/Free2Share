import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import { useState } from 'react';
import "./Register.css"
import { useHistory } from "react-router-dom";
import axios from "axios"
import { Label } from '@material-tailwind/react';
import { isConditionalExpression } from 'typescript';

export default function ForgetPassword(props) {
    const History=useHistory();

   const[username,setUsername]=useState('');
   const[otp_pass_field,setOtp_pass_field_active]=useState('');
   const[otp,setOTP]=useState('');
   const[newpassword,setNewpassword]=useState('');
   const[userid,setUserid]=useState('');

   const SubmitDetails=(e)=>{ 
       e.preventDefault();
   
    const data={username};
    if(data && !otp){
    axios.post("https://soal-capstone-project.herokuapp.com/resetPassword",{
    username: username,
    
}).then(function (response) {
    console.log(response);
      alert("Reset Email has been sent");
      setUserid(response.data.id);
      console.log(userid);
      setOtp_pass_field_active("active");
    //History.push("/Login");      // need to update on later stage once user dashboard is ready
  })
    .catch(function (error) {
      console.log(error);
      alert("Invalid Details Entered!!!")
    });
  }
  else if(data && otp){
             
              axios.post(`https://soal-capstone-project.herokuapp.com/resetPassword/${userid}/${otp}`,{
                username: username,
                password: newpassword
                
            }).then(function (response) {
                console.log(response); 
                  alert("OTP Verified and password has been changed.");
                  setOtp_pass_field_active("active");
                History.push("/Login");      // need to update on later stage once user dashboard is ready
              })
                .catch(function (error) {
                  console.log(error);
                  alert("Invalid Details Entered!!!")
                });  

  }
  else{
    alert("Please enter email address.")
  }
 
  }




    return (<>
        <Page>
            <DefaultNavbar />
            <Container>
            <div className='forgetpass_background'>
                               <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                        Forget Password
                        </H5>
                    </CardHeader>
                  
                    <CardBody>
                        <div className="mb--12 px-4 bg-bb">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                                name="forgetpass"
                                defaultValue={username}
                                onChange={(e)=>setUsername(e.target.value)}
                                /> 
                             </div>
                             <br />
                             <div className="mb-8 px-4" style={{display: otp_pass_field ? 'block' : 'none'}}>
                             <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Enter OTP"
                                iconName="lock"
                                name="otp"
                                defaultValue={otp}
                                onChange={(e)=>setOTP(e.target.value)}
                                />   
                                </div>
                                <div className="mb-8 px-4" style={{display: otp_pass_field ? 'block' : 'none'}}>
                             <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Enter new password"
                                iconName="lock"
                                name="newpassword"
                                defaultValue={newpassword}
                                onChange={(e)=>setNewpassword(e.target.value)}
                                />   
                                </div>
                             <div className="Forget_email">
                             <Label  color="orange">Enter your registered email </Label>        
                             </div>
                               </CardBody>
                
                        <div className="flex justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark" 
                                onClick={SubmitDetails}                                                                                                                 
                                >                            
                                Submit
                            </Button>
                        </div>
                        </div>   
            </Container>
            <SimpleFooter />
        </Page>
        </> 
        );
}
