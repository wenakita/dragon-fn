import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useEffect, useState } from "react";

export function useWalletStatus() {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const { wallets } = useWallets();
  const { authenticated, ready, user }: any = usePrivy();
  useEffect(() => {
    if (authenticated && ready) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user || authenticated || ready || wallets]);

  return isloggedIn;
}

export default useWalletStatus;
