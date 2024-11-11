import { FC } from "react";
import { useForm } from "react-hook-form";
import { Pet } from "../type";
import usePets from "../usePets";

const PetForm: FC = () => {
  const { register, handleSubmit } = useForm<Pet>();
  const { createPet } = usePets();

  const submit = () => {
    handleSubmit((data) => {
      createPet(data);
    })();
  };

  return (
    <>
      <label htmlFor="name">Name</label>
      <input {...register("name")} />
      <label htmlFor="name">Date of Birth</label>
      <input {...register("dob")} />
      <label htmlFor="name">Species</label>
      <input {...register("species")} />
      <label htmlFor="name">Owner</label>
      <input {...register("owner")} />

      <button type="button" onClick={submit}>
        Submit
      </button>
    </>
  );
};

export default PetForm;
