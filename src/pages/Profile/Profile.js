// Libraries
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/slices/currentUser';
import { selectUserToken } from '../../store/slices/loginUser';

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

// Component
export const Profile = () => {
    const navigate = useNavigate();
    const toEditProfile = '/profile/edit';

    const currentUser = useSelector((state) => state.currentUser);
    const token = useSelector(selectUserToken);
    const dispatch = useDispatch();

    // State
    const [id, setId] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [job, setJob] = React.useState('');
    const [location, setLocation] = React.useState('');
    // const [phone, setPhone] = React.useState(currentUser.phone);
    const [about, setAbout] = React.useState('');
    const [avatar, setAvatar] = React.useState('');
    const [banner, setBanner] = React.useState('');
    const [thingsUserLikes, setThingsUserLikes] = React.useState([]);
    const [amountOfPosts, setAmountOfPosts] = React.useState('');
    const [amountOfLikes, setAmountOfLikes] = React.useState('');
    const [amountOfFriends, setAmountOfFriends] = React.useState('');
    const [amountOfFollowers, setAmountOfFollowers] = React.useState('');
    const [amountFollowing, setAmountFollowing] = React.useState('');

    // Methods
    const onLoad = () => {
        // console.log('body at load', body);
        const payload = { token: `Bearer ${token}` };
        dispatch(getCurrentUser(payload));
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
        setAmountOfPosts(currentUser.amount_of_posts);
        setAmountOfLikes(currentUser.amount_of_likes);
        setAmountOfFriends(currentUser.amount_of_friends);
        setAmountOfFollowers(currentUser.amount_of_followers);
        setAmountFollowing(currentUser.amount_following);
    }, [currentUser]);

    return (
        <StyledProfileCard>
            <StyledAvatar>
                <img src={avatar} alt="profile picture" />
                <span id="name">
                    {(firstName ? firstName : '') +
                        (lastName ? ' ' + lastName : '')}
                </span>
                <span id="location">{location}</span>
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
                            <p>{about}</p>
                        </div>
                        <div id="contact-info">
                            <StyledItem>
                                <StyledHeader>Email</StyledHeader>
                                <p>{email}</p>
                            </StyledItem>
                            {/* <StyledItem>
                                <StyledHeader>Phone</StyledHeader>
                                <p>123-456-7890</p>
                            </StyledItem> */}
                        </div>
                    </StyledContactSection>
                    <StyledHobbiesSection>
                        <div className="preferences">
                            <StyledHeader>Things I like</StyledHeader>
                            <div className="list">
                                {thingsUserLikes.map((hobby) => {
                                    <p>{Object.values(hobby)}</p>;
                                })}
                            </div>
                        </div>
                    </StyledHobbiesSection>
                </StyledTopContainer>
                <StyledStatsContainer>
                    <StyledStat id="posts">
                        <p>{amountOfPosts}</p>
                        <span>Posts</span>
                    </StyledStat>
                    <StyledStat id="likes">
                        <p>{amountOfLikes}</p>
                        <span>Likes</span>
                    </StyledStat>
                    <StyledStat id="friends">
                        <p>{amountOfFriends}</p>
                        <span>Friends</span>
                    </StyledStat>
                    <StyledStat id="followers">
                        <p>{amountOfFollowers}</p>
                        <span>Followers</span>
                    </StyledStat>
                    <StyledStat id="following">
                        <p>{amountFollowing}</p>
                        <span>Following</span>
                    </StyledStat>
                </StyledStatsContainer>
            </StyledUserDetailsContainer>
        </StyledProfileCard>
    );
};
