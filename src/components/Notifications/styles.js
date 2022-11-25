import styled from "styled-components";

export const StyledNavDropdown = styled.div`
  position: absolute;
  top: 80px;
  bottom: 0px;
  right: 80px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  box-sizing: border-box;

  list-style-type: none;
  width: 350px;
  min-height: auto;
  max-height: 350px;
  margin: 5px 0px;
  padding: 10px 10px;
  border: 1px solid gray;
  background: rgba(255, 255, 255, 1);

  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    width: 100%;
    /* border: 1px solid black; */
    margin: 10px 0px;
    font-size: 14px;
    font-weight: 400;
    /* line-height: 19px; */
    letter-spacing: 0px;
    padding-bottom: 5px;
  }
  //div for Recieved and Sent section
  div {
    /* box-sizing: border-box; */
    width: 100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    margin: 5px 2px;

    //div each Friend Request
    div {
      width: 100%;
      height: 60px;
      display: flex;
      flex-direction: row;
      /* border: 1px solid pink; */

      :hover {
        background-color: rgba();
      }
      //div for name and location
      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
        justify-content: center;

        p {
          /* border: 1px green solid; */
          width: auto;
          font-size: 12px;
          font-weight: 400;
          line-height: 16.41px;
          letter-spacing: 0px;
          text-align: left;
          color: black;
          overflow: wrap;
        }

      }
      div:nth-child(3) {
        width: 35%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        /* border: 1px solid blue; */
      }
    }
  }
`;

export const StyledSvgBase = styled.img`


  height: 30px;
  width: 30px;
  left: 293px;
  top: 89px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 1);
  box-sizing: border-box;
  padding: 8px;
/* 
  width: 30px;
  height: 30px; */

  /* border-radius: 50%; */
  /* opacity: 70%; */

  /* padding: px; */
  background: lightgrey;
`;

export const StyledSvgAccept = styled(StyledSvgBase)`
  background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);

  :hover {
    cursor: pointer;
  }
`;

export const StyledSvgReject = styled(StyledSvgBase)`
  opacity: 50%;
  :hover {
    cursor: pointer;
  }
`;

export const StyledProfilePic = styled.img`
  width: 40px;
  height: 40px;
  width: 20%;

  border-radius: 30px;
  /* border: 1px black solid; */
  margin: 2px;
`;
