import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Button from '@material-tailwind/react/Button';
import DefaultNavbar from 'components/DefaultNavbar';
import SimpleFooter from 'components/SimpleFooter';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import "./Register.css"
import { Input, Label } from '@material-tailwind/react';

export default function ResetPassword(){
   

    const Reset=()=>{

    }

     return (<>
        <Page>
            <DefaultNavbar />
            <Container>
            <div className='forgetpass_background'>
                               <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                        Reset Password
                        </H5>
                        <p>{"User"}</p>
                    </CardHeader>
                  
                    <CardBody>
                        {/* <div className="mb-12 px-4 bg-bb">
                            <InputIcon
                                type="email"
                                color="lightBlue"
                                placeholder="Email Address"
                                iconName="email"
                                name="forgetpass"
                                disabled
                                // defaultValue={username}
                                // onChange={(e)=>setUsername(e.target.value)}
                                />   
                             </div> */}
                             <div className="mb-4 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Password"
                                name='password'
                                iconName="lock"
                                // defaultValue={values.password}   // target value
                                // onInput={setPasswordInput}
                                // onChange={handleChange}  // getting new value
                               /> 
                               </div>
                               <div className="mb-4 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Confirm Password"
                                name='password'
                                iconName="lock"
                                // defaultValue={values.password}   // target value
                                // onInput={setPasswordInput}
                                // onChange={handleChange}  // getting new value
                               /> 
                               </div>
                               <div className="mb-4 px-4">
                            <InputIcon
                                type="integer"
                                color="lightBlue"
                                placeholder="OTP"
                                name='OTP'
                                iconName="phone"
                               /> 
                               </div>
                               </CardBody>
                
                        <div className="flex justify-center bg-bb">
                            <Button
                                color="lightBlue"
                                buttonType="link"
                                size="lg"
                                ripple="dark" 
                                onClick={Reset}                                                                                                                 
                                >                            
                                Save
                            </Button>
                        </div>
                        </div>   
            </Container>
            <SimpleFooter />
        </Page>
        </> 
        );
}
