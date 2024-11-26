import { AxiosError } from "axios";

export interface CommonUseDataReturn<T> {
  data: T | undefined;
  error?: AxiosError;
  isLoading: boolean;
}
