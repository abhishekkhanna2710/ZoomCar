import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { json, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./SideBar";

import style from "../Host/Earning.module.css";



let user = JSON.parse(localStorage.getItem("loggedInUser")) || { "name": "Login" };

const links = [
    {
        path: "/HostingPage",
        title: "Become a Host"
    },

]

const links2 = [
    {
        path: "/ZMS",
        title: "ZMS"
    },
    {
        path: "/login",
        title: user.name
    }

]




function HomeNavbar() {

    // NAVBAR SCROLL CHANGE COLOR FUNCTION 
    // AND ADD CONDTIONAL STATEMENT IN CLASSNAME TAG YOU CAN SEE 
    // IN STACK FRAG I USED ({colorChange ? 'Navbar colorChange' : 'Navbar '}) THIS CONDTION


    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 2 && window.scrollY <= 720) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    useEffect(() => {
        changeNavbarColor()
        window.addEventListener('scroll', changeNavbarColor);
        // document.getElementById("userName")
        var Datanav = JSON.parse(localStorage.getItem("loggedInUser")) || { "name": "Login" }
        document.getElementById("userName").innerText = Datanav.name;
    })




    return (
        <>
            <nav>
                {/* <Box className={show ? 'nav' : 'nav__show'} > */}
                <Box className={colorChange ? 'HNavbar' : 'HNavbar '} width="100%" margin="auto" >

                    <Box w="100%" backgroundColor="black" height="60px"
                    // border="solid red 1px" 
                    >
                        <Flex justifyContent="space-around">
                            <Flex w="75%" alignItems='center' marginTop="10px"
                                // border="solid red 1px" 
                                justifyContent="space-between" >
                                <NavLink to="/">
                                    <Box style={{ display: "flex" }} >
                                        <Sidebar />
                                        <Img className={style.logo}  src="https://www.zoomcar.com/build/98e56e8b0b91e8806885a22ac2bf69a7.png" />
                                    </Box>
                                </NavLink>

                                <Box>
                                    {links.map((link) => (
                                        <NavLink key={link.path} to={link.path}>
                                            <Button color="white" background="#EB324B" padding="6px 8px" className="NavbarHover" fontSize='1.2vw' borderRadius="10px">
                                                {/* <Img src="https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg" /> */}
                                                {link.title}
                                            </Button>
                                        </NavLink>


                                    ))}
                                </Box>
                            </Flex>
                            <Box w="20%">
                                <Flex w="100%" alignItems='center' gap={20} marginTop="15px"
                                    justifyContent="space-around" >


                                    {
                                        links2.map((link, ind) => {
                                            var ids = "uwsgwdxbedcgbu";
                                            if (ind === 1) {
                                                ids = "userName"
                                            }
                                            return <NavLink key={link.path} to={link.path}>
                                                <Text id={ids} color="white" className="NavbarHover" fontSize='1.3vw' fontWeight="700">{link.title}</Text>
                                            </NavLink>
                                        }

                                        )
                                    }


                                </Flex>
                            </Box>

                        </Flex>
                    </Box>

                </Box>
                {/* </Box> */}
            </nav>
        </>
    )
}

export default HomeNavbar;