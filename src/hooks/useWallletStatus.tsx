import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";

export function useWalletStatus() {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const { authenticated, isReady, user }: any = usePrivy();
  useEffect(() => {
    if (authenticated && isReady) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  return isloggedIn;
}

export default useWalletStatus;
