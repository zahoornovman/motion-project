//svgs
import PendingLogo from "../../assets/svgs/pending.svg";
// import Accept from "../../assets/svgs/accept.svg";
// import Reject from "../../assets/svgs/reject.svg";
import Tick from "../../assets/svgs/tick.svg";
import Cross from "../../assets/svgs/cross.svg";
import DefaultImg from "../../assets/images/default.png";

//selectors
import {
  selectNotificationsReceived,
  selectNotificationsRequested,
  selectUserToken,
} from "../../store/slices/loginUser";

//hooks
import { useSelector, useDispatch } from "react-redux";

//SytledComponents
import {
  StyledNavDropdown,
  StyledSvgAccept,
  StyledSvgReject,
  StyledProfilePic,
  StyledSvgBase,
} from "./styles.js";

//reducers
import {
  deleteFriendRequest,
  updateRemainingNotifications,
  setNotificationError,
} from "../../store/slices/loginUser";

function NotificationsDropdown() {
  let token = useSelector(selectUserToken);
  const dispatch = useDispatch();
  const receivedNotifications = useSelector(selectNotificationsReceived);
  const requestedNotifications = useSelector(selectNotificationsRequested);

  const receivedNotificationsParsed = receivedRequests(receivedNotifications);
  const requestedNotificationsParsed = requestedRequests(
    requestedNotifications
  );

  //function for parsing notifications array for easy access in return function
  function receivedRequests(receivedNotifications) {
    const received = receivedNotifications.map((item) => {
      let obj = {
        id: item.id,
        requesterAvatar: item.requester.avatar,
        requesterName:
          item.requester.first_name + " " + item.requester.last_name,
        requesterLocation: item.requester.location,
      };
      return obj;
    });
    return received;
  }

  //function for parsing notifications array for easy access in return function
  function requestedRequests(requestedNotifications) {
    const requested = requestedNotifications.map((item) => {
      let obj = {
        id: item.id,
        requestedToAvatar: item.receiver.avatar,
        requestedToName:
          item.receiver.first_name + " " + item.receiver.last_name,
        requestedToLocation: item.receiver.location,
      };
      return obj;
    });
    return requested;
  }

  //rejecting friend request
  const handleReject = (e) => {
    // console.log("entering Reject");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      status: "R",
    });

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://motion.propulsion-home.ch/backend/api/social/friends/requests/${e.target.id}/`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(); // Will `catch` the error below
        }
        return response.json();
      })
      .then(() => dispatch(updateRemainingNotifications(e.target.id)))
      .then(() => dispatch(deleteFriendRequest(e.target.id)))
      .catch((error) => console.log(error));
    // .catch((error) => dispatch(setNotificationError(error)));
  };

  //accepting friends request
  const handleAccept = (e) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      status: "A",
    });

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://motion.propulsion-home.ch/backend/api/social/friends/requests/${e.target.id}/`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(); // Will `catch` the error below
        }
        return response.json();
      })
      .then(() => dispatch(updateRemainingNotifications(e.target.id)))
      .then(() => dispatch(deleteFriendRequest(e.target.id)))
      .catch((error) => console.log(error));
    // .catch((error) => dispatch(setNotificationError(error)));
  };

  //deleting sent friend request
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("entering Delete");
    const myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://motion.propulsion-home.ch/backend/api/social/friends/requests/${e.target.id}/`,
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(); // Will `catch` the error below
        }
        return response.text();
      })
      .then(() => dispatch(deleteFriendRequest(e.target.id)))
      .catch((error) => console.log(error));
    // .catch((error) => dispatch(setNotificationError(error)));
  };

  //incomplete work. Figuring out how to display a different image when src is missing
  const missingAvatar = (name) => {
    return name[0];
  };

  return (
    <StyledNavDropdown>
      <div>
        <h3>Received requests</h3>

        {receivedNotifications === [] ? <div>No Friend Requests</div> : null}
        {receivedNotificationsParsed.map((item) => (
          <div key={item.id}>
            {item.requesterAvatar === null || item.requesterAvatar === "" ? (
              <StyledProfilePic src={DefaultImg} alt={"img"} />
            ) : (
              <StyledProfilePic src={item.requesterAvatar} alt={"img"} />
            )}
            <div>
              <p>{item.requesterName}</p>
              <p>{item.requesterLocation}</p>
            </div>
            <div>
              <StyledSvgAccept
                id={item.id}
                onClick={handleAccept}
                src={Tick}
                alt="A"
              />
              <StyledSvgReject
                id={item.id}
                onClick={handleReject}
                src={Cross}
                alt="R"
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3>Sent requests</h3>

        {requestedNotifications === [] ? <div>No Sent Requests</div> : null}
        {requestedNotificationsParsed.map((item) => (
          <div key={item.id}>
            {item.requestedToAvatar === null ||
            item.requestedToAvatar === "" ? (
              <StyledProfilePic src={DefaultImg} alt={""} />
            ) : (
              <StyledProfilePic src={item.requestedToAvatar} alt={""} />
            )}
            <div>
              <p>{item.requestedToName}</p>
              <p>{item.requestedToLocation}</p>
            </div>
            <div>
              <StyledSvgBase src={PendingLogo} alt="Pen" />
              <StyledSvgReject
                id={item.id}
                onClick={handleDelete}
                src={Cross}
                alt="R"
              />
            </div>
          </div>
        ))}
      </div>
    </StyledNavDropdown>
  );
}

export { NotificationsDropdown };
