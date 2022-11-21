import styled from "styled-components";

export const StyledNavDropdown = styled.div`
  position: absolute;
  top: 80px;
  bottom: 0px;
  right: 80px;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  /* box-sizing: content-box; */

  list-style-type: none;
  width: 300px;
  min-height: auto;
  max-height: 350px;
  margin: 5px 0px;
  padding: 10px 10px;
  border: 1px solid red;
  background: rgba(255, 255, 255, 1);

  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  h3 {
    width: 100%;
    /* border: 1px solid black; */
    margin: 10px 0px;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    padding-bottom: 5px;
  }

  div {
    width: 100%;
    /* border: 1px solid green; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 5px 5px;

    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;

    :hover {
      background-color: lightgray;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    div:nth-child(3) {
      width: 30%;
      display: flex;
      flex-direction: row;

      img:hover {
        background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
        cursor: pointer;
      }
    }
  }

  img {
    width: 31px;
    height: 31px;

    border-radius: 50%;
    padding: 1%;
    margin: 2px;
  }
`;
