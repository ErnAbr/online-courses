import { useEffect } from "react";
import useSWR from "swr";

const adminAddresses = {
  "0x51ab68a78ef919f29cbbc7f0b588b0823c76003d8a9b813d1a61086ba6670584": true,
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
    data,
    isAdming: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest,
  };
};
