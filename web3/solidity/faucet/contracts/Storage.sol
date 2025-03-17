pragma solidity >=0.4.22 <0.9.0;

contract Storage {

    // keccak256(key,slot) <- this is how mapping is stored in the storage
    mapping(uint => uint) public aa; // slot 0
    mapping(address => uint) public bb; // slot 1

    // keccak256(slot) + index of the item
    uint[] public cc;

    uint8 public a = 7; //8 bits - 1 bytes
    uint16 public b = 10; //16 bits - 2bytes
    address public c = 0x754e7D1553539a9dbB236e14aa78B319A5DBDE67;  //20 bytes
    bool d = true; //  1 bytes
    uint64 public e = 15; // 8 bytes
    // 32 bytes all stored in slot 2 (now slot 2)

    //from web3.eth.getStorageAt("0xf4dA57ACE34bdE05e94e782e31691d76f6153f5B",0) <- get stored values at slot 0, the first 32 bytes
    //0x00000000000000 0f 01 754e7d1553539a9dbb236e14aa78b319a5dbde67 000a 07

    uint256 public f = 200; // 32 bytes -> stores in slot 3
    uint256 public h = 789; // 32 bytes -> stored in slot 4
    uint8 public g = 40; // 1 bytes -> stored in slot 5 <- ordering matters

    constructor() {
        cc.push(1);
        cc.push(10);
        cc.push(100);

        aa[2] = 4;
        aa[3] = 10;

        bb[0x754e7D1553539a9dbB236e14aa78B319A5DBDE67] = 100;
    }
}

// 0x000000000000000000000000754e7D1553539a9dbB236e14aa78B319A5DBDE670000000000000000000000000000000000000000000000000000000000000001 <- HEX Value of Key (value 2) Value Pair at the Slot 0 web3.eth.getStorageAt("0x22838f3543c0E2CD325deDB9720d79d9Fbf016E8", "0xabbb5caa7dda850e60932de0934eb1f9d0f59695050f761dc64e443e5030a569")
//'0x0000000000000000000000000000000000000000000000000000000000000004'

