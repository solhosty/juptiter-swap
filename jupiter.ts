import { TOKEN_LIST_URL, Jupiter} from '@jup-ag/core';
import { Token } from '@jup-ag/core/dist/lib/amms/marcoPolo/type';
import { Connection, Keypair, PublicKey, clusterApiUrl } from '@solana/web3.js';
import walletSK from './jRRYL4fdCk6xaQDsKJCHKy5S9wJqQwZ4jdPpGng29N5.json'

const inputToken = ""
const outputToken = ""
const inputAmount = 0
const slippage = 0.01

const wallet = Keypair.fromSecretKey(walletSK)
const ENV = "mainnet-beta";
const connection = new Connection(clusterApiUrl(ENV));
const tokens: Token[] = await(await fetch(TOKEN_LIST_URL[ENV])).json();
const jupiter = await Jupiter.load({
    connection,
    cluster: ENV,
    user: USER_KEYPAIR,
  });
const routeMap = jupiter.getRouteMap();

const routes = await jupiter.computeRoutes({
    inputMint: new PublicKey(inputToken), 
    outputMint: new PublicKey(outputToken), 
    inputAmount, 
    slippage, 
    forceFetch: false, 
  });

let bestRoute = routes.routesInfos[0];
const { execute } = await jupiter.exchange({
  bestRoute,
});


const swapResult = await execute();