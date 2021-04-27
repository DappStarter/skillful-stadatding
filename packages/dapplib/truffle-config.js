require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict forget force sugar guard render remind hub gesture cart fringe silly'; 
let testAccounts = [
"0x0d1eb47885bc95ac1f2c509e14134577be94cbcc433213accafe58ecab583128",
"0xc9d9df85047be65bb199280f1a763ef22af57db7901dbc42544d7302e733eb7b",
"0x6a6d08c0b0e4eb0710431f2d264a8ce1e399a396bdce6f05403334f4219e4be4",
"0x65589ce5e93b57826594e798eb5252acfd601d05d3a5e497e115bcaaea150a08",
"0xb3b296cd40e418c3fc9631e7777a0ceb334b96e01e1819154e15e1ea72b96b07",
"0x8ee653159ae3b98666607fe1d8de0e5b671593e200eaf63faa1656a77f4fa530",
"0xfd3a142fbe0c515bc5ebb5e188d024b47185ed7b37bf4c98717340b17d8de385",
"0x207d32b6150832e0cc16a33b2e7fc4ecbef0f17012c8f441c880115761953b6f",
"0x3db577b5202ffce26d2d31e62a675a613c6bbfe6860fcc7acd7ae10c902a486f",
"0x4173d941106c5ce56f6155c2711ca8db9ac741a06c6c54df3dc7b9c9d256a764"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

