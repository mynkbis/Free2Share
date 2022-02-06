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
import Checkbox from '@material-tailwind/react/Checkbox';
import Container from 'components/login/Container';
import { useState } from 'react';
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';
import "./Register.css"
import Validation from './Validation';
import axios from "axios"
// import termsCondition from './TermsCondition';

export default function Register() {
    const History=useHistory();
    const[values,setValues]=useState({
        name:"",
        username:"",
        mobile: "",
        password:"",
        cPassword:"",
        check:''
    });

    const [name, setName] = useState("");
    const [username, setUserame] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

      const[errors, setErrors]=useState({});     // for error logging
      
      const setNameInput =(e)=>{
        setName(e.target.value);
      }
      const setUsernameInput =(e)=>{
        setUserame(e.target.value);
      }
      const setMobileInput =(e)=>{
        setMobile(e.target.value);
      }
      const setPasswordInput =(e)=>{
        setPassword(e.target.value);
      }
      const handleChange=(e)=>{
          setValues({
            ...values ,
            [e.target.name]:e.target.value
          })
        
      }

const Submit=(e)=>{  // submit function
            
setErrors(Validation(values));
      //  console.log(values, name, username, password)
    if(name && mobile  && username && password && values.check){
    axios.post("https://soal-capstone-project.herokuapp.com/signup",{
        name: name,
        username: username,
        mobile: mobile,
        password: password
    }).then(function (response) {
      console.log(response);
      alert('Registered Successfully');
      History.push("/login")
    })
      .catch(function (error) {
        console.log(error);
      });

    } // if condition

    setValues({ 
        name:"",
        username:"",
        mobile:"",
        password:"",
        cPassword:"",
        check:''
        })
    } 
    
        
    

    return (
        <Page>
            <DefaultNavbar />
            <Container>
                <Card className="registerCard">
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Sign Up 
                        </H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="text"
                                color="lightBlue"
                                placeholder="Full Name"
                                name="name"
                                defaultValue={values.name}
                                onInput={setNameInput}
                                onChange={handleChange}
                                iconName="account_circle"
                               />
                                {errors.name && <p className='errors'>{errors.name}</p>}

                        </div>

                        <div className="mb-10 px-4">
                            <InputIcon
                                type="text"
                                color="lightBlue"
                                placeholder="Username"
                                iconName="account_circle"
                               />
                              </div>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                                name="username"
                                defaultValue={values.username}
                                onInput={setUsernameInput}
                               onChange={handleChange}
                            />
                            {errors.username && <p className='errors'>{errors.username}</p>}
                        </div>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="text"
                                color="lightBlue"
                                placeholder="Mobile Number"
                                iconName="phone"
                                name="mobile"
                                defaultValue={values.mobile}
                                onInput={setMobileInput}
                               onChange={handleChange}
                            />
                            {errors.mobile && <p className='errors'>{errors.mobile}</p>}
                        </div>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Password"
                                name='password'
                                iconName="lock"
                                defaultValue={values.password}   // target value
                                onInput={setPasswordInput}
                                onChange={handleChange}  // getting new value
                               />

                              {errors.password && <p className='errors'>{errors.password}</p>} 
                        </div>
                        <div className="mb-4 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Confirm Password"
                                name="cPassword"
                                iconName="lock"
                                defaultValue={values.cPassword}
                                onChange={handleChange}
                            />
                            {errors.cPassword && <p className='errors'>{errors.cPassword}</p>} 
                        </div>
                    </CardBody>
                    <div className="mb-4 px-4">
                            <Checkbox
                                color="lightBlue"
                                text="I Accept"
                                name='check'
                                id="remember"
                                onChange={handleChange}
                              />
                               
                         <a href='./TermsCondition'> <span className='Register_TNC' > Terms & Conditions</span></a>   
                        
                         {errors.check && <p className='errors'>{errors.check}</p>} 
                        </div>
                        <Link to='/Login'><span className='Already_login'>Already have an Account !</span></Link>
                    <CardFooter>
                        <div className="flex justify-center">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark" onClick={Submit}>
                                Register
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </Container>
            <SimpleFooter />
        </Page>
    );
}
