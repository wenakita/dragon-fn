"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletClient = exports.client = void 0;
var viem_1 = require("viem");
var chains_1 = require("viem/chains");
// const provider = await window.privy.getEthereumProvider();
var react_auth_1 = require("@privy-io/react-auth");
exports.client = (0, viem_1.createPublicClient)({
    chain: chains_1.sonic,
    transport: (0, viem_1.http)(),
});
var wallets = (0, react_auth_1.useWallets)().wallets;
var wallet = wallets[0];
exports.walletClient = (0, viem_1.createWalletClient)({
    account: wallet ? wallet.address : undefined,
    chain: chains_1.sonic,
    transport: wallet ? wallet.getEthereumProvider() : window.ethereum,
});
