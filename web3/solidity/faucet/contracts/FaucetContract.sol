pragma solidity >=0.4.22 <0.9.0;

contract Faucet {

    address[] public funders;

    //this is a special function
    //it's called when you make a tx that doesn't specify
    //function name to call

    //External function are part of the contract interface
    //which means they can be called via contracts and other tx

    receive() external payable {}

    function addFunds() external payable {
        funders.push(msg.sender);
    }

    function getAllFunders() public view returns(address[] memory) {
        return funders;
    }

    function getFounderAtIndex(uint8 index) external view returns(address) {
        address[] memory _funders = getAllFunders();
        return _funders[index];
    }
}
//Block info
//Nonce - a hash that when comibined with the minHash proofs that 
//the block has gone through proof of owrk
//8byts => 64bits

//pure, view - read-only call, no gas fee
//view - function is the function that will not alter the storage state in any way
//pure - even more strict, indicating that it won't even read the storage state

//transactions - require gas fees, can generate state changes

//to talk to the node on the network you can make JSON-RPC http calls

//public function can be called from inside the smart contract, while external only from outside