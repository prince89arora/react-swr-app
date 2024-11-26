import useSWR from "swr";
import { Owner, UseOwnersReturn } from "./type";
import { AxiosError } from "axios";
import api from "../global/api";

const useOwners = (): UseOwnersReturn => {
  const { data, error, isLoading, mutate } = useSWR<Owner[], AxiosError>(
    "/owners"
  );

  const createOwner = async (owner: Owner) => {
    try {
      const response = await api.post("/owners", owner);
      if (response.status === 201) {
        mutate();
      }
    } catch (error) {
      console.error("Failed to create owner:", error);
    }
  };

  return {
    data,
    error,
    isLoading,
    createOwner,
  };
};

export default useOwners;
