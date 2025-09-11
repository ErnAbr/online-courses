import { handler as createAccoutHook } from "./useAccount";
import { handler as createNetworkHook } from "./useNetwork";

export const setupHooks = (...deps) => {
  console.log("setting up hooks");

  return {
    useAccount: createAccoutHook(...deps),
    useNetwork: createNetworkHook(...deps),
  };
};
