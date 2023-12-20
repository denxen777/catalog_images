import { useEffect, useState } from 'react';

interface IUseMyQuery<TData> {
  queryFn: () => Promise<TData>;
  enabled?: boolean;
  onSuccess?: (data: TData) => void;
  onError?: (err: any) => void;
}

export const useMyQuery = <TData>(params: IUseMyQuery<TData>) => {
  const { queryFn, enabled = true, onSuccess, onError } = params;

  const [data, setData] = useState<null | TData>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const query = async () => {
    setIsLoading(true);
    try {
      const res = await queryFn();
      setData(res);
      setIsLoading(false);
      setIsSuccess(true);

      if (onSuccess != null) {
        onSuccess(res);
      }
    } catch (e: any) {
      setIsError(true);

      if (onError != null) {
        onError(e);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = async () => {
    await query();
  };

  useEffect(() => {
    if (enabled) {
      query();
    }
  }, []);

  return {
    data,
    isLoading,
    isSuccess,
    isError,
    refetch,
  };
};
