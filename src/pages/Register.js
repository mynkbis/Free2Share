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
import Alert from "@material-tailwind/react/Alert";


export default function Register() {

    const Submit=()=>{

                alert("You have successfully registered")
        console.log('registered')
     
    }
    return (
        <Page>
            <DefaultNavbar />
            <Container>
                <Card>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Register
                        </H5>
                    </CardHeader>

                    <CardBody>
                        <div className="mb-10 px-4">
                            <InputIcon
                                type="text"
                                color="lightBlue"
                                placeholder="Full Name"
                                iconName="account_circle"
                               
                            />
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
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Password"
                                iconName="lock"
                            />
                        </div>
                        <div className="mb-4 px-4">
                            <InputIcon
                                type="password"
                                color="lightBlue"
                                placeholder="Confirm Password"
                                iconName="lock"
                            />
                        </div>
                    </CardBody>
                    <div className="mb-4 px-4">
                            <Checkbox
                                color="lightBlue"
                                text="I accept"
                                id="remember"
                          required  />
                        </div>
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
