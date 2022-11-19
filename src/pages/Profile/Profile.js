import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import {
    StyledAvatar,
    StyledProfileCard,
    StyledUserDetailsContainer,
    StyledTopContainer,
    StyledContactSection,
    StyledHobbiesSection,
    StyledStatsContainer,
    StyledHeader,
    StyledItem,
    StyledStat,
} from './styles';

import {
    SecondaryButton,
    PrimaryButton,
} from '../../components/styledComponents/StyledButtons';

import Jenniffer from '../../assets/images/users/jennifer.png';

export const Profile = () => {
    const navigate = useNavigate();
    const toEditProfile = '/profile/edit';

    return (
        <StyledProfileCard>
            <StyledAvatar>
                <img src={Jenniffer} alt="profile picture" />
                <span id="name">Jennifer Smith</span>
                <span id="location">Zurich, Switzerland</span>
                <SecondaryButton
                    onClick={() => {
                        navigate(toEditProfile);
                    }}
                >
                    EDIT PROFILE
                </SecondaryButton>
            </StyledAvatar>
            <StyledUserDetailsContainer>
                <StyledTopContainer>
                    <StyledContactSection>
                        <div id="about">
                            <StyledHeader>About</StyledHeader>
                            <p>
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                sit amet consectetur adipisicing elit. Atque,
                                delectus!
                            </p>
                        </div>
                        <div id="contact-info">
                            <StyledItem>
                                <StyledHeader>Email</StyledHeader>
                                <p>jennifersmith@gmail.com</p>
                            </StyledItem>
                            <StyledItem>
                                <StyledHeader>Phone</StyledHeader>
                                <p>123-456-7890</p>
                            </StyledItem>
                        </div>
                    </StyledContactSection>
                    <StyledHobbiesSection>
                        <div className="preferences">
                            <StyledHeader>Things I like</StyledHeader>
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
                    </StyledHobbiesSection>
                </StyledTopContainer>
                <StyledStatsContainer>
                    <StyledStat id="posts">
                        <p>34</p>
                        <span>Posts</span>
                    </StyledStat>
                    <StyledStat id="likes">
                        <p>256</p>
                        <span>Likes</span>
                    </StyledStat>
                    <StyledStat id="friends">
                        <p>98</p>
                        <span>Friends</span>
                    </StyledStat>
                    <StyledStat id="followers">
                        <p>129</p>
                        <span>Followers</span>
                    </StyledStat>
                    <StyledStat id="following">
                        <p>154</p>
                        <span>Following</span>
                    </StyledStat>
                </StyledStatsContainer>
            </StyledUserDetailsContainer>
        </StyledProfileCard>
    );
};
