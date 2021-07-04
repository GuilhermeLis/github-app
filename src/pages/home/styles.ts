import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

const rightMargin = 24;

export const Container = styled(SafeAreaView)`
    flex: 1;
    background: ${({ theme }) => theme.colors.primaryOne};
`;

export const Profile = styled.Image`
    height: 115px;
    width: 115px;
    align-self: center;
    margin: 25px 0 0 0;
    border-radius: 100px;
    border-width: 3px;
    border-color: ${({ theme }) => theme.colors.white};
`;

export const TopContainer = styled.View`
    height: 126px;
    width: 100%;
    background: ${({ theme }) => theme.colors.primaryThree};
    margin: 0 0 106px 0;
`;

export const TopInnerContainer = styled.View`
    padding: 23px 11px 0;
    flex-direction: row;
    justify-content: space-between;
`;

export const TopUsername = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 17px;
    font-weight: bold;
`;

export const LogOutButton = styled.TouchableWithoutFeedback``;

export const LogOutContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LogOutText = styled.Text`
    color: ${({ theme }) => theme.colors.secundaryOne};
    font-size: 17px;
`;

export const LogOutIcon = styled(Icon).attrs({
    name: 'sign-out',
    size: 13,
})`
    margin: 0 0 0 17px;
    color: ${({ theme }) => theme.colors.error};
`;

export const NameContainer = styled.View`
    flex-direction: row;
`;

export const Mark = styled.View`
    height: 42px;
    width: 10px;
    background: ${({ theme }) => theme.colors.primaryTwo};
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
`;

export const Name = styled.Text`
    font-size: 26px;
    margin: 0 0 0 ${rightMargin - 10}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
`;

export const Email = styled.Text`
    font-size: 18px;
    margin: 0 0 0 ${rightMargin}px;
    color: ${({ theme }) => theme.colors.secundaryOne};
`;

export const Localization = styled.Text`
    font-size: 18px;
    margin: 0 0 0 ${rightMargin}px;
    color: ${({ theme }) => theme.colors.secundaryOne};
`;

export const InfoContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.sedundaryTwo};
    padding: 12px 17px;
    margin: 44px 0 47px;
`;

export const InfoItemContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

export const NumberInfoItem = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
`;

export const TitleInfoItem = styled.Text`
    font-size: 17px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.secundaryOne};
`;

export const BioDescription = styled.Text`
    font-size: 18px;
    margin: 0 0 0 ${rightMargin}px;
    color: ${({ theme }) => theme.colors.secundaryOne};
`;
