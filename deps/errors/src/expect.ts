interface Callback<T> {
  (expectedError: T): void
}

function expect<T>(error: unknown, expectedError: T, callback: Callback<T>) {
  if (error === expectedError) {
    callback(expectedError)
  }

  if (typeof expectedError === "function" && error instanceof expectedError) {
    callback(expectedError)
  }

  throw error
}


export {expect}
export default expect