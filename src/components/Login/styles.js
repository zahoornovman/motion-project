import styled from "styled-components";

import BackGround from "../../assets/images/background_image.png";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const ContainerLeft = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 40%;
  background-image: url(${BackGround}),
    linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
  background-blend-mode: multiply, normal;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
`;

export const ContainerLeftTop = styled.div`
  height: 50%;
  width: 100%;
`;

export const ContainerLeftBottom = styled.div`
  height: 50%;
  width: 100%;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const ContainerRightTop = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;

margin-top: 40px;
margin-right: 40px;
height: 40px;
width: 100%;

p {
    margin-right: 50px;
}
`;

export const SignUpBtn = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: #00000033;
width: 120px;
height: 40px;
border-radius: 50px;
border: #00000033 solid 1px;

margin-right: 40px;

p{
    margin-right: 0;
}
`;
export const ContainerRightBottom = styled.div`
display: flex;
flex-direction: column;
align-items: center;

height: 100%;

form {
    margin-top: 206px;
}

h2 {
    text-align: center;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border: 1px solid gray;
}

input {
  border: none;
}

`;

export const SignInBtn = styled.button`
display: flex;
justify-content: center;
align-items: center;
color: #FFFFFF;
margin-top: 80px;

width: 288px;
height: 60px;
border-radius: 30px;
border: none;
background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%); 
`;
