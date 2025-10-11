import { handler as createAccoutHook } from "./useAccount";
import { handler as createNetworkHook } from "./useNetwork";

export const setupHooks = (...deps) => {
  return {
    useAccount: createAccoutHook(...deps),
    useNetwork: createNetworkHook(...deps),
  };
};
