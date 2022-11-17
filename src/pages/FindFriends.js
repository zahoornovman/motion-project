//hooks
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

//slices
import { fetchAllUsers, allUserSelect } from '../store/slices/FindFriendsSlice';

//components
import { UserCard } from '../components/UserCard'




function FindFriends (){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);

    const userArray = useSelector(allUserSelect);
    console.log(userArray)

    return(
        <>
        <h1>Find Friends</h1>
        <h2>{userArray.length}</h2>
        
        {userArray.map( (obj) => <UserCard obj= {obj} />)}
 
        </>
    )

}

function PotentialFriend () {

}


export { FindFriends }