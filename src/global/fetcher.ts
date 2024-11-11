import api from "./api";

export const fetcher = async (url: string) => {
    return (await api.get(url)).data;
};