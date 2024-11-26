import useSWR from "swr";
import { Pet, UsePetsReturn } from "./type";
import api from "../global/api";
import { AxiosError } from "axios";

/**
 * Fetches all pets from the API and provides a function to create a new pet.
 *
 * @returns An object with the following properties:
 *   - data: The list of pets, or undefined if the request is still loading or has failed.
 *   - error: An error object if the request has failed, or undefined otherwise.
 *   - isLoading: Whether the request is still loading.
 *   - createPet: A function that takes a new pet object and creates it on the server. If the request is
 *     successful, the `data` property will be updated with the new pet.
 */
const usePets = (): UsePetsReturn => {
  const { data, error, isLoading, mutate } = useSWR<Pet[], AxiosError>("/pets");

  const createPet = async (newPet: Pet) => {
    try {
      const response = await api.post("/pets", newPet);
      if (response.status === 201) {
        mutate();
      }
    } catch (error) {
      console.error("Failed to create pet:", error);
    }
  };

  return {
    data,
    error,
    isLoading,
    createPet,
  };
};

export default usePets;
