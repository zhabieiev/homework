import { fetchRandomUser } from './steps/api';
import { Employee} from './models/classes/employee.dto';
import { Manager } from './models/classes/manager.dto';
import { RandomUserDto, User } from './models/interfaces/api-user.dto';
import { ShortUserInfo } from './models/classes/short-user-info.dto';

async function main(): Promise<void> {
    console.log('Getting users...');

    const data: RandomUserDto = await fetchRandomUser();

    const shortUsers: ShortUserInfo[] = data.results.map((user: User) => new ShortUserInfo(user));

    console.log('\n=== Received users ===');
    shortUsers.forEach((u: ShortUserInfo) => console.log(u.getSummary()));

    const maleUsers = data.results.filter(u => u.gender === 'male');
    const femaleUsers = data.results.filter(u => u.gender === 'female');

    const createTeam = (users: User[]): Employee[] => {
        return users.map((u, index) => {
            const role = index === 0 ? 'QA Engineer' : index === 1 ? 'Automation QA' : 'Team Member';
            const contact = `${u.email} | ${u.phone}`;
            const fullName = `${u.name.first} ${u.name.last}`;
            return new Employee(fullName, contact, role);
        });
    };

    const maleTeam: Employee[] = createTeam(maleUsers);
    const femaleTeam: Employee[] = createTeam(femaleUsers);

    const maleManager = new Manager(
        'Georgii Zhabieiev',
        'georgii.zhabieiev@example.com | +380674042203',
        'Team Lead',
        maleTeam
    );

    const femaleManager = new Manager(
        'Iryna Zhabieieva',
        'iryna.zhabieieva@example.com | +380672091837',
        'Team Lead',
        femaleTeam
    );

    console.log('\n=== Male Team ===');
    maleManager.printTeam();

    console.log('\n=== Female Team ===');
    femaleManager.printTeam();
}

void main();
