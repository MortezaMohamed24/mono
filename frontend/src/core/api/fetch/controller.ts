export const aborter = new AbortController();
export const signal = aborter.signal;
export const abort = () => aborter.abort();