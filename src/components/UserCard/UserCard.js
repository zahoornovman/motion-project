//Styled Components
import {
  StyledUserCard,
  StyledDescription,
  StyledName,
} from "./StyledUserCard";
import {
  StyledHobbiesIcon,
  StyledHobbies,
} from "../styledComponents/StyledHobbies";
import { SecondaryButton } from "../styledComponents/StyledButtons";

import axios from "axios";
import { useSelector } from "react-redux";
import { selectUserToken } from "../../store/slices/loginUser";

function UserCard(props) {
  const fullName = props.obj.first_name + " " + props.obj.last_name;

  const token = useSelector(selectUserToken);

  const sendFriendRequest = () => {
    const data = JSON.stringify({
      status: "P",
    });

    const config = {
      method: "post",
      url: `https://motion.propulsion-home.ch/backend/api/social/friends/request/${props.obj.id}/`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <StyledUserCard key={props.obj.id}>
      <img src={props.obj.avatar} alt="Avatar" />
      <div>{props.id}</div>
      <StyledName>{fullName}</StyledName>
      <StyledDescription>{props.obj.location}</StyledDescription>
      <div>
        <SecondaryButton>FOLLOW</SecondaryButton>
        <SecondaryButton onClick={sendFriendRequest}>
          ADD FRIEND
        </SecondaryButton>
      </div>
      <StyledDescription>{props.obj.about_me}</StyledDescription>
      <StyledHobbies>
        {props.obj.things_user_likes.map((item) => (
          <StyledHobbiesIcon>{item}</StyledHobbiesIcon>
        ))}
      </StyledHobbies>
    </StyledUserCard>
  );
}

export { UserCard };
