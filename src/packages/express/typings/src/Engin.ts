export type EnginCallback = {
  (
    path: string, 
    options: object, 
    callback: EnginCallbackCallback
  ): void
}

export type EnginCallbackCallback = {
  (
    error: unknown, 
    rendered?: undefined | string,
  ): void
}