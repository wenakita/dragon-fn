import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";

function useAuthentication() {
  const { authenticated, ready, login }: any = usePrivy();

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (authenticated && ready) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [authenticated, ready]);
  return loggedIn;
}

export default useAuthentication;
