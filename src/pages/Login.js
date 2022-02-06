import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import Label from "@material-tailwind/react/Label";
import { useEffect, useState } from 'react';
import "./Register.css"
import { useHistory } from "react-router-dom";
import axios from "axios"
import ForgetPassword from './forgetPassword';

export default function Login() {
    const History=useHistory();
const [error, setError]=useState(null);
const [loading, setLoading]=useState(false);

const [value, SetValue]=useState({
    username:"",
    password:""
});
const handleChange = (e) =>{
    SetValue({
        ...value ,
        [e.target.name]:e.target.value
      })
}
const [usersData, setUserData]=useState([]);



const handleLogin=(prop)=>{
setError(null);
setLoading(true);
// console.log(value.username,value.password);
axios.post("https://soal-capstone-project.herokuapp.com/signin",{
    username: value.username,
    password: value.password
}).then(function (response) {
    console.log(response); // raw data
    setLoading(false);
    alert('signin Successfully');  
  localStorage.setItem("AccessToken",response.data.accessToken)
  localStorage.setItem("userID",response.data.id)
  console.log("for edit")// only required data
    History.push("/userDashboard");      // need to update on later stage once user dashboard is ready
    setUserData(response.data);
})
    .catch(function (error) {
      console.log(error);
    });

 }
    return (
        <Page>
            <DefaultNavbar />
            <Container>
          
                <Card className="loginCard">
              
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Login
                        </H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-12 px-4 bg-bb">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                                name="username"
                                defaultValue={value.username}
                                onChange={handleChange}
                                
                            />
                        </div>
                        <div className="mb-8 px-4">
                            <InputIcon 
                                type="password"
                                color="lightBlue"
                                placeholder="Password"
                                iconName="lock"
                                name="password"
                                defaultValue={value.password}
                                onChange={handleChange}
                            />
                            {error && <p className='error_login'>{error}</p>}
                        </div>
                        <div className="mb--4 px-4">
                       <a href='./ForgetPassword'> <Label color="lightBlue">Forget password</Label></a> 
                       {/* <Link to ={'./forgetPassword.js'}>Forget Password</Link> */}
                       </div>
                       <div class="Forget_already">
                       <a href='./Register'>Create an Account !</a>
                                               </div>
                    </CardBody>
                    <CardFooter>
                        <div className="flex justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark"
                                value={loading ? "Loading...":"Login"}
                           onClick={handleLogin}
                            >  Login
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </Container>
            <SimpleFooter/>
            </Page>
    );
}
