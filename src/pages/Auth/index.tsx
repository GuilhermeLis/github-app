import React, { useState } from 'react';

import { 
    Container, 
    ButtonInnerContainer, 
    ButtonText, 
    GitHubIcon, 
    Input,
    NextIcon
} from './styles';

const Auth: React.FC = () => {
    const [userName, userNameOnChange] = useState('');
  return (
  <Container>
    <GitHubIcon />
    <Input 
        value={userName}
        onChangeText={userNameOnChange}
    />
    <ButtonInnerContainer>
        <ButtonText>
            ENTRAR
        </ButtonText>
        <NextIcon />
    </ButtonInnerContainer>
  </Container>
)
};

export default Auth;
