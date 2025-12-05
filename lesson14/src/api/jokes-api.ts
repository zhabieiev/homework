import { httpClient, type HttpResponse, type HttpError } from './http-client';
import type { Joke } from '../types/joke';

export class JokesApi {
  static async getTen(): Promise<{ data: Joke[]; status: number }> {
    try {
      const res: HttpResponse<Joke[]> = await httpClient.get('/ten');
      return { data: res.data, status: res.status };
    } catch (err) {
      const error = err as HttpError;
      throw { message: error.message, status: error.response?.status };
    }
  }
}
