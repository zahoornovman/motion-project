// Libraries
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCurrentUser,
    updateCurrentUser,
} from '../../store/slices/currentUser';
import { selectUserToken } from '../../store/slices/loginUser';

// Components
import {
    StyledAvatarEdit,
    StyledProfileCardEdit,
    StyledUserDetailsContainerEdit,
    StyledFormEdit,
} from './styles';
import {
    StyledInputHobbies,
    StyledInputText,
} from '../../components/styledComponents/StyledInput';
import {
    SecondaryButton,
    PrimaryButton,
} from '../../components/styledComponents/StyledButtons';

// Assets
import Jenniffer from '../../assets/images/users/jennifer.png';
import { current } from '@reduxjs/toolkit';

// Component
export const ProfileEdit = () => {
    const currentUser = useSelector((state) => state.currentUser);
    const token = useSelector(selectUserToken);
    const dispatch = useDispatch();

    // State
    const [userStatus, setUserStatus] = React.useState(currentUser.status);
    const [id, setId] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [job, setJob] = React.useState('');
    const [location, setLocation] = React.useState('');
    // const [phone, setPhone] = React.useState(currentUser.phone);
    const [about, setAbout] = React.useState('');
    // const [password, setPassword] = React.useState(currentUser.password);
    // const [avatar, setAvatar] = React.useState(currentUser.avatar);
    // const [banner, setBanner] = React.useState(currentUser.banner);
    // const [thingsUserLikes, setThingsUserLikes] = React.useState(
    //     currentUser.things_user_likes
    // );

    const updatedUser = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        username: username,
        job: job,
        location: location,
        about_me: about,
        // things_user_likes: thingsUserLikes,
    };

    // Methods
    const onLoad = () => {
        // console.log('body at load', body);
        const payload = { token: `Bearer ${token}` };
        dispatch(getCurrentUser(payload));
    };

    const onSave = () => {
        // console.log('saving changes...');
        // console.log('body at save', body);
        const payload = { token: `Bearer ${token}`, body: updatedUser };
        dispatch(updateCurrentUser(payload));
    };

    // Component did mount
    useEffect(() => {
        onLoad();
    }, []);

    // When store changes
    useEffect(() => {
        setId(currentUser.id);
        setFirstName(currentUser.first_name);
        setLastName(currentUser.last_name);
        setEmail(currentUser.email);
        setUsername(currentUser.username);
        setLocation(currentUser.location);
        setAbout(currentUser.about_me);
        // setThingsUserLikes(currentUser.things_user_likes);
    }, [currentUser]);

    // Render
    if (userStatus === 'pending') {
        return 'LOADING';
    } else if (userStatus === 'rejected') {
        return 'ERROR';
    } else {
        return (
            <StyledProfileCardEdit>
                <StyledAvatarEdit>
                    <div id="update-image">
                        <img src={Jenniffer} alt="profile picture" />
                        <SecondaryButton onClick={() => {}}>
                            update image
                        </SecondaryButton>
                    </div>
                    <div id="delete-save">
                        <SecondaryButton onClick={() => {}}>
                            delete account
                        </SecondaryButton>
                        <PrimaryButton onClick={onSave}>save</PrimaryButton>
                    </div>
                </StyledAvatarEdit>
                <StyledUserDetailsContainerEdit>
                    <StyledFormEdit>
                        <StyledInputText
                            label="First name"
                            placeholder="Jenniffer"
                            value={firstName}
                            onChange={(e) => {
                                const input = e.target.value;
                                setFirstName(input);
                            }}
                        ></StyledInputText>
                        <StyledInputText
                            label="Last name"
                            placeholder="Smith"
                            value={lastName}
                            onChange={(e) => {
                                const input = e.target.value;
                                setLastName(input);
                            }}
                        ></StyledInputText>
                        <StyledInputText
                            label="Email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => {
                                const input = e.target.value;
                                setEmail(input);
                            }}
                        ></StyledInputText>
                        <StyledInputText
                            label="Username"
                            placeholder="user_name"
                            value={username}
                            onChange={(e) => {
                                const input = e.target.value;
                                setUsername(input);
                            }}
                        ></StyledInputText>
                        <StyledInputText
                            label="Location"
                            placeholder="Your city"
                            value={location}
                            onChange={(e) => {
                                const input = e.target.value;
                                setLocation(input);
                            }}
                        ></StyledInputText>
                        <StyledInputText
                            label="About"
                            placeholder="Everything they need to know about you"
                            value={about}
                            onChange={(e) => {
                                const input = e.target.value;
                                setAbout(input);
                            }}
                        ></StyledInputText>
                        {/* <StyledInputHobbies
                            label="Things I like"
                            placeholder="Fishing, dancing"
                            value={thingsUserLikes}
                            onChange={(e) => {
                                const input = e.target.value;

                                setThingsUserLikes(input);
                                console.log(input);
                            }}
                        ></StyledInputHobbies> */}
                    </StyledFormEdit>
                </StyledUserDetailsContainerEdit>
            </StyledProfileCardEdit>
        );
    }
};
