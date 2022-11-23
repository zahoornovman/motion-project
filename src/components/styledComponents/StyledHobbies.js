import styled from 'styled-components';

export const StyledHobbies = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
    margin: 16px 0px;
    box-sizing: border-box;
`;

export const StyledHobbiesIcon = styled.button`
    height: 32px;
    /* width: 83px; */

    border: 1px solid lightgray;
    border: none;
    border-radius: 18px;

    background: #00000010;
    mix-blend-mode: normal;

    margin: 10px 5px;
    padding: 3px 20px;

    box-sizing: content-box;

    font-size: 14px;
`;
