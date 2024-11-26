import { CommonUseDataReturn } from "../types";

export interface Owner {
  id: number;
  name: string;
  dob: string;
  email: string;
}

export interface UseOwnersReturn extends CommonUseDataReturn<Owner[]> {
  createOwner: (owner: Owner) => void;
}
