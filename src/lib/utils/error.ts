import { AxiosError } from 'axios';

export function handleApiError(error: AxiosError, context: string): void {
  const message = error.response?.data?.error?.message || error.message;
  console.error(`${context} API Error:`, message);
}