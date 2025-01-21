import { useEffect, useState } from "react";
const useOnlineStatus = () => {
  const [onlineMessage, setOnlineMessage] = useState(true);
  useEffect(() => {
    addEventListener("offline", () => {
      setOnlineMessage(false);
    });
    addEventListener("online", () => {
      setOnlineMessage(true);
    });
  }, []);

  return onlineMessage;
};

export default useOnlineStatus;
