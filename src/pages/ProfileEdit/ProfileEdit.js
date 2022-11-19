import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import {
    StyledAvatar,
    StyledProfileCardEdit,
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

export const ProfileEdit = () => {
    // const navigate = useNavigate();
    // const toEditProfile = '/profile/edit';

    return (
        <StyledProfileCardEdit>
            <StyledAvatar>
                <div id="update-image">
                    <img src={Jenniffer} alt="profile picture" />
                    <SecondaryButton onClick={() => {}}>
                        UPDATE IMAGE
                    </SecondaryButton>
                </div>
                <div id="delete-save">
                    <SecondaryButton onClick={() => {}}>
                        DELETE ACCOUNT
                    </SecondaryButton>
                    <PrimaryButton onClick={() => {}}>
                        UPDATE IMAGE
                    </PrimaryButton>
                </div>
            </StyledAvatar>
            <StyledUserDetailsContainer>FORM</StyledUserDetailsContainer>
        </StyledProfileCardEdit>
    );
};
