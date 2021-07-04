import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.primaryOne};
    padding: 0 20px;
`;

export const TextDefault = styled.Text`
    font-size: 20px;
    color: black;
`;

export const GitHubIcon = styled(Icon).attrs({
    name: 'github',
    size: 96,
})`
    color: ${({ theme }) => theme.colors.primaryTwo};
`;

export const Input = styled.TextInput`
    margin: 20px 0;
    background: ${({ theme }) => theme.input.background};
    border: 1px solid ${({ theme }) => theme.input.border};
    padding: 17px 20px;
    border-radius: 12px;
    height: 56px;
    width: 100%;
    font-size: 20px;
`;

export const ButtonContainer = styled.TouchableWithoutFeedback``;

export const ButtonInnerContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${({ theme }) => theme.button.background};
    height: 56px;
    border-radius: 12px;
`;

export const ButtonText = styled.Text`
    color: ${({ theme }) => theme.button.textColor};
    font-size: 20px;
    font-weight: bold;
`;

export const NextIcon = styled(Icon).attrs({
    name: 'arrow-right',
    size: 18,
})`
    margin: 0 0 0 13px;
`;
