class Block{
    constructor(timestamp,prevHash,Hash,data){
        this.timestamp=timestamp;
        this.prevHash=prevHash;
        this.Hash=Hash;
        this.data = data
    }
toString(){
    return `Block-
    Timestamp: ${this.timestamp}
    PrevHash: ${this.prevHash.substring(0,10)}
    Hash: ${this.Hash.substring()}
    Data: ${this.data}
    `
}


    static genesis(){
const timestamp = "genesis";
const prevHash = "----------------";
const data= [];
const hash = "todo-yeet";
return new this(timestamp,prevHash,data,hash)
    }

    static mineBlock(prevBlock, data){
        const timestamp = Date.now();
        const prevHash = prevBlock.hash;
        const hash= "tadofjasdf;a";
        return new this(timestamp,prevHash,Hash)
    }
}