import axios, { type AxiosResponse, type AxiosError } from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://localhost:3005/jokes',
  timeout: 5000,
});

export type HttpResponse<T> = AxiosResponse<T>;
export type HttpError = AxiosError;
