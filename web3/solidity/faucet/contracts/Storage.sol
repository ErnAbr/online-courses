pragma solidity >=0.4.22 <0.9.0;

contract Storage {
    uint8 public a = 7; //8 bits - 1 bytes
    uint16 public b = 10; //16 bits - 2bytes
    address public c = 0x754e7D1553539a9dbB236e14aa78B319A5DBDE67;  //20 bytes
    bool d = true; //  1 bytes
    uint64 public e = 15; // 8 bytes
    // 32 bytes all stored in slot 0

    //from web3.eth.getStorageAt("0xf4dA57ACE34bdE05e94e782e31691d76f6153f5B",0) <- get stored values at slot 0, the first 32 bytes
    //0x00000000000000 0f 01 754e7d1553539a9dbb236e14aa78b319a5dbde67 000a 07

    uint256 public f = 200; // 32 bytes -> stores in slot 1
    uint256 public h = 789; // 32 bytes -> stored in slot 2
    uint8 public g = 40; // 1 bytes -> stored in slot 3 <- ordering matters
}

