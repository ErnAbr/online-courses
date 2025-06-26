import { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "./utils/loadContract";

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [shouldReload, setShouldReload] = useState(false);

  const reloadEffect = () => setShouldReload(!shouldReload);

useEffect(() => {
  const loadProvider = async () => {
    const provider = await detectEthereumProvider();

    if (provider) {
      const web3 = new Web3(provider);
      const contract = await loadContract("Faucet", web3);

      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      provider.on("accountsChanged", (accounts) => {
        setAccount(accounts[0] || null);
      });

      setWeb3Api({ web3, provider, contract });
    } else {
      console.error("Please install MetaMask.");
    }
  };
  loadProvider();
}, []);

  useEffect(() => {
    const loadBalance = async () => {
      const { contract, web3 } = web3Api;

      const balanceInEther = await web3.utils.fromWei(
        await web3.eth.getBalance(contract._address),
        "ether"
      );
      setBalance(balanceInEther);
    };

    web3Api.contract && loadBalance();
  }, [web3Api.web3, shouldReload]);

  const addFunds = async () => {
    const { contract, web3 } = web3Api;
    await contract._methods.addFunds().send({
      from: account,
      value: web3.utils.toWei("1", "ether"),
    });

    reloadEffect();
  };

  const withdrawFunds = async () => {
    const { contract, web3 } = web3Api;

    await contract._methods
      .withdraw(web3.utils.toWei("0.1", "ether"))
      .send({ from: account });

    reloadEffect();
  };

  // useEffect(() => {
  //   const getAccount = async () => {
  //     const accounts = await web3Api.web3.eth.getAccounts();
  //     setAccount(accounts[0]);
  //   };
  //   web3Api.web3 && getAccount();
  // }, [web3Api.web3]);

  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
          <div className="is-flex is-align-items-center">
            <span>
              <strong className="mr-2">Account:</strong>
            </span>

            {account ? (
              <div>{account}</div>
            ) : (
              <button
                className="button is-info"
                onClick={async () => {
                  const accounts = await web3Api.provider.request({
                    method: "eth_requestAccounts",
                  });
                  setAccount(accounts[0]);
                }}
              >
                Connect Wallet
              </button>
            )}
          </div>

          <div className="balance-view is-size-2 mb-4">
            Current Balance: <strong>{balance}</strong> ETH
          </div>
          <button onClick={addFunds} className="button is-primary is-link mr-2">
            Donate 1 ETH
          </button>
          <button onClick={withdrawFunds} className="button is-secondary">
            Withdraw
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
