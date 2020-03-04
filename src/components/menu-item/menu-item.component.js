import React from "react";
import { withRouter } from "react-router-dom";

import {
	MenuItemContainer,
	BackgroundImageContainer,
	ContentContainer,
	ContentSubtitle,
	ContentTitle
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => (
	<MenuItemContainer
		size={size}
		onClick={() => history.push(`/shop/${linkUrl}`)}
	>
		<BackgroundImageContainer imageUrl={imageUrl} />
		<ContentContainer>
			<ContentTitle>{title.toUpperCase()}</ContentTitle>
			<ContentSubtitle>SHOP NOW</ContentSubtitle>
		</ContentContainer>
	</MenuItemContainer>
);

export default withRouter(MenuItem);
