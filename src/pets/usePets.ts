import useSWR from "swr";
import { fetcher } from "../global/fetcher";
import { Pet, UsePetsReturn } from "./type";
import api from "../global/api";

const usePets = (): UsePetsReturn => {

    const { data, error, isLoading, mutate } = useSWR("/pets", fetcher);

    const createPet = async (pet: Pet) => {
        const response = await api.post("/pets", pet);
        // response.status === 201 && mutate();
    }

    return {
        data,
        error,
        isLoading,
        createPet
    }

};

export default usePets;