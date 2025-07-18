const Trie = require("merkle-patricia-tree").SecureTrie; // We import the library required to create a basic Merkle Patricia Tree
const { BranchNode } = require("merkle-patricia-tree/dist/trieNode");
const { keccak256 } = require("ethereumjs-util");

var trie = new Trie(); // We create an empty Patricia Merkle Tree

const traverseTrie = (node) => {
  trie.walkTrie(node, (_, node) => {
    if (node) {
      console.log(node);
      console.log(node.hash().toString("hex"));
      if (node instanceof BranchNode) {
        for (let i = 0; i < 16; i++) {
          const buffer = node.getBranch(i);
          if (buffer && buffer.length > 0) {
            traverseTrie(buffer);
          }
        }
      }
    }
  });
};

async function test() {
  await trie.put(
    Buffer.from("32fa7b"),
    // ASCII Text to Hex 31 30
    Buffer.from("10")
  );
  await trie.put(
    Buffer.from("32fa7c"),
    // ASCII Text to Hex 32 30
    Buffer.from("20")
  );

  traverseTrie(trie.root);

  console.log("Root Hash: ", trie.root.toString("hex"));

  const path = await trie.findPath(keccak256(Buffer.from("32fa7b")));

  console.log(`NODE`, keccak256(path.node.serialize()));
}

test();

// getting root hash ->
// keccak (key) as a String
// 4f6c1c50fde5f5d4f20c2979974a8f465b24e65062f02ef80f722200f35105e2

// add 20 hex prefix if nibbles are even
// 204f6c1c50fde5f5d4f20c2979974a8f465b24e65062f02ef80f722200f35105e2

// 0x80 + 33 = a1
// 0x80 + 2 = 0x82
// 0xc0 + 37  = e5

// RLP ->
// e5a1204f6c1c50fde5f5d4f20c2979974a8f465b24e65062f02ef80f722200f35105e2823230

// keccak256(RLP)
// 17dee68b36b0276d8db503b497c8335d5d4ace0ed3fef5f6fa62644dcd66f170

//***///** */ *//
// Keccak256(32fa7c) ->
// 4 f6c1c50fde5f5d4f20c2979974a8f465b24e65062f02ef80f722200f35105e2
// 4 is stroed in a branch node

// RLP - 20 if number is even, 3 if number is odd
// 0x80 + 32 = a0 in the front of the hash (if it is 32 bytes)
// 0xc0 + 36 = e4 in the back of the hash
// e4a03f6c1c50fde5f5d4f20c2979974a8f465b24e65062f02ef80f722200f35105e2823230 <- RLP

// keccak256(RLP)
// b7f631fbd6cfb1aeb19411e75fc33769934c7ea2242a47b54ed6895e9627a0fc
//***///** */ *//

// Keccak256(32fa7b)
// 3 stroed in the banch node
// e4a033865e1f181df18d1fff8847c6298e5b2c621a56f368e030e8ead670c8b01aa1823130
// result 2fd2c9e2e74e9d07a920dd1ebf94f1bd7a5aa1764464769c83ce1cbb38137d65

//***///** */ *//
// Branch Node
// RLP

// f7 + 1 = f8
// f851808080a02fd2c9e2e74e9d07a920dd1ebf94f1bd7a5aa1764464769c83ce1cbb38137d65a0b7f631fbd6cfb1aeb19411e75fc33769934c7ea2242a47b54ed6895e9627a0fc808080808080808080808080

// Branch root hash
// 93267434a14288490332f997cb13123bb68609112edbd06f6e8c7c9798fd20c6