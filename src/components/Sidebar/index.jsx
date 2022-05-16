import React from "react";
import { NavLink } from "react-router-dom";
import {
	MdOutlineDashboard,
	MdOutlineAnalytics,
	MdPeopleOutline,
	MdSettingsApplications,
} from "react-icons/md";

import {
	Avatar,
	JobTitle,
	MenuHeaderContainer,
	MenuNavContainer,
	MenuNavItem,
	MenuNavUL,
	Username,
} from "./styles";

const Sidebar = () => {
	const image_url = "https://randomuser.me/api/portraits/men/9.jpg";

	return (
		<>
			<MenuHeaderContainer>
				<Avatar src={image_url} alt="Profile Pic" />
				<Username>
					@christos.tsm
					<JobTitle>Front-end Developer</JobTitle>
				</Username>
			</MenuHeaderContainer>
			<MenuNavContainer>
				<MenuNavUL>
					<MenuNavItem>
						<NavLink
							className={({ isActive }) =>
								isActive ? "menu-nav-item__active" : undefined
							}
							to="/"
						>
							<MdOutlineDashboard size={18} />
							Dashboard
						</NavLink>
					</MenuNavItem>
					<MenuNavItem>
						<NavLink
							className={({ isActive }) =>
								isActive ? "menu-nav-item__active" : undefined
							}
							to="/metrics"
						>
							<MdOutlineAnalytics size={18} />
							Metrics
						</NavLink>
					</MenuNavItem>
					<MenuNavItem>
						<NavLink
							className={({ isActive }) =>
								isActive ? "menu-nav-item__active" : undefined
							}
							to="/team"
						>
							<MdPeopleOutline size={18} />
							Team
						</NavLink>
					</MenuNavItem>
					<MenuNavItem>
						<NavLink
							className={({ isActive }) =>
								isActive ? "menu-nav-item__active" : undefined
							}
							to="/settings"
						>
							<MdSettingsApplications size={18} />
							Settings
						</NavLink>
					</MenuNavItem>
				</MenuNavUL>
			</MenuNavContainer>
		</>
	);
};

export default Sidebar;
