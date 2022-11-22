//hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//styled components
import { StyledFindFriendsPage } from "../components/styledComponents/StyledFindFriendsPage";

//selectors
import { selectUserToken } from "../store/slices/loginUser";

//components
import { UserCard } from "../components/UserCard/UserCard";

function FindFriends() {
  let token = useSelector(selectUserToken);

  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://motion.propulsion-home.ch/backend/api/users/?limit=6&offset=0",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setList(result.results))
      .catch((error) => setError(error));
  }, []);

  return (
    <StyledFindFriendsPage>
      {list.map((obj) => (
        <UserCard key={obj.id} obj={obj} />
      ))}
    </StyledFindFriendsPage>
  );
}

export { FindFriends };
