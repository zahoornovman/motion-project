// Libraries
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCurrentUser,
    updateCurrentUserFiles,
    updateCurrentUserText,
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
    StyledInputFile,
    StyledInputText,
    StyledInputTextHobbies,
} from '../../components/styledComponents/StyledInput';
import {
    SecondaryButton,
    PrimaryButton,
} from '../../components/styledComponents/StyledButtons';
import { StyledBannerUpdateBtn } from './styles';

// Assets
import { StyledBanner } from '../Profile/styles';
import defaultBanner from '../../assets/images/users/banner.svg';
import iconCamera from '../../assets/images/users/camera.svg';

// Component
export const ProfileEdit = () => {
    const currentUser = useSelector((state) => state.currentUser);
    const token = useSelector(selectUserToken);
    const dispatch = useDispatch();
    const inputProfilePic = useRef(null);
    const inputBannerImage = useRef(null);

    // State
    //// Store
    const [userStatus, setUserStatus] = React.useState(currentUser.status);
    const [id, setId] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [job, setJob] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [about, setAbout] = React.useState('');
    const [avatar, setAvatar] = React.useState({});
    const [thingsUserLikes, setThingsUserLikes] = React.useState([]);
    const [hobbiesInput, setHobbiesInput] = React.useState('');
    const [banner, setBanner] = React.useState(defaultBanner);
    // const [phone, setPhone] = React.useState(currentUser.phone);
    // const [password, setPassword] = React.useState(currentUser.password);

    const updatedUserText = {
        email: email,
        first_name: firstName,
        last_name: lastName,
        username: username,
        job: job,
        location: location,
        about_me: about,
        things_user_likes: thingsUserLikes,
    };

    const updatedUserFiles = {
        avatar: avatar,
        banner: banner,
    };

    // const formData = new FormData();
    // formData.append('email', String(email));
    // formData.append('first_name', String(firstName));
    // formData.append('last_name', String(lastName));
    // formData.append('username', String(username));
    // formData.append('job', String(job));
    // formData.append('location', String(location));
    // formData.append('about_me', String(about));
    // formData.append('avatar', avatar);
    // formData.append('banner', banner);
    // thingsUserLikes.forEach((hobby) =>
    //     formData.append('things_user_likes', hobby)
    // );
    // formData.append(
    //     'things_user_likes',
    //     JSON.stringify(
    //         thingsUserLikes.map((hobby) => {
    //             return { keyword: hobby };
    //         })
    //     )
    // );

    // Methods
    const onLoad = () => {
        const payload = { token: `Bearer ${token}` };
        dispatch(getCurrentUser(payload));
    };

    const changeProfilePic = (e) => {
        console.log(e.target.files['0']);
        const newAvatar = e.target.files['0'];
        setAvatar(newAvatar);
        console.log('avatar state', avatar);
    };

    const changeBannerImage = (e) => {
        console.log(e.target.files['0']);
        const newBanner = e.target.files['0'];
        setBanner(newBanner);
        console.log('banner state', banner);
    };

    const addHobbies = (e) => {
        e.preventDefault();
        const newHobbies = hobbiesInput.split(',');
        setThingsUserLikes([...thingsUserLikes, ...newHobbies]);

        setHobbiesInput([]);
    };

    const removeHobby = (e) => {
        e.preventDefault();
        const currentHobbies = [...thingsUserLikes];
        const targetHobby = e.target.innerHTML;
        currentHobbies.splice(currentHobbies.indexOf(targetHobby), 1);
        setThingsUserLikes(currentHobbies);
    };

    const saveUpdates = () => {
        const payloadText = {
            token: `Bearer ${token}`,
            body: updatedUserText,
        };

        if (typeof updatedUserFiles.avatar !== 'object')
            delete updatedUserFiles.avatar;
        if (typeof updatedUserFiles.banner !== 'object')
            delete updatedUserFiles.banner;

        const payloadFiles = {
            token: `Bearer ${token}`,
            body: updatedUserFiles,
        };

        console.log('payloadtext', payloadText);
        console.log('payloadfiles', payloadFiles);

        dispatch(updateCurrentUserText(payloadText));
        dispatch(updateCurrentUserFiles(payloadFiles));
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
        setAvatar(currentUser.avatar);
        setBanner(currentUser.banner);
        setThingsUserLikes(currentUser.things_user_likes);
    }, [currentUser]);

    // Render
    if (userStatus === 'pending') {
        return 'LOADING';
    } else if (userStatus === 'rejected') {
        return 'ERROR';
    } else {
        return (
            <>
                <StyledBanner src={banner} alt="banner image" />
                <StyledProfileCardEdit>
                    <StyledBannerUpdateBtn
                        onClick={(e) => {
                            e.preventDefault();
                            inputBannerImage.current.click();
                        }}
                    >
                        <img src={iconCamera} alt="udpate banner" />
                        Update image
                    </StyledBannerUpdateBtn>
                    <StyledAvatarEdit>
                        <div id="update-image">
                            <div>
                                <img src={avatar} alt="profile picture" />
                            </div>
                            <SecondaryButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    inputProfilePic.current.click();
                                }}
                                type="submit"
                                htmlFor="fileUpload"
                            >
                                update image
                            </SecondaryButton>
                        </div>
                        <div id="delete-save">
                            <SecondaryButton onClick={() => {}}>
                                delete account
                            </SecondaryButton>
                            <PrimaryButton onClick={saveUpdates}>
                                save
                            </PrimaryButton>
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
                                // biginput={true}
                                placeholder="Everything they need to know about you"
                                value={about}
                                onChange={(e) => {
                                    const input = e.target.value;
                                    setAbout(input);
                                }}
                            ></StyledInputText>
                            <StyledInputFile
                                label="Update image"
                                onChange={changeProfilePic}
                                reference={inputProfilePic}
                            ></StyledInputFile>
                            <StyledInputFile
                                label="Update image"
                                onChange={changeBannerImage}
                                reference={inputBannerImage}
                            ></StyledInputFile>
                            <StyledInputTextHobbies
                                label="Things I like"
                                hobbies={thingsUserLikes}
                                placeholder="Hiking, Swimming, ..."
                                value={hobbiesInput}
                                onChange={(e) => {
                                    const input = e.target.value;
                                    setHobbiesInput(input);
                                }}
                                onClick={(e) => {
                                    addHobbies(e);
                                }}
                                removeHobby={(e) => {
                                    removeHobby(e);
                                }}
                            />
                        </StyledFormEdit>
                    </StyledUserDetailsContainerEdit>
                </StyledProfileCardEdit>
            </>
        );
    }
};
