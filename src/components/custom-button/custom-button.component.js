import React from 'react';

import { ButtonStyleContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
    <ButtonStyleContainer {...props} >
      {children}
    </ButtonStyleContainer>
);

export default CustomButton;