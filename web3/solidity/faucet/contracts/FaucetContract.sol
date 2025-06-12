// SPDX-License-Identifier: MIT 
pragma solidity >=0.4.22 <0.9.0;

import "./Owned.sol";
import "./Logger.sol";
import "./IFaucet.sol";

contract Faucet is Owned, Logger, IFaucet {
    uint public numOfFounders;

    mapping(address => bool) private funders;
    mapping(uint => address) private lutFunders;

    modifier limitWithdraw(uint withdrawAmount) {
        require(
            withdrawAmount <= 100000000000000000, 
                "Cannot withdraw more then 0.1 ETH"
        );
        _;
    }

    //this is a special function
    //it's called when you make a tx that doesn't specify
    //function name to call

    //External function are part of the contract interface
    //which means they can be called via contracts and other tx

    receive() external payable {}

    function emitLog() public override pure returns (bytes32) {
        return "Hello World";
    }

    // function transerOwnership(address newOwner) external onlyOwner() {
    //     owner = newOwner;
    // }

    // private -> can be accesible only within the smart contract
    // internal -> can be accesible withing smart contract and also derived smart contract

    function addFunds() override external payable {
        address funder = msg.sender;
        test3();

        if (!funders[funder]) {
            uint index = numOfFounders++;
            funders[funder]= true;
            lutFunders[index] = funder;
        }
    }

    function test1() external onlyOwner {
        //some managing stuff that only admin should have access to
    }

    function test2() external onlyOwner {
        //some managing stuff that only admin should have access to
    }

    function withdraw (uint withdrawAmount) override external payable limitWithdraw(withdrawAmount) {
        payable(msg.sender).transfer(withdrawAmount);
    }

    function getAllFunders() external view returns(address[] memory) {
        address[] memory _funders = new address[](numOfFounders);
        
        for (uint i = 0; i < numOfFounders; i++) {
            _funders[i] = lutFunders[i];
        }

        return _funders;
    }

    function getFounderAtIndex(uint8 index) external view returns(address) {
        // address[] memory _funders = getAllFunders();
        return lutFunders[index];
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
