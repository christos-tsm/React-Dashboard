import styled from "styled-components";
import { theme } from "../../theme";

export const SidebarContainer = styled.div`
	width: 300px;
	/* background-color: ${theme.colors.primary}; */
`;

export const PageContentContainer = styled.div`
	flex: 1;
	background-color: ${theme.colors.primary_light};
	padding: 20px;
`;

export const LayoutContainer = styled.div`
	display: flex;
	height: 100vh;
`;
