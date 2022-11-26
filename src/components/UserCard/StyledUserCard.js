import styled from "styled-components";

import BackGround from "../../assets/images/background_image.png";

export const StyledUserCard = styled.div`
  height: 489px;
  width: 350px;
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  margin: 15px 10px;
  padding: 10px 10px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid lightgrey;
  }

  div {
    margin: 8px 10px;
    text-align: center;
    width: 80%;
    display: flex;
    justify-content: space-around;
  }
`;

export const StyledDescription = styled.span`
  font-size: 12px;
  padding: 5px 10px;

  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
`;

export const StyledName = styled.span`
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: center;

  padding: 5px 0px;
`;
