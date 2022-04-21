const Error = class extends globalThis.Error {
  constructor(status: number, message: string = "") {
    super();
    this.status = status;
    this.message = message;
  }

  
  status: number;
  message: string;


  toString() {
    return `${this.status}: ${this.message}`;
  }
};

export default Error;