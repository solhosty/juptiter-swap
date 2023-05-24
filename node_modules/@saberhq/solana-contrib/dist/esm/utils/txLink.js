export var ExplorerType;
(function (ExplorerType) {
    ExplorerType["SOLANA_EXPLORER"] = "solana-explorer";
    ExplorerType["SOLSCAN"] = "solscan";
})(ExplorerType || (ExplorerType = {}));
export function generateTXLink(signature, cluster = "mainnet-beta", explorerType = ExplorerType.SOLANA_EXPLORER) {
    switch (explorerType) {
        case ExplorerType.SOLANA_EXPLORER:
            return `https://explorer.solana.com/tx/${signature}?cluster=${cluster}`;
        case ExplorerType.SOLSCAN:
            return `https://solscan.io/tx/${signature}?cluster=${cluster}`;
        default:
            throw new Error(`Explorer type ${explorerType} is not supported.`);
    }
}
//# sourceMappingURL=txLink.js.map