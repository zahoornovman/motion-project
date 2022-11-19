//hooks
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

//styled components
import { StyledFindFriendsPage } from "../components/styledComponents/StyledFindFriendsPage";

import { selectUserToken } from "../store/slices/loginUser";

//components
import { UserCard } from "../components/UserCard/UserCard";

function FindFriends() {
  let token = useSelector(selectUserToken);
  console.log(token);
  if (token === "") {
    token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODcyOTU1LCJqdGkiOiIyMWM2NGZmNDA1YTk0MDllYjk0N2ZjYTAyYzI1ODAxNiIsInVzZXJfaWQiOjE5NzN9.NiwT2veTN1-uEoU8B1GaxW_41lMRREc1JsLmYickftI";
    console.log("Hard Coded token used");
  }

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
      "https://motion.propulsion-home.ch/backend/api/users/?limit=10&offset=0",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setList(result.results))
      .catch((error) => setError(error));
  }, []);

  console.log(list);

  return (
    <StyledFindFriendsPage>
      {list.map((obj) => (
        <UserCard key={obj.id} obj={obj} />
      ))}
    </StyledFindFriendsPage>
  );
}

export { FindFriends };
