export abstract class Person {
    public abstract fullName: string;
    public abstract contactInfo: string;

    public introduce(): string {
        return `Hello! I'm ${this.fullName}. My contacts: ${this.contactInfo}`;
    }

    public getEmail(): string {
        return this.contactInfo.split('|')[0].trim();
    }
}
