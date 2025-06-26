export const loadContract = async (contractName, web3) => {
  const response = await fetch(`/contracts/${contractName}.json`);
  const artifact = await response.json();

  const networkId = await web3.eth.net.getId();
  const deployedNetwork = artifact.networks[networkId];

  if (!deployedNetwork) {
    throw new Error(
      `Contract ${contractName} not deployed on network ${networkId}`
    );
  }

  const contract = new web3.eth.Contract(artifact.abi, deployedNetwork.address);

  return contract;
};
