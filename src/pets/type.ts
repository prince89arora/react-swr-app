import { CommonUseDataReturn } from "../types";

export interface Pet {
  id: number;
  name: string;
  dob: string;
  species: number;
  owner: number;
}

export interface UsePetsReturn extends CommonUseDataReturn<Pet[]> {
  createPet: (pet: Pet) => void;
}
