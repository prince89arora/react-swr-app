import { FC } from "react";
import useSWR from "swr";
import { fetcher } from "../../global/fetcher";

const PetsList: FC = () => {
  const { data, error, isLoading } = useSWR("/pets", fetcher);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>failed to load</div>}
      {data && data.map((pet: any) => <div key={pet.id}>{pet.name}</div>)}
    </>
  );
};

export default PetsList;