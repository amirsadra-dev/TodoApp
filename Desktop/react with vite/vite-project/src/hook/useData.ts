import { useState, useEffect } from "react";
import apiClient from "../assets/services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
export const useData = <T>(
  endpoint: string,
  requesConfig?: AxiosRequestConfig,
  deps?: unknown[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          ...requesConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    },
    deps ? [...deps] : []);
  
  return { data, error, loading };
};
