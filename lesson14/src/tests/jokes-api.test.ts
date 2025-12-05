import { describe, it, expect, vi } from 'vitest';
import { JokesApi } from '../api/jokes-api';
import { httpClient } from '../api/http-client';
import type { Joke } from '../types/joke';

vi.mock('../api/http-client');

describe('JokesApi', () => {
  const jokes: Joke[] = [
    { id: 1, type: 'general', setup: 'Setup 1', punchline: 'Punchline 1' },
    { id: 2, type: 'general', setup: 'Setup 2', punchline: 'Punchline 2' },
  ];

  it('should return jokes array', async () => {
    (httpClient.get as any).mockResolvedValue({ data: jokes, status: 200 });
    const res = await JokesApi.getTen();
    expect(res.data).toEqual(jokes);
    expect(res.status).toBe(200);
  });

  it('should throw error with message and status', async () => {
    (httpClient.get as any).mockRejectedValue({
      message: 'Network Error',
      response: { status: 500 },
    });
    await expect(JokesApi.getTen()).rejects.toEqual({ message: 'Network Error', status: 500 });
  });

  it('should handle empty jokes array', async () => {
    (httpClient.get as any).mockResolvedValue({ data: [], status: 200 });
    const res = await JokesApi.getTen();
    expect(res.data).toEqual([]);
  });
});
