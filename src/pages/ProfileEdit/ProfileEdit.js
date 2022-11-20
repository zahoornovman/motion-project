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
import { current } from '@reduxjs/toolkit';

// Component
export const ProfileEdit = () => {
    const currentUser = useSelector((state) => state.currentUser);
    const token = useSelector(selectUserToken);
    const dispatch = useDispatch();

    // State
    const [userStatus, setUserStatus] = React.useState(currentUser.status);
    const [firstName, setFirstName] = React.useState(currentUser.first_name);
    const [lastName, setLastName] = React.useState(currentUser.last_name);
    const [email, setEmail] = React.useState(currentUser.email);
    const [username, setUsername] = React.useState(currentUser.username);
    const [job, setJob] = React.useState(currentUser.job);
    const [location, setLocation] = React.useState(currentUser.location);
    // const [phone, setPhone] = React.useState(currentUser.phone);
    const [about, setAbout] = React.useState(currentUser.about);
    // const [password, setPassword] = React.useState(currentUser.password);
    // const [avatar, setAvatar] = React.useState(currentUser.avatar);
    // const [banner, setBanner] = React.useState(currentUser.banner);
    const [thingsUserLikes, setThingsUserLikes] = React.useState(
        currentUser.things_user_likes
    );

    const body = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        username: username,
        job: job,
        location: location,
        about_me: about,
        things_user_likes: thingsUserLikes,
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
        const payload = { token: `Bearer ${token}`, body: body };
        dispatch(updateCurrentUser(payload));
    };

    // Component did mount
    useEffect(() => {
        onLoad();
    }, []);

    // Store changes
    useEffect(() => {
        setFirstName(currentUser.first_name);
        setEmail(currentUser.email);
        setUsername(currentUser.username);
        setThingsUserLikes(currentUser.things_user_likes);
    }, [currentUser]);

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
                            update image
                        </SecondaryButton>
                    </div>
                    <div id="delete-save">
                        <SecondaryButton onClick={() => {}}>
                            delete account
                        </SecondaryButton>
                        <PrimaryButton onClick={onSave}>save</PrimaryButton>
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
                        <StyledInputText
                            label="Last name"
                            placeholder="Smith"
                            value={lastName}
                            onChange={(e) => {
                                const input = e.target.value;
                                setLastName(input);
                                console.log(input);
                            }}
                        ></StyledInputText>
                        <StyledInputText
                            label="Email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => {
                                const input = e.target.value;
                                setEmail(input);
                                console.log(input);
                            }}
                        ></StyledInputText>
                        <StyledInputText
                            label="Username"
                            placeholder="user_name"
                            value={username}
                            onChange={(e) => {
                                const input = e.target.value;
                                setUsername(input);
                                console.log(input);
                            }}
                        ></StyledInputText>
                        <StyledInputText
                            label="Location"
                            placeholder="Your city"
                            value={location}
                            onChange={(e) => {
                                const input = e.target.value;
                                setLocation(input);
                                console.log(input);
                            }}
                        ></StyledInputText>
                        <StyledInputText
                            label="About"
                            placeholder="Everything they need to know about you"
                            value={about}
                            onChange={(e) => {
                                const input = e.target.value;
                                setAbout(input);
                                console.log(input);
                            }}
                        ></StyledInputText>
                        <StyledInputText
                            label="Things I like"
                            placeholder="Fishing, dancing"
                            value={thingsUserLikes}
                            onChange={(e) => {
                                const input = e.target.value;
                                setThingsUserLikes(input);
                                console.log(input);
                            }}
                        ></StyledInputText>
                    </StyledForm>
                </StyledUserDetailsContainer>
            </StyledProfileCardEdit>
        );
    }
};
