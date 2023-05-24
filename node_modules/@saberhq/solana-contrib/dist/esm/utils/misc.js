export * from "@saberhq/option-utils";
const noop = () => {
    // noop
};
/**
 * Hide the console.error because @solana/web3.js often emits noisy errors as a
 * side effect.
 */
export const suppressConsoleErrorAsync = async (fn) => {
    const oldConsoleError = console.error;
    console.error = noop;
    try {
        const result = await fn();
        console.error = oldConsoleError;
        return result;
    }
    catch (e) {
        console.error = oldConsoleError;
        throw e;
    }
};
/**
 * Hide the console.error because @solana/web3.js often emits noisy errors as a
 * side effect.
 */
export const suppressConsoleError = (fn) => {
    const oldConsoleError = console.error;
    console.error = noop;
    try {
        const result = fn();
        console.error = oldConsoleError;
        return result;
    }
    catch (e) {
        console.error = oldConsoleError;
        throw e;
    }
};
export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
/**
 * Awaits for a promise or value.
 */
export const valueAsPromise = async (awaitable) => {
    if ("then" in awaitable) {
        return await awaitable;
    }
    return awaitable;
};
/**
 * Shortens a pubkey.
 * @param pubkey
 * @returns
 */
export const formatPubkeyShort = (pubkey, leading = 7, trailing = 7) => {
    const str = pubkey.toString();
    return str.length > 20
        ? `${str.substring(0, leading)}.....${str.substring(str.length - trailing, str.length)}`
        : str;
};
//# sourceMappingURL=misc.js.map