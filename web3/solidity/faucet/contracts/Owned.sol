pragma solidity >=0.4.22 <0.9.0;

contract Owned {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(
            msg.sender == owner,
                "only owner can call this function"
        );
        _;
    }
}