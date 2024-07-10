export class CustomError extends Error {
  status: number;
  type: "fail" | "error";

  constructor(message: string, status: number) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.type = this.status < 500 || !this.status ? "fail" : "error";
    Error.captureStackTrace(this, this.constructor);
  }
}
