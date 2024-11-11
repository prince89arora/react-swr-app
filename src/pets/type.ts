export interface Pet {
    id: number;
    name: string;
    dob: string;
    species: number;
    owner: number;
};

export interface UsePetsReturn {
    data: Pet[] | null;
    error: any;
    isLoading: boolean;
    createPet: (pet: Pet) => void;
}