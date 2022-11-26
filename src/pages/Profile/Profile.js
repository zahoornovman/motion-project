// Libraries
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/slices/currentUser';
import { selectUserToken } from '../../store/slices/loginUser';
import Banner from '../../assets/images/users/banner.svg';

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
    StyledBanner,
    StyledBannerUpdateBtn,
    StyledStatContainer,
    StyledMainContainer,
} from './styles';
import { FindFriends } from '../FindFriends/FindFriends';
import PostsList from '../../components/PostsList';

// Assets
import Camera from '../../assets/images/users/camera.svg';

import {
    SecondaryButton,
    PrimaryButton,
} from '../../components/styledComponents/StyledButtons';
import { StyledHobbiesIcon } from '../../components/styledComponents/StyledHobbies';

// Component
export const Profile = () => {
    const navigate = useNavigate();
    const toEditProfile = '/profile/edit';

    const currentUser = useSelector((state) => state.currentUser);
    const token = useSelector(selectUserToken);
    const dispatch = useDispatch();

    // State
    //// Store
    // const [id, setId] = React.useState('');
    // const [username, setUsername] = React.useState('');
    // const [job, setJob] = React.useState('');
    // const [phone, setPhone] = React.useState(currentUser.phone);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [about, setAbout] = React.useState('');
    const [avatar, setAvatar] = React.useState('');
    const [banner, setBanner] = React.useState('');
    const [thingsUserLikes, setThingsUserLikes] = React.useState([]);
    const [amountOfPosts, setAmountOfPosts] = React.useState('');
    const [amountOfLikes, setAmountOfLikes] = React.useState('');
    const [amountOfFriends, setAmountOfFriends] = React.useState('');
    const [amountOfFollowers, setAmountOfFollowers] = React.useState('');
    const [amountFollowing, setAmountFollowing] = React.useState('');

    //// Components
    const initialSelection = {
        posts: false,
        likes: false,
        friends: false,
        followers: false,
        following: false,
    };
    const [selected, setSelected] = React.useState(initialSelection);

    // Methods
    const selectStat = (statName) => {
        const newSelection = initialSelection;
        newSelection[statName] = true;
        console.log(newSelection);
        setSelected(newSelection);
    };

    const onLoad = () => {
        const payload = { token: `Bearer ${token}` };
        dispatch(getCurrentUser(payload));
    };

    // Component did mount
    useEffect(() => {
        onLoad();
    }, []);

    // When store changes
    useEffect(() => {
        setFirstName(currentUser.first_name);
        setLastName(currentUser.last_name);
        setEmail(currentUser.email);
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
        <>
            <StyledBanner src={banner} alt="banner image" />
            <StyledProfileCard>
                <StyledAvatar>
                    <div>
                        <img src={avatar} alt="profile picture" />
                    </div>
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
                                <div>
                                    {thingsUserLikes.map((hobby, index) => {
                                        return (
                                            <StyledHobbiesIcon key={index}>
                                                {hobby}
                                            </StyledHobbiesIcon>
                                        );
                                    })}
                                </div>
                                <div className="list"></div>
                            </div>
                        </StyledHobbiesSection>
                    </StyledTopContainer>
                    <StyledStatsContainer>
                        <StyledStat
                            id="posts"
                            selected={false}
                            onClick={(e) => {
                                const statName = 'posts';
                                selectStat(statName);
                            }}
                        >
                            <p>{amountOfPosts}</p>
                            <span>Posts</span>
                        </StyledStat>
                        <StyledStat
                            id="likes"
                            onClick={(e) => {
                                const statName = 'likes';
                                selectStat(statName);
                            }}
                        >
                            <p>{amountOfLikes}</p>
                            <span>Likes</span>
                        </StyledStat>
                        <StyledStat
                            id="friends"
                            onClick={(e) => {
                                const statName = 'friends';
                                selectStat(statName);
                            }}
                        >
                            <p>{amountOfFriends}</p>
                            <span>Friends</span>
                        </StyledStat>
                        <StyledStat
                            id="followers"
                            onClick={(e) => {
                                const statName = 'followers';
                                selectStat(statName);
                            }}
                        >
                            <p>{amountOfFollowers}</p>
                            <span>Followers</span>
                        </StyledStat>
                        <StyledStat
                            id="following"
                            onClick={(e) => {
                                const statName = 'following';
                                selectStat(statName);
                            }}
                        >
                            <p>{amountFollowing}</p>
                            <span>Following</span>
                        </StyledStat>
                    </StyledStatsContainer>
                </StyledUserDetailsContainer>
            </StyledProfileCard>
            <StyledStatContainer>
                {selected.friends ? <FindFriends /> : false}
                {selected.posts ? <PostsList /> : false}
            </StyledStatContainer>
        </>
    );
};
