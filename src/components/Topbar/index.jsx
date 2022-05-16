import React from "react";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { theme } from "../../theme";

import {
	TopbarContainer,
	TopbarSearch,
	TopbarActionsContainer,
	TopbarTitle,
	NotificationIndicator,
	TopbarIconContainer,
} from "./styles";

const Topbar = ({ title }) => {
	return (
		<TopbarContainer>
			<TopbarTitle>{title}</TopbarTitle>

			<TopbarActionsContainer>
				<TopbarIconContainer>
					<AiOutlineMail size={26} color={theme.colors.gray_dark} />
					<NotificationIndicator />
				</TopbarIconContainer>
				<TopbarIconContainer>
					<AiOutlineBell size={26} color={theme.colors.gray_dark} />
					<NotificationIndicator />
				</TopbarIconContainer>
				<TopbarSearch placeholder="Search..." />
			</TopbarActionsContainer>
		</TopbarContainer>
	);
};

export default Topbar;
