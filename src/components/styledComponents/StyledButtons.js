import styled from "styled-components";


const PrimaryButton = styled.button``;



export const SecondaryButton = styled.button`

height: 40px;
width: 130px;

font-size: 10px;

margin: 0px 5px;
padding: 10px 10px;

border-radius: 30px;
border: 1px solid grey;

background-color: white;

box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.07);

:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

    //!!!!!!!Below Code not working. Check later!!!!!!!!!
    // background-color: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    // font-color: white;
}

`;