import { v4 as uuid } from "uuid";

class User {
  public id: string;
  public name: string;
  public admin: boolean;
  public email: string;
  public created_at: Date;
  public updated_at: Date;

  constructor(name: string, email: string) {
    this.id = uuid();
    this.name = name;
    this.admin = false;
    this.email = email;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  public setAsAdmin(): void {
    this.admin = true;
    this.updated_at = new Date();
  }

  public isAdmin(): boolean {
    return this.admin === true;
  }
}

export { User };
