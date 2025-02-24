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

        function test2() external pure returns(uint data) {


        assembly {
            let fmp := mload(0x40)

            mstore(add(fmp, 0x00), 0x68656C6C6F)
            data := mload(add(fmp, 0x00))
        }
    }
}