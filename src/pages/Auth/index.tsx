import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultRootState } from '~/store/@types';
import {
    ButtonContainer,
    ButtonInnerContainer,
    ButtonText,
    Container,
    GitHubIcon,
    Input,
    NextIcon,
} from './styles';

const Auth: React.FC = () => {
    const [username, setUsername] = useState('');
    const { loadingButton } = useSelector((state: DefaultRootState) => state.auth);
    const dispatch = useDispatch();
    const singIn = () => {
        dispatch({ type: 'SIGN_IN_REQUEST', username });
    };
    return (
        <Container>
            <GitHubIcon />
            <Input value={username} onChangeText={setUsername} />
            <ButtonContainer onPress={singIn}>
                <ButtonInnerContainer>
                    {loadingButton ? (
                        <ButtonText>ENTRAR</ButtonText>
                    ) : (
                        <Fragment>
                            <ButtonText>ENTRAR</ButtonText>
                            <NextIcon />
                        </Fragment>
                    )}
                </ButtonInnerContainer>
            </ButtonContainer>
        </Container>
    );
};

export default Auth;
