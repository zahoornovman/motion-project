import PendingLogo from "../../assets/svgs/pending.svg";
import Accept from "../../assets/svgs/accept.svg";
import Reject from "../../assets/svgs/reject.svg";

import {
  selectNotificationsReceived,
  selectNotificationsRequested,
} from "../../store/slices/loginUser";

import { useSelector, useDispatch } from "react-redux";

import { StyledNavDropdown } from "./styles.js";
import {
  selectUserToken,
  deleteFriendRequest,
  updateRemainingNotifications,
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
  console.log(receivedNotifications);
  console.log(requestedNotifications);

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
    console.log("entering Reject");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    let raw = JSON.stringify({
      status: "R",
    });

    let requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://motion.propulsion-home.ch/backend/api/social/friends/requests/${e.target.id}/`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => dispatch(updateRemainingNotifications(e.target.id)))
      .catch((error) => console.log("error", error));
  };

  //function to accept friends request
  const handleAccept = (e) => {
    console.log("entering Accept");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    let raw = JSON.stringify({
      status: "A",
    });

    let requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://motion.propulsion-home.ch/backend/api/social/friends/requests/${e.target.id}/`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .then(() => dispatch(updateRemainingNotifications(e.target.id)))
      .catch((error) => console.log("error", error));
  };

  //deleting sent friend request
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("entering Delete");
    let myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${token}`);

    let requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://motion.propulsion-home.ch/backend/api/social/friends/requests/${e.target.id}/`,
      requestOptions
    )
      .then((response) => response.text())
      // .then((result) => console.log(result))
      .then(() => dispatch(deleteFriendRequest(e.target.id)))
      .catch((error) => console.log("error", error));
  };

  //incomplete work. Figuring out how to display a different image when src is missing
  const missingAvatar = (name) => {
    return name[0];
  };

  return (
    <StyledNavDropdown>
      <h3>Received requests</h3>

      {(receivedNotificationsParsed === []) && <div>No Friend Requests</div>}
      {receivedNotificationsParsed.map((item) => (
        <div key={item.id}>
          <img
            src={item.requesterAvatar}
            alt={missingAvatar(item.requesterName)}
          />
          <div>
            <div>{item.requesterName}</div>
            <div>{item.requesterLocation}</div>
          </div>
          <div>
            <img id={item.id} onClick={handleAccept} src={Accept} alt="A" />
            <img id={item.id} onClick={handleReject} src={Reject} alt="R" />
          </div>
        </div>
      ))}

      <h3>Sent requests</h3>
      {(requestedNotificationsParsed === []) && <div>No Sent Requests</div> }
      {requestedNotificationsParsed.map((item) => (
        <div key={item.id}>
          <img
            src={item.requestedToAvatar}
            alt={missingAvatar(item.requestedToName)}
          />
          <div>
            <div>{item.requestedToName}</div>
            <div>{item.requestedToLocation}</div>
          </div>
          <div>
            <img src={PendingLogo} alt="Pen" />
            <button id={item.id} onClick={handleDelete}>
              Delete
            </button>
            {/* <img id={item.id} onClick={handleDelete} src={Reject} alt="R" /> */}
          </div>
        </div>
      ))}
    </StyledNavDropdown>
  );
}

export { NotificationsDropdown };
