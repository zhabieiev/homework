import { describe, it, expect } from 'vitest';
import { httpClient } from '../api/http-client';

describe('httpClient', () => {
  it('should have correct baseURL', () => {
    expect(httpClient.defaults.baseURL).toBe('http://localhost:3005/jokes');
  });

  it('should have timeout 5000', () => {
    expect(httpClient.defaults.timeout).toBe(5000);
  });
});
