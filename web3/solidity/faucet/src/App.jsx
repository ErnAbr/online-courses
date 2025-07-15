import { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "./utils/loadContract";

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    isProviderLoaded: false,
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [shouldReload, setShouldReload] = useState(false);

  const canConnectToContract = account && web3Api.contract;
  const reloadEffect = () => setShouldReload(!shouldReload);

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider({ silent: true });

      if (provider) {
        const web3 = new Web3(provider);
        const contract = await loadContract("Faucet", web3);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        provider.on("accountsChanged", (accounts) => {
          setAccount(accounts[0] || null);
        });
        provider.on("chainChanged", () => {
          window.location.reload();
        });
        setWeb3Api({ web3, provider, contract, isProviderLoaded: true });
      } else {
        setWeb3Api((web3Api) => ({
          ...web3Api,
          isProviderLoaded: true,
        }));
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

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    };
    web3Api.web3 && getAccount();
  }, [web3Api.web3]);

  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
          {" "}
          {web3Api.isProviderLoaded ? (
            <div className="is-flex is-align-items-center mb-3">
              <span>
                <strong className="mr-2">Account:</strong>
              </span>

              {account ? (
                <div>{account}</div>
              ) : !web3Api.provider ? (
                <div className="notification is-warning is-size-7 is-rounded">
                  Wallet Not Detected!{" "}
                  <a
                    className="is-block"
                    target="_blank"
                    rel="noreferrer"
                    href="https://docs.metamask.io"
                  >
                    Install MetaMask
                  </a>
                </div>
              ) : (
                <button
                  className="button is-info"
                  onClick={async () => {
                    if (!web3Api.provider) {
                      alert("MetaMask provider not available.");
                      return;
                    }
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
          ) : (
            <span>Looking for Web3...</span>
          )}
          <div className="balance-view is-size-2 mb-4">
            Current Balance: <strong>{balance || "0"}</strong> ETH
          </div>
          {!canConnectToContract && (
            <i className="is-block">Connect To Ganache</i>
          )}
          <button
            disabled={!canConnectToContract}
            onClick={addFunds}
            className="button is-primary is-link mr-2"
          >
            Donate 1 ETH
          </button>
          <button
            disabled={!canConnectToContract}
            onClick={withdrawFunds}
            className="button is-secondary"
          >
            Withdraw
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
