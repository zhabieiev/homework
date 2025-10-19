import { User } from '../interfaces/api-user.dto';

export class ShortUserInfo {
    public fullName: string;
    public country: string;
    public contact: string;

    public constructor(user: User) {
        this.fullName = `${user.name.first} ${user.name.last}`;
        this.country = `${user.location.country}, ${user.location.city}`;
        this.contact = `${user.email} | ${user.phone}`;
    }

    public getSummary(): string {
        return `${this.fullName} (${this.country}) — ${this.contact}`;
    }
}
