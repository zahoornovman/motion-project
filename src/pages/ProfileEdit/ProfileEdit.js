// Libraries
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/slices/currentUser';
import { selectUserToken } from '../../store/slices/loginUser';

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

// Assets
import Jenniffer from '../../assets/images/users/jennifer.png';

// Component
export const ProfileEdit = () => {
    const currentUser = useSelector((state) => state.currentUser);
    const token = useSelector(selectUserToken);
    const dispatch = useDispatch();

    // State
    const [userStatus, setUserStatus] = React.useState(currentUser.status);
    const [firstName, setFirstName] = React.useState(currentUser.first_name);

    // Methods
    const onLoad = () => {
        console.log('inside onload');
        const payload = { token: `Bearer ${token}` };
        dispatch(getCurrentUser(payload));
    };

    // Component did mount
    useEffect(() => {
        console.log('initial load');
        console.log('state', firstName);
        onLoad();
    }, []);

    // Render
    if (userStatus === 'pending') {
        return 'LOADING';
    } else if (userStatus === 'rejected') {
        return 'ERROR';
    } else {
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
                        {/* <StyledInputText
                            label="First name"
                            placeholder="Jenniffer"
                            value={firstName}
                            onChange={(e) => {
                                const input = e.target.value;
                                setFirstName(input);
                            }}
                        ></StyledInputText> */}

                        <div>
                            <label htmlFor="input">First name</label>
                            <input
                                name="input"
                                placeholder="Jenniffer"
                                onChange={(e) => {
                                    const input = e.target.value;
                                    console.log(input);
                                    setFirstName(input);
                                    console.log(firstName);
                                }}
                                value={firstName}
                            ></input>
                        </div>
                    </StyledForm>
                </StyledUserDetailsContainer>
            </StyledProfileCardEdit>
        );
    }
};
