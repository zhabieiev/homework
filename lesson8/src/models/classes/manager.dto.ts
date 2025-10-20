import { Person } from '../abstract/person.dto';
import { Employee } from './employee.dto';

export class Manager extends Person {
    public fullName: string;
    public contactInfo: string;
    public position: string;
    public team: Employee[];

    public constructor(fullName: string, contactInfo: string, position: string, team: Employee[] = []) {
        super();
        this.team = team;
        this.fullName = fullName;
        this.contactInfo = contactInfo;
        this.position = position;
    }

    public introduce(): string {
        return `Hello! I'm ${this.fullName}, my position is — ${this.position}. My contacts: ${this.contactInfo}`;
    }

    public printTeam(): void {
        console.log(`Team manager: ${this.fullName}, Position: ${this.position}, Contacts: ${this.contactInfo}`);
        this.team.forEach((emp) => console.log(emp.introduce()));
    }
}
