import { describe, it, expect } from 'vitest';
import { jokesApi } from '../api/jokes-api';

describe('Jokes API', () => {
    it('TEN: returns 10 jokes', async () => {
        const jokes = await jokesApi.getTen();
        expect(jokes.length).toBe(10);
    });

    it('RANDOM: returns one joke', async () => {
        const joke = await jokesApi.getRandom();
        expect(joke).toHaveProperty('punchline');
    });

    it('Programming type jokes', async () => {
        const res = await jokesApi.getProgrammingRandom();
        const list = Array.isArray(res) ? res : [res];
        list.forEach(j => expect(j.type).toBe('programming'));
    });

    it('General type jokes', async () => {
        const res = await jokesApi.getGeneralRandom();
        const list = Array.isArray(res) ? res : [res];
        list.forEach(j => expect(j.type).toBe('general'));
    });

    it('TEN: unique IDs', async () => {
        const jokes = await jokesApi.getTen();
        const ids = jokes.map(j => j.id);
        const unique = new Set(ids);
        expect(unique.size).toBe(ids.length);
    });
});
