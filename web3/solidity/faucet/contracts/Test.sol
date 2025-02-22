pragma solidity >=0.4.22 <0.9.0;

contract Test {

    function test(uint testNumber) external pure returns(uint) {

        assembly {
            let _number := 4
            let _fmp := mload(0x40)
        }

        uint8[3] memory items = [1,2,3];

        return testNumber;
    }
}