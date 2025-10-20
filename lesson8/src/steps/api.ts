import { RandomUserDto } from '../models/interfaces/api-user.dto';

export async function fetchRandomUser(): Promise<RandomUserDto> {
    const res = await fetch('https://randomuser.me/api/?results=3');
    if (!res.ok) {
        throw new Error('Network error');
    }
    return res.json() as Promise<RandomUserDto>;
}
