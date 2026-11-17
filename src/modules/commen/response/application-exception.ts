export class BadRequestException extends Error {
  constructor(message: string, public data?: any) {
    super(message);
    this.name = "BadRequestException";
  }
}