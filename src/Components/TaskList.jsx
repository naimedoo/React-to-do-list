import React from "react";
import { useContext } from "react";
import { TacheContext } from "../App";
 
export default function TaskList () {
    const contexte = useContext(TacheContext);
    const Taches = contexte.Taches;
  
    return (
        <>
        <h1>Liste des tâches</h1>
        {Taches.map((tache)=> {
            return <div key={tache.id}>
                <h2>{tache.title}</h2>
                <p>{tache.priority}</p>
                </div>
        })}
        </>

    )
 
}








   






// const order  = useContext(TitreContext)
    // // console.log(order)
    // return (
    //     <>
    //     <h1>Liste des taches</h1>
    //     {order.title.map((list) => {
    //         return <div><h2>{list.title}</h2> <p>{list.priority}</p></div>
    //     })}
    //     </>
    // )