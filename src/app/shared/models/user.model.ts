export class User {
  public email: string;
  public password: string;
  public firstName?: string;
  public userName?: string;
  public phone?: string;
  public _id?: string;
  constructor(
    email: string,
    password: string,
    firstName? : string,
    userName? : string,
    phone?: string,
    _id?: string
  ) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.userName = userName;
    this.phone = phone;
    this._id = _id;
  }

  fullName() {
    return `${this.firstName}`;
  }
}
