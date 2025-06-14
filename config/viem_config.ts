import { createPublicClient, http } from "viem";
import { sonic } from "viem/chains";

export const client = createPublicClient({
  chain: sonic,
  transport: http(),
});
