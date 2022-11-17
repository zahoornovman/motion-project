import React from 'react';
import styled from 'styled-components';

export const Profile = () => {
    return (
        <StyledProfileCard>
            <div className="avatar">
                <img className="picture" src="./jennifer.png" alt="" />
                <span className="name">Jennifer Smith</span>
                <span className="location">Zurich, Switzerland</span>
                <button className="edit">EDIT PROFILE</button>
            </div>
            <div className="details">
                <div className="personal-info">
                    <div className="top">
                        <div className="left">
                            <div className="about">
                                <span className="header">About</span>
                                <p>
                                    Lorem ipsum dolor sit amet. Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit.
                                    Atque, delectus!
                                </p>
                            </div>
                            <div className="contact">
                                <div className="email">
                                    <span className="header">Email</span>
                                    <p>jennifersmith@gmail.com</p>
                                </div>
                                <div className="phone">
                                    <span className="header">Phone</span>
                                    <p>123-456-7890</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="preferences">
                                <span className="header">Things I like</span>
                                <div className="list">
                                    <p>Cooking</p>
                                    <p>Travel</p>
                                    <p>Reading</p>
                                    <p>Swimming</p>
                                    <p>Dancing</p>
                                    <p>Hiking</p>
                                    <p>Knitting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="stats">
                            <div className="posts">
                                <p>34</p>
                                <span>Posts</span>
                            </div>
                            <div className="likes">
                                <p>256</p>
                                <span>Likes</span>
                            </div>
                            <div className="friends">
                                <p>98</p>
                                <span>Friends</span>
                            </div>
                            <div className="followers">
                                <p>129</p>
                                <span>Followers</span>
                            </div>
                            <div className="following">
                                <p>154</p>
                                <span>Following</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledProfileCard>
    );
};

const StyledProfileCard = styled.section`
    margin: 120px auto 34px;
    min-height: 400px;
    /* width: 1000px; */
    width: 80%;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    background-color: #ffffff;
    border-radius: 4px;

    box-shadow: 0px 0px 1px #00000020, 0px 10px 20px #00000005;

    .avatar {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;

        width: 30%;
        min-width: 260px;
        height: 100%;
        border-right: 2px solid #00000010;

        .picture {
            height: 100px;
            width: 100px;

            margin: auto 0px 5px 0px;
        }

        .name {
            margin: 5px 0px 5px 0px;
            font-size: 24px;
        }

        .location {
            margin: 5px 0px 5px 0px;
        }

        .edit {
            margin: 30px 0px auto 0px;
        }
    }

    .personal-info {
        height: 100%;

        .top {
            display: flex;
            border-bottom: 2px solid #00000010;
            height: 60%;

            .header {
                font-size: 14px;
            }

            .left {
                display: flex;
                flex-flow: column nowrap;

                width: 50%;
                margin: 40px 30px 30px;

                .contact {
                    display: flex;
                    flex-flow: row;
                    justify-content: space-between;

                    width: 100%;

                    .email {
                        margin: 10px 0 5px 0;
                    }

                    .phone {
                        margin: 10px 0 5px 0;
                    }
                }
            }

            .right {
                display: flex;
                flex-flow: column;
                justify-content: flex-start;

                width: 50%;
                margin: 40px 30px 30px;

                .preferences {
                    width: 100%;

                    .list {
                        display: flex;
                        flex-flow: row wrap;
                        width: 100%;
                        margin: 16px 0%;

                        p {
                            margin: 5px;
                            padding: 8px;
                            background-color: lightgray;
                            background: #00000005;
                            border: 1px solid #00000005;
                            border-radius: 18px;
                        }
                    }
                }
            }
        }

        .bottom {
            height: 40%;

            .stats {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-around;
                align-items: center;

                height: 100%;

                p {
                    font-size: 24px;
                }

                span {
                    opacity: 0.5;
                }
            }
        }
    }
`;
