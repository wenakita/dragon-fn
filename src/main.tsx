import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PrivyProvider } from "@privy-io/react-auth";
import { sonic } from "viem/chains";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrivyProvider
      appId="cm97qannj00rrl40l9iepcv9i"
      clientId=""
      config={{
        defaultChain: sonic,
        supportedChains: [sonic],
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <App />
    </PrivyProvider>
  </StrictMode>
);
