import styled from 'styled-components';

export const StyledButton = styled.button`
    height: 40px;
    width: 120px;
    font-size: 10px;
    border-radius: 30px;
    border: 1px solid grey;
    background-color: white;
    text-transform: uppercase;

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
`;

export const PrimaryButton = styled(StyledButton)`
    border: none;
    color: white;
    background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
`;

export const SecondaryButton = styled(StyledButton)`
    width: 120px;
`;

export const LoginButton = styled(PrimaryButton)`
    width: 288px;
    height: 60px;
    font-size: 12px;
`;

export const PrimaryCircularButton = styled(PrimaryButton)`
    border-radius: 50%;
    width: 40px;
`;

export const SecondaryCircularButton = styled(SecondaryButton)`
    border-radius: 50%;
    width: 40px;
    border: none;
    background: #00000010;
`;
