/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';

export default class ApiClient {
  // Todo: jwt token logic to be implemented
  // static accessToken = getCookie('accessToken');
  static instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // withCredentials: true,
    // headers: this.accessToken ? { Authorization: `Bearer ${this.accessToken}` ?? '' } : {},
  });

  static get<T = any, R = AxiosResponse<T>, D = any>(
    ...params: Parameters<typeof axios.get<T, R, D>>
  ): Promise<R> {
    return this.instance.get<T, R, D>(...params);
  }

  static post<T = any, R = AxiosResponse<T>, D = any>(
    ...params: Parameters<typeof axios.post<T, R, D>>
  ): Promise<R> {
    return this.instance.post<T, R, D>(...params);
  }

  static put<T = any, R = AxiosResponse<T>, D = any>(
    ...params: Parameters<typeof axios.put<T, R, D>>
  ): Promise<R> {
    return this.instance.put<T, R, D>(...params);
  }

  static patch<T = any, R = AxiosResponse<T>, D = any>(
    ...params: Parameters<typeof axios.patch<T, R, D>>
  ): Promise<R> {
    return this.instance.patch<T, R, D>(...params);
  }

  static delete<T = any, R = AxiosResponse<T>, D = any>(
    ...params: Parameters<typeof axios.delete<T, R, D>>
  ): Promise<R> {
    return this.instance.delete<T, R, D>(...params);
  }
}
