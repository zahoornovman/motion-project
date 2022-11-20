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
  align-items: center;
  align-self: stretch;
  width: 40%;
  background-image: url(${BackGround}),
    linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
  background-blend-mode: multiply, normal;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
`;

export const ContainerLeftTop = styled.div`
  height: 50%;
  width: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 160px;

  img {
    width: 80px;
    height: 80px;
  }

  h2 {
    margin-top: 20px;
    font-weight: 500px;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.75px;
    text-align: center;
  }
`;

export const ContainerLeftBottom = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: 500px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    mix-blend-mode: normal;
    opacity: 0.6;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 200px;
  }

  div {
    margin-top: 30px;
  }
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

  p {
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
  }

  input {
    border: none;
  }

  img {
    margin-right: 10px;
  }
`;

export const SignInBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  margin-top: 80px;

  width: 288px;
  height: 60px;
  border-radius: 30px;
  border: none;
  background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
`;

export const FormVali = styled.form`
  width: 720px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .code {
    width: 545px;
  }

  label {
    display: flex;
    flex-direction: column;
    width: 270px;
    margin-bottom: 20px;
  }

  input {
    border-bottom: solid black 1px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Check = styled.div`
  width: 81px;
  height: 81px;
  color: #a580ff;
  border: 4px solid #a580ff;
  border-radius: 50%;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  margin-top: 60px;
  margin-bottom: 41px;
`;

export const CircleBlack = styled.div`
  width: 8px;
  height: 8px;
  color: #000000;
  border: 2px solid #000000;
  background: #000000;
  border-radius: 50%;
  margin-left: 10px;
`;

export const CircleGhost = styled.div`
  width: 8px;
  height: 8px;
  color: #000000;
  border: 2px solid #000000;
  mix-blend-mode: normal;
  opacity: 0.2;
  border-radius: 50%;
  margin-left: 10px;
`;

export const SocialMed = styled.img`
  width: 40px;
  height: 40px;
  mix-blend-mode: normal;
  opacity: 0.4;
  margin-top: 80px;
  margin-left: 10px;
`;

export const Store = styled.img`
  width: 98px;
  height: 37px;
  border-radius: 30px;
  padding: 10px;
  gap: 10px;
  margin-left: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2); ;
`;
