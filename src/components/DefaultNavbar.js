import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button'; 

export default function DefaultNavbar(props) {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <Navbar color="blue" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    {/* <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                    > */}
                        <NavbarBrand><Link to="/">Free 2 Share</Link></NavbarBrand>
                    {/* </a> */}
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            
                            <div className="text-white">
                                <Dropdown
                                    color="white"
                                    size="sm"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <Icon
                                                name="apps"
                                                size="2xl"
                                                color="white"
                                            />
                                            <span className="ml-2">
                                                Menu
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Home
                                        </DropdownItem>
                                    </Link>
                                    {/* <Link to="/profile">
                                        <DropdownItem color="lightBlue">
                                            Profile
                                        </DropdownItem>
                                    </Link> */}
                               {props.flag?<Link to="/login">
                                    <DropdownItem color="lightBlue">Login</DropdownItem> </Link>:
                                    <Link to="/Logout">
                                        <DropdownItem color="lightBlue">  Logout </DropdownItem>  </Link>}
                                          
                                  
                                       

                                    <Link to="/register">
                                        <DropdownItem color="lightBlue">
                                            Register
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/about">
                                        <DropdownItem color="lightBlue">
                                            About Us
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div>
                           
            
                               
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
