import { useEffect } from "react";
import useSWR from "swr";

const adminAddresses = {
  "0xd1b4de8a449f03a530012fa490f9036bad52afb006b282fbcffff38367a06b00": true,
};

export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [provider]);

  return {
    account: {
      data,
      isAdming: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
      mutate,
      ...rest,
    },
  };
};
