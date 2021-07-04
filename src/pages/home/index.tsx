import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultRootState } from '~/store/@types';
import {
    BioDescription,
    Container,
    Email,
    InfoContainer,
    InfoItemContainer,
    Localization,
    LogOutButton,
    LogOutContainer,
    LogOutIcon,
    LogOutText,
    Mark,
    Name,
    NameContainer,
    NumberInfoItem,
    Profile,
    TitleInfoItem,
    TopContainer,
    TopInnerContainer,
    TopUsername,
} from './styles';

const Home: React.FC = () => {
    const { username, photo, name, email, location, followers, following, repos, bio } =
        useSelector((state: DefaultRootState) => state.user);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch({ type: 'SIGN_OUT' });
    };

    return (
        <Container>
            <TopContainer>
                <TopInnerContainer>
                    <TopUsername>#{username}</TopUsername>
                    <LogOutButton onPress={logout}>
                        <LogOutContainer>
                            <LogOutText>Sair</LogOutText>
                            <LogOutIcon />
                        </LogOutContainer>
                    </LogOutButton>
                </TopInnerContainer>
                <Profile source={{ uri: photo }} />
            </TopContainer>

            <NameContainer>
                <Mark />
                <Name>{name}</Name>
            </NameContainer>
            <Email>{email || 'E-mail privado'}</Email>
            <Localization>{location}</Localization>

            <InfoContainer>
                <InfoItemContainer>
                    <NumberInfoItem>{followers}</NumberInfoItem>
                    <TitleInfoItem>Seguidores</TitleInfoItem>
                </InfoItemContainer>
                <InfoItemContainer>
                    <NumberInfoItem>{following}</NumberInfoItem>
                    <TitleInfoItem>seguindo</TitleInfoItem>
                </InfoItemContainer>
                <InfoItemContainer>
                    <NumberInfoItem>{repos}</NumberInfoItem>
                    <TitleInfoItem>repositórios</TitleInfoItem>
                </InfoItemContainer>
            </InfoContainer>
            <NameContainer>
                <Mark />
                <Name>Bio</Name>
            </NameContainer>
            <BioDescription>{bio}</BioDescription>
        </Container>
    );
};

export default Home;
