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

function UserCard(props) {
  // let pprops = {
  //   obj: {
  //     id: 809,
  //     email: "juans@propulsionacademy.com",
  //     first_name: "Juan Miguel",
  //     last_name: "Sánchez Arce",
  //     username: "JuanMiguelSanchezArce",
  //     job: "",
  //     avatar:
  //       "https://motion.propulsion-home.ch/media-files/JMSA_WhiteBackground.png",
  //     banner: "https://motion.propulsion-home.ch/media-files/Groot_Revenge.jpg",
  //     location: "Zurich, Switzerland",
  //     about_me:
  //       "Lorem ipsum dolor sit amet, vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian",
  //     things_user_likes: ["Cooking", "Travel", "Reading", "Swimming", "Gaming"],
  //     logged_in_user_is_following: false,
  //     logged_in_user_is_friends: false,
  //     logged_in_user_is_rejected: false,
  //     logged_in_user_received_fr: false,
  //     logged_in_user_sent_fr: false,
  //     amount_of_posts: 0,
  //     amount_of_likes: 0,
  //     amount_of_friends: 2,
  //     amount_of_followers: 7,
  //     amount_following: 0,
  //   },
  // };

  const fullName = props.obj.first_name + " " + props.obj.last_name;

  return (
    <StyledUserCard>
      <img src={props.obj.avatar} alt="Avatar" />
      <StyledName>{fullName}</StyledName>
      <StyledDescription>{props.obj.location}</StyledDescription>
      <div>
        <SecondaryButton>FOLLOW</SecondaryButton>
        <SecondaryButton>ADD FRIEND</SecondaryButton>
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
