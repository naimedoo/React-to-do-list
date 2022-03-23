import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";

export default function  Task () {
  const {register, handleSubmit, formState} = useForm();
  const {errors} = formState;
  // console.log("register ===>", register)
  // console.log('error ===>', errors);

  const TacheInput = register("nom")
  // console.log("TacheInput ===>", TacheInput)
  const PrioriteInput = register('select')
  // console.log('PrioriteInput ===>', PrioriteInput)

  const onSubmitHandler = (data) => {
    console.log('data ===>', data)
  }
  const onErrorHandler = (error) => {
    console.error("error ===>", error)
  }
  return (
    <>
      <h1>Tâche</h1>
      <form onSubmit={handleSubmit(onSubmitHandler,onErrorHandler)} formState={formState}>
        <div className="mb-3">
          <label HTMLfor="exampleInputEmail1" className="form-label">Nom</label>
          <input type="text" className="form-control" id="exampleInputText"{...TacheInput} />
        </div>
      </form>
      <select class="form-select" aria-label="Default select example"{...PrioriteInput}>
        <option selected>Open this select menu</option>
        <option value="1">Pas important</option>
        <option value="2">Important</option>
        <option value="3">Urgent</option>
      </select>
      <div>
      <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </>
  )
}