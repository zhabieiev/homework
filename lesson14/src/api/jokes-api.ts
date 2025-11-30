import { Joke } from '../types/joke';
import { httpClient } from './http-client';

export const jokesApi = {
    getTen: async (): Promise<Joke[]> => {

        const res = await httpClient.get<Joke[]>('/ten');
        return res.data;
    },

    getRandom: async (): Promise<Joke> => {
        const res = await httpClient.get<Joke>('/random');
        return res.data;
    },

    getProgrammingRandom: async (): Promise<Joke> => {
        const res = await httpClient.get<Joke>('/programming/random');
        return res.data;
    },

    getGeneralRandom: async (): Promise<Joke> => {
        const res = await httpClient.get<Joke>('/general/random');
        return res.data;
    }
};
