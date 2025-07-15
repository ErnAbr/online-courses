export const loadContract = async (contractName, web3) => {
  const response = await fetch(`/contracts/${contractName}.json`);
  const artifact = await response.json();

  const networkId = await web3.eth.net.getId();
  const deployedNetwork = artifact.networks[networkId];

  let contract = null;

  try {
    contract = new web3.eth.Contract(artifact.abi, deployedNetwork.address);
  } catch {
    console.error("You Are Connected To The Wrong Network");
  }

  return contract;
};
