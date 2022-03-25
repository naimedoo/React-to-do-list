import React from "react";
import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { TacheContext } from "../App";

export default function Tasks () {
    const { register, handleSubmit} = useForm();
    const {Taches, setTaches } = useContext(TacheContext);

    const onSubmitHandler = (data) => {
      console.log("Data: ", data);
      const copyTaches = [...Taches];
      const dernierID = copyTaches[copyTaches.length - 1].id;
      const tache = {
          id: dernierID + 1,
          title: data.task,
          priority: data.priority
      }
      copyTaches.push(tache);
      setTaches(copyTaches);
  }
//   const onSubmitHandler = (data) => {
//     console.log("Data: ", data);
//     const copyTaches = [...taches];
//     const dernierID = copyTaches[copyTaches.length - 1].id;
//     const tache = {
//         id: dernierID + 1,
//         title: data.task,
//         priority: data.priority
//     }
//     copyTaches.push(tache);
//     setTaches(copyTaches);
// }
  return (
    <>
    <h1>Ajouter une tâches</h1>
    <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Nom de la Tache</label>
                    <input type="text" {...register("task")} className="form-control" id="task" />
                </div>
                <select className="form-select"  {...register("priority")} id="priotity" >
                    <option>Pas important</option>
                    <option>Important</option>
                    <option>Urgent</option>
                    </select>
                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>
    </>
  )

 
}











//import { useForm } from "react-hook-form";
// import { useContext } from "react";
// import { TitreContext } from "../App";

// const {register, handleSubmit, formState} = useForm();
// const {errors} = formState;
// // console.log("register ===>", register)
// // console.log('error ===>', errors);
// const {tache, setTache}= useContext(TacheContext)
// const TacheInput = register("nom")
// // console.log("TacheInput ===>", TacheInput)
// const PrioriteInput = register('select')
// // console.log('PrioriteInput ===>', PrioriteInput)

// const onSubmitHandler = (data) => {
//   console.log('data ===>', data)
//   const copyTache=[...contexte.Task]
//   const LastId= copyTache[1].id;
//   console.log("LastId ===>", LastId)
//   let tache = {
//     id: LastId + 1,
//     title: data.TacheInput,
//     priorite:data.PrioriteInput
//   }
//   copyTache.push(tache)
//   setTask=(copyTache)
// }

// // const contexte = useContext(TitreContext)
// return (
//   <>
//     <h1>Ajouter une tâche</h1>
//     <form onSubmit={handleSubmit(onSubmitHandler)} formState={formState}>
//       <div className="mb-3">
//         <label HTMLfor="exampleInputEmail1" className="form-label">Nom</label>
//         <input type="text" className="form-control" id="exampleInputText"{...TacheInput} />
//       </div>
//     </form>
//     <select class="form-select" aria-label="Default select example"{...PrioriteInput}>
//       <option selected>Selectionner un menu</option>
//       <option value="1">Pas important</option>
//       <option value="2">Important</option>
//       <option value="3">Urgent</option>
//     </select>
//     <div>
//     <button type="submit" class="btn btn-primary">Submit</button>
//     </div>
//   </>
// )