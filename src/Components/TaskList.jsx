import React from "react";
import { useContext } from "react";
import { TitreContext } from "../App";
 
export default function TaskList () {
    const order  = useContext(TitreContext)
    // console.log(order)
    return (
        <>
        <h1>Liste des taches</h1>
        {order.title.map((list) => {
            return <div><h2>{list.title}</h2> <p>{list.priority}</p></div>
        })}
        </>
    )
}