import styled from "styled-components";
import { theme } from "../../theme";

export const MenuHeaderContainer = styled.div`
	display: flex;
	align-items: center;
	column-gap: 20px;
	grid-column-gap: 20px;
	padding: 20px;
	margin-bottom: 50px;
`;

export const Avatar = styled.img`
	width: 60px;
	height: 60px;
	object-fit: cover;
	border-radius: 50%;
	border: 3px solid ${theme.colors.primary};
`;

export const Username = styled.h3`
	font-size: 1.2rem;
	font-weight: 600;
	color: #444;
	display: flex;
	flex-direction: column;
	row-gap: 5px;
	grid-row-gap: 5px;
	letter-spacing: 1px;
`;

export const JobTitle = styled.span`
	font-size: 0.8rem;
	font-weight: 600;
	color: ${theme.colors.primary};
	letter-spacing: 1.2px;
`;

export const MenuNavContainer = styled.nav``;

export const MenuNavUL = styled.ul`
	padding: 20px;
`;

export const MenuNavItem = styled.li`
	display: flex;
	transition: all ease-in-out 250ms;
	margin-bottom: 20px;
	& > a {
		padding: 20px;
		display: flex;
		align-items: center;
		column-gap: 8px;
		grid-column-gap: 8px;
		flex: 1;
		position: relative;
		opacity: 0.7;
		color: ${theme.colors.gray_dark};
		text-decoration: none;
		font-size: 1em;
		color: #333;
		transition: all ease-in-out 250ms;
		letter-spacing: 1.2px;
		border-radius: 5px;
		overflow: hidden;
		&::after {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			width: 0px;
			height: 100%;
			background-color: ${theme.colors.primary};
			transition: all ease-in-out 250ms;
		}
	}

	.menu-nav-item__active {
		color: ${theme.colors.primary};
		background-color: ${theme.colors.secondary};
		opacity: 1;
		&::after {
			content: "";
			position: absolute;
			left: 0;
			top: 0;
			width: 4px;
			height: 100%;
			background-color: ${theme.colors.primary};
		}
	}

	&:hover {
		a {
			background-color: ${theme.colors.secondary};
			opacity: 1;
			color: ${theme.colors.primary};
			&::after {
				width: 4px;
			}
		}
	}
`;
