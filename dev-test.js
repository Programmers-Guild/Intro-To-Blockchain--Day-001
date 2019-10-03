const Block = require("./block");

const genesis = Block.genesis();
const block = Block.mineBlock(genesis, "foo");
console.log(genesis.toString());
console.log(block.toString());
