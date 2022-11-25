import styled from "styled-components";

export const PostSection = styled.form`
  height: 120px;
  width: 560px;
  margin-left: 100px;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);

  button {
    margin-right: 30px;
    background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
    border: none;
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }

  input {
    width: 300px;
    height: 50px;
    border: none;
  }
`;

export const ProfilePost = styled.div`
  width: 84px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuPost = styled.div`
  width: 84px;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid red;
`;

export const Post = styled.div`
  width: 560px;
  margin-left: 100px;
  margin-top: 20px;
  /* min-height: 5px; */

  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    margin-right: 250px;
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    padding-bottom: 40px;
  }

  .Heart {
    display: flex;
    margin-left: 20px;

    p {
      margin-left: 30px;
    }
  }

  .Share {
    display: flex;
    margin-right: 250px;

    p {
      margin-left: 20px;
    }
  }

  .Likes {
    margin-right: 20px;
  }
`;
