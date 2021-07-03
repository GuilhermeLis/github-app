import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
    background:  ${({ theme }) => theme.colors.primaryOne};
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
