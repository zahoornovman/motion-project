//hooks
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//styled components
import { StyledFindFriendsPage } from './StyledFindFriendsPage';

//selectors
import { selectUserToken } from '../../store/slices/loginUser';

//components
import { UserCard } from '../../components/UserCard/UserCard';

function FindFriends(props) {
    let token = useSelector(selectUserToken);

    //use state to keep track of the users
    const [list, setList] = useState([]);
    const [error, setError] = useState('');

    //user only loaded one time for now
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {
        const myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json');
        myHeaders.append('Authorization', `Bearer ${token}`);
        let url;
        if (props.filter === 'currentUser') {
            url =
                'https://motion.propulsion-home.ch/backend/api/social/friends';
        } else {
            url =
                'https://motion.propulsion-home.ch/backend/api/users/?limit=150&offset=0';
        }

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => makePretty(result.results))
            .then((newList) => setList(newList))
            .catch((error) => setError(error));
    };

    //filtering out garbage data
    const makePretty = (list) => {
        const newList = list.filter(
            (obj) =>
                obj.email !== '' &&
                obj.first_name !== '' &&
                obj.last_name !== '' &&
                obj.location !== '' &&
                obj.about_me !== ''
        );
        console.log(newList);
        return newList;
    };

    return (
        <StyledFindFriendsPage>
            {list == '' && <div>Loading....</div>}
            {list.map((obj) => (
                <UserCard key={obj.id} obj={obj} />
            ))}
        </StyledFindFriendsPage>
    );
}

export { FindFriends };
