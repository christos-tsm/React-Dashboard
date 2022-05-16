import styled from "styled-components";
import { theme } from "../../theme";

export const TopbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const TopbarTitle = styled.h1`
	font-size: 2rem;
	font-weight: 600;
	color: ${theme.colors.gray_dark};
`;

export const TopbarActionsContainer = styled.div`
	display: flex;
	align-items: center;
	column-gap: 30px;
	grid-column-gap: 30px;
`;

export const TopbarIconContainer = styled.div`
	position: relative;
	display: flex;
	cursor: pointer;
`;

export const NotificationIndicator = styled.span`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ primary, secondary }) =>
		primary
			? theme.colors.primary
			: secondary
			? theme.colors.secondary
			: theme.colors.tertiary};
	color: ${({ primary, secondary }) =>
		primary
			? theme.colors.gray_light
			: secondary
			? theme.colors.gray_dark
			: "#fff"};
	position: absolute;
	font-size: 10px;
	line-height: 0;
	top: -5px;
	right: -8px;
`;

export const TopbarSearch = styled.input`
	padding: 15px;
	min-width: 350px;
	border: 1px solid ${theme.colors.primary_light};
	border-radius: 10px;
	outline: none;
	box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0);
	transition: all ease-in-out 250ms;

	&:focus {
		box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.05);
		transform: scale(1.01);
	}
`;
