import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;
  height: 80px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
  
    /* identical to box height */
    color: #000000;
  }

  div {
    display: flex;
    align-items: center;
    margin-left: 25px;
  }
`;

export const NavPost = styled.div`
  width: 84px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    border-bottom: 2px solid #ad73fd;
  }

  p {
    margin-left: 19px;
  }
`;

export const NavFriends = styled.div`
  width: 84px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    border-bottom: 2px solid #ad73fd;
  }

  p {
    margin-left: 17px;
  }
`;

export const NavNotification = styled.div`
  width: 84px;
  height: 80px;
  /* margin-top: 33px;
  margin-bottom: 29px; */

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    border-bottom: 2px solid #ad73fd;
  }

  span {
    width: 21px;
    height: 21px;
    margin-top: 22px;
    margin-bottom: 37px;
    margin-left: 0px;
    border-radius: 15px;
    background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-family: "LucidaGrande";
    font-size: 10px;
    line-height: 12px;
    /* identical to box height */
    text-align: center;

    color: #ffffff;
  }
`;

export const ProfileIcon = styled.div`
  width: 84px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    border-bottom: 2px solid #ad73fd;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const Menu = styled.div`
  width: 84px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    border-bottom: 2px solid #ad73fd;
  }
`;
