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
    const [lastName, setLastName] = React.useState(currentUser.last_name);
    const [email, setEmail] = React.useState(currentUser.first_name);
    const [username, setUsername] = React.useState(currentUser.username);
    const [location, setLocation] = React.useState(currentUser.first_name);
    const [phone, setPhone] = React.useState(currentUser.first_name);
    const [about, setAbout] = React.useState(currentUser.first_name);
    const [password, setPassword] = React.useState(currentUser.first_name);
    const [avatar, setAvatar] = React.useState(currentUser.avatar);
    const [banner, setBanner] = React.useState(currentUser.banner);
    const [thingsUserLikes, setThingsUserLikes] = React.useState(
        currentUser.first_name
    );

    // Methods
    const onLoad = () => {
        const payload = { token: `Bearer ${token}` };
        dispatch(getCurrentUser(payload));
    };

    // Component did mount
    useEffect(() => {
        onLoad();
    }, []);
    // useEffect(() => {
    //     console.log('currentUser after thunk', currentUser);
    // }, [currentUser]);

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
                        <StyledInputText
                            label="First name"
                            placeholder="Jenniffer"
                            value={firstName}
                            onChange={(e) => {
                                const input = e.target.value;
                                setFirstName(input);
                                console.log(input);
                            }}
                        ></StyledInputText>

                        <div>
                            <label htmlFor="input">First name</label>
                            <input
                                name="input"
                                placeholder="Jenniffer"
                                onChange={(e) => {
                                    const input = e.target.value;
                                    console.log(input);
                                    setFirstName(input);
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
