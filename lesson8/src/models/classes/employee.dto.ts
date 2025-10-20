import { Person } from '../abstract/person.dto';
export class Employee extends Person {
    public fullName: string;
    public contactInfo: string;
    public position: string;

    public constructor(fullName: string, contactInfo: string, position: string) {
        super();
        this.fullName = fullName;
        this.contactInfo = contactInfo;
        this.position = position;
    }

    public introduce(): string {
        return `Hello! I'm ${this.fullName}, my position is ${this.position}. My contacts: ${this.contactInfo}`;
    }
}
