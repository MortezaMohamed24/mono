type Func0<R> = () => R
type Func1<A1, R> = (a1: A1) => R
type Func2<A1, A2, R> = (a1: A1, a2: A2) => R
type Func3<A1, A2, A3, R> = (a1: A1, a2: A2, a3: A3, ...args: any[]) => R
type FlexFunction = (...args: unknown[]) => unknown


/** one function */

function compose(): <R>(a: R) => R
function compose<TF extends Function>(f: TF): TF


/* two functions */

function compose<A, R>(
  f1: (b: A) => R, 
  f2: Func0<A>,
): typeof f2

function compose<A, A1, R>(
  f1: (b: A) => R,
  f2: Func1<A1, A>
): typeof f2

function compose<A, A1, A2, R>(
  f1: (b: A) => R,
  f2: Func2<A1, A2, A>
): typeof f2

function compose<A, A1, A2, A3, R>(
  f1: (b: A) => R,
  f2: Func3<A1, A2, A3, A>
): typeof f2


/* three functions */

function compose<A, B, R>(
  f1: (b: B) => R,
  f2: (a: A) => B,
  f3: Func0<A>
): typeof f3

function compose<A, B, A1, R>(
  f1: (b: B) => R,
  f2: (a: A) => B,
  f3: Func1<A1, A>
): typeof f3

function compose<A, B, A1, A2, R>(
  f1: (b: B) => R,
  f2: (a: A) => B,
  f3: Func2<A1, A2, A>
): typeof f3

function compose<A, B, A1, A2, A3, R>(
  f1: (b: B) => R,
  f2: (a: A) => B,
  f3: Func3<A1, A2, A3, A>
): typeof f3


/* four functions */

function compose<A, B, C, R>(
  f1: (c: C) => R,
  f2: (b: B) => C,
  f3: (a: A) => B,
  f4: Func0<A>
): typeof f4

function compose<A, B, C, A1, R>(
  f1: (c: C) => R,
  f2: (b: B) => C,
  f3: (a: A) => B,
  f4: Func1<A1, A>
): typeof f4

function compose<A, B, C, A1, A2, R>(
  f1: (c: C) => R,
  f2: (b: B) => C,
  f3: (a: A) => B,
  f4: Func2<A1, A2, A>
): typeof f4

function compose<A, B, C, A1, A2, A3, R>(
  f1: (c: C) => R,
  f2: (b: B) => C,
  f3: (a: A) => B,
  f4: Func3<A1, A2, A3, A>
): typeof f4


/** five functions */

function compose<A, B, C, D, R>(
  f1: (d: D) => R,
  f2: (c: C) => C,
  f3: (b: B) => B,
  f4: (a: A) => B,
  f5: Func0<A>
): typeof f5

function compose<A, B, C, D, A1, R>(
  f1: (d: D) => R,
  f2: (c: C) => C,
  f3: (b: B) => B,
  f4: (a: A) => B,
  f5: Func1<A1, A>
): typeof f5

function compose<A, B, C, D, A1, A2, R>(
  f1: (d: D) => R,
  f2: (c: C) => C,
  f3: (b: B) => B,
  f4: (a: A) => B,
  f5: Func2<A1, A2, A>
): typeof f5

function compose<A, B, C, D, A1, A2, A3, R>(
  f1: (d: D) => R,
  f2: (c: C) => C,
  f3: (b: B) => B,
  f4: (a: A) => B,
  f5: Func3<A1, A2, A3, A>
): typeof f5


/** six functions */

function compose<A, B, C, D, F, R>(
  f1: (f: F) => R,
  f2: (d: D) => R,
  f3: (c: C) => C,
  f4: (b: B) => B,
  f5: (a: A) => B,
  f6: Func0<A>
): typeof f6

function compose<A, B, C, D, F, A1, R>(
  f1: (f: F) => R,
  f2: (d: D) => R,
  f3: (c: C) => C,
  f4: (b: B) => B,
  f5: (a: A) => B,
  f6: Func1<A1, A>
): typeof f6

function compose<A, B, C, D, F, A1, A2, R>(
  f1: (f: F) => R,
  f2: (d: D) => R,
  f3: (c: C) => C,
  f4: (b: B) => B,
  f5: (a: A) => B,
  f6: Func2<A1, A2, A>
): typeof f6

function compose<A, B, C, D, F, A1, A2, A3, R>(
  f1: (f: F) => R,
  f2: (d: D) => R,
  f3: (c: C) => C,
  f4: (b: B) => B,
  f5: (a: A) => B,
  f6: Func3<A1, A2, A3, A>
): typeof f6

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose(...funcs: FlexFunction[]): FlexFunction {
  if (funcs.length === 0) {
    return (arg) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (
    (...args) => a(b(...args))
  ))
}


export {compose}
export default compose