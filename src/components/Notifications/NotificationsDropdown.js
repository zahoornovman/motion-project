import PendingLogo from "../../assets/svgs/pending.svg";
import Accept from "../../assets/svgs/accept.svg";
import Reject from "../../assets/svgs/reject.svg";

import {
  selectNotificationsReceived,
  selectNotificationsRequested,
} from "../../store/slices/loginUser";

import { useSelector } from "react-redux";

function NotificationsDropdown() {
  const receivedNotifications = useSelector(selectNotificationsReceived);
  const requestedNotifications = useSelector(selectNotificationsRequested);
  const receivedNotificationsParsed = receivedRequests(receivedNotifications);
  console.log(receivedNotificationsParsed);
  const requestedNotificationsParsed = requestedRequests(
    requestedNotifications
  );
  console.log(requestedNotificationsParsed);

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

  return (
    <ul>
      <li>
        <h3>Recieved requests</h3>
      </li>
      {receivedNotificationsParsed.map((item) => (
        <li key={item.id}>
          <img src={item.requesterAvatar} alt="img" />
          <div>
            <div>{item.requesterName}</div>
            <div>{item.requesterLocation}</div>
          </div>
          <div>
            <img src={Accept} alt="A" />
            <img srv={Reject} alt="R" />
          </div>
        </li>
      ))}
      <li>
        <h3>Sent requests</h3>
      </li>
      {requestedNotificationsParsed.map((item) => (
        <li key={item.id}>
          <img src={item.requestedToAvatar} alt="img" />
          <div>
            <div>{item.requestedToName}</div>
            <div>{item.requestedToLocation}</div>
          </div>
          <div>
            <img src={PendingLogo} alt="Pen" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export { NotificationsDropdown };
