// ---- status names

const LONG = Symbol();
const VALID = Symbol();
const SHORT = Symbol();
const MISSING = Symbol();
const UNMATCHING = Symbol();

type LONG = typeof LONG;
type VALID = typeof VALID;
type SHORT = typeof SHORT;
type MISSING = typeof MISSING;
type UNMATCHING = typeof UNMATCHING;

type ANY = 
  | typeof LONG
  | typeof VALID
  | typeof SHORT
  | typeof MISSING
  | typeof UNMATCHING


// ---- default status message creators

const MESSAGES = Object.freeze({
  LONG: (label: string, max: number) => (
    `${label} must not be longer than ${max} character${max > 1 ? "s" : ""}`
  ),
  
  VALID: (label: string) => (
    `${label} is valid`
  ),
  
  SHORT: (label: string, min: number) => (
    `${label} must not be shorter than ${min} character${min > 1 ? "s" : ""}`
  ),
  
  MISSING: (label: string) => (
    `${label} is required`
  ),
  
  UNMATCHING: (label: string, pattern: RegExp) => (
    `${label} does not match the pattern: ${pattern}`
  ),
});


// ---- types of status message creators

type LongInputMessageCreator = (label: string, max: number) => string;
type ShortInputMessageCreator = (label: string, min: number) => string;
type ValidInputMessageCreator = (label: string) => string;
type MissingInputMessageCreator = (label: string) => string;
type UnmatchingInputMessageCreators = (label: string, pattern: RegExp) => string;


// ---- validator creator's option

type Options = {
  /** defaults to `-Infinity` */
  min?: number | undefined;
  /** defaults to `Infinity` */
  max?: number | undefined;
  label: string;
  /** defaults to `undefined` */
  pattern?: RegExp | undefined;
  /** defaults to `false` */
  required?: boolean | undefined;
  /** defaults to the default status message creators */
  Messages?: undefined | {
    LONG?: ShortInputMessageCreator;
    SHORT?: LongInputMessageCreator;
    VALID?: ValidInputMessageCreator;
    MISSING?: MissingInputMessageCreator;
    UNMATCHING?: UnmatchingInputMessageCreators;
  } 
}


// ---- validator creator

const Validator = ({label, min, max, pattern, required, Messages}: Options) => {
  const isNotMissing = ValuePresenceChecker(label, required, Messages?.MISSING);
  const isNotTooLong = MaxLengthChecker(label, max, Messages?.LONG);
  const isNotTooShort = MinLengthChecker(label, min, Messages?.SHORT);
  const isLikePattern = PatternChecker(label, pattern, Messages?.UNMATCHING);
  

  // the order is important
  const checkers = [
    isNotMissing,
    isLikePattern,    
    isNotTooShort,
    isNotTooLong,
  ];


  return (input: string = "") => {
    for (let checker of checkers) {
      const status = checker(input);

      if (status !== true) {
        return status;
      }
    }

    if (Messages?.VALID) {
      return [Messages?.VALID(label), VALID] as const;
    } else {
      return [MESSAGES.VALID(label), VALID] as const;
    }
  };
};


// ---- sub-validator creators

const PatternChecker = (label: string, pattern?: RegExp, Message?: UnmatchingInputMessageCreators) => (
  (input: string) => {
    if (!pattern) {
      return true;
    } else if (pattern.test(input)) {
      return true;
    } else if (Message) {
      return [Message(label, pattern), UNMATCHING] as const;
    } else {
      return [MESSAGES.UNMATCHING(label, pattern), UNMATCHING] as const;
    }
  }
);

const MinLengthChecker = (label: string, min: number = -Infinity, Message?: ShortInputMessageCreator) => (
  (input: string) => {
    if (input.length >= min) {
      return true;
    } else if (Message) {
      return [Message(label, min), SHORT] as const;
    } else {
      return [MESSAGES.SHORT(label, min), SHORT] as const;
    }
  }
);

const MaxLengthChecker = (label: string, max: number = -Infinity, Message?: LongInputMessageCreator) => (
  (input: string) => {
    if (input.length <= max) {
      return true;
    } else if (Message) {
      return [Message(label, max), LONG] as const;
    } else {
      return [MESSAGES.LONG(label, max), LONG] as const;
    }
  }
);

const ValuePresenceChecker = (label: string, required: boolean = false, Message?: MissingInputMessageCreator) => (
  (input: string) => {
    if (!required) {
      return true;
    } else if (input.length > 0) {
      return true;
    } else if (Message) {
      return [Message(label), MISSING] as const;
    } else {
      return [MESSAGES.MISSING(label), MISSING] as const;
    }
  }
);


export {
  ANY,
  LONG,
  VALID,
  SHORT,
  MISSING,
  Options,
  Validator,
  UNMATCHING,
}

export default Validator;