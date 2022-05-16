import React from "react";
import Sidebar from "../Sidebar";
import {
	LayoutContainer,
	PageContentContainer,
	SidebarContainer,
} from "./styles";

const Layout = ({ children }) => {
	return (
		<LayoutContainer>
			<SidebarContainer className="sidebar__container">
				<Sidebar />
			</SidebarContainer>
			<PageContentContainer className="page-content__container">
				{children}
			</PageContentContainer>
		</LayoutContainer>
	);
};

export default Layout;
