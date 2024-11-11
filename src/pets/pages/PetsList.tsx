import { FC } from "react";
import useSWR from "swr";
import PetForm from "../forms/PetForm";

const PetsList: FC = () => {
  const { data, error, isLoading } = useSWR("/pets");

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>failed to load</div>}
      {data && data.map((pet: any) => <div key={pet.id}>{pet.name}</div>)}

      <PetForm />
    </>
  );
};

export default PetsList;
