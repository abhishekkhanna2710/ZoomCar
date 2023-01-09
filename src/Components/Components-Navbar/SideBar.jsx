
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
// import { SidebarData } from "./SidebarData";
// import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import SubMenu from "./SubMenu";
import { SidebarData } from "./SideBarData";


const Nav = styled.div`


display: flex;
justify-content: flex-start;
align-items: center;
margin-right: 20px
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 1.6rem;

display: flex;
justify-content: flex-start;
align-items: center;

`;

// side bar css 

const SidebarNav = styled.nav`
width: 350px;
height: 65vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
position:absolute;
z-index:555;
background: white;
margin-top: 60px

`;

const SidebarWrap = styled.div`
width: 100%;

`;

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavIcon to="#">
						<FaIcons.FaBars onClick={showSidebar} />
					</NavIcon>

					{/* NEW NAVBAR CODE START */}



					{/* NEW NAVBAR CODE END */}

				</Nav>
			</IconContext.Provider>

			{/* INSIDE SIDE BAR CODE AND CSS */}

			<IconContext.Provider value={{
				color: "black"
			}}>
				<SidebarNav sidebar={sidebar} onClick={showSidebar}>
					<SidebarWrap>

						{/* cross sign code */}

						{/* <NavIcon to="#">
			<AiIcons.AiOutlineClose onClick={showSidebar} />
			</NavIcon> */}

			{/* {SidebarData[0]} */}

						{SidebarData.map((item, index) => {
							return <SubMenu item={item} key={index} />;
						})}
					</SidebarWrap>
				</SidebarNav>
			</IconContext.Provider>

		</>
	);
};

export default Sidebar;
