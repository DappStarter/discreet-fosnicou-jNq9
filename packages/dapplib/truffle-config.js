require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remain social inflict infant flee teach'; 
let testAccounts = [
"0x1069c821090c32423dbb6aa18ea5ea34651db02813445043d148007b47b323a7",
"0x026d50ccd9eb1a70d02db382cce92b133f66efa5d676066a2ec64afe9b4a366e",
"0xf077d8d79ff85712ac68ccd1596e2859efb1db34e0b874a7804c928de9a82273",
"0xa88faa411e47dfc98ac1c9132e44d205adfeee1798a52dc1ce8a83a5402c8503",
"0x4d29e360929d0af531cfc7f1282ab9725756fc2e1086265f30dee21f2775386b",
"0x10c9eb47a4c25de0c8f2ac4662806ca6101c7c1fd8aec664c87b8bc2eb6b32f9",
"0xa5fc468d958c7079a646fbb4533f6ba0a3c1276de84cf665a26c0e716659d0ea",
"0x9101adaba94ded88663b0229200393e35df6322f66557d5fbbea5523525855e5",
"0xe9c4759dafc57e225c20459cd171b20e64700dc3345409bda1a8b3c24a4eb54e",
"0x94b3e7836d3ae142c1611dc1a5ad1cb8885656de5fe3df1cdce62c6fdf9f8808"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

