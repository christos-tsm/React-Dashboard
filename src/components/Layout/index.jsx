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
			<SidebarContainer>
				<Sidebar />
			</SidebarContainer>
			<PageContentContainer>{children}</PageContentContainer>
		</LayoutContainer>
	);
};

export default Layout;
