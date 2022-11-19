// Libraries
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../store/slices/currentUser';

// Components
import {
    StyledAvatar,
    StyledProfileCardEdit,
    StyledUserDetailsContainer,
    StyledForm,
} from './styles';
import { StyledInputText } from '../../components/styledComponents/StyledInput';
import {
    SecondaryButton,
    PrimaryButton,
} from '../../components/styledComponents/StyledButtons';

// Utils
import { useSelector } from 'react-redux';

// Assets
import Jenniffer from '../../assets/images/users/jennifer.png';

export const ProfileEdit = () => {
    // State
    const currentUser = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('initial load');
        dispatch(getCurrentUser('payload'));
    }, []);

    // const [userStatus, setUserStatus] = React.useState(currentUser);
    // const [firstName, setFirstName] = React.useState(currentUser.first_name);

    // Methods

    // Render
    // if (userStatus === 'pending') {
    //     return 'LOADING';
    // } else if (userStatus === 'rejected') {
    //     return 'ERROR';
    // } else {
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
            <StyledUserDetailsContainer>
                <StyledForm
                // onSubmit={(e) => {
                //     e.preventDefault();
                // }}
                >
                    <StyledInputText
                        label="First name"
                        placeholder="Jenniffer"
                    ></StyledInputText>
                </StyledForm>
            </StyledUserDetailsContainer>
        </StyledProfileCardEdit>
    );
};
// };
