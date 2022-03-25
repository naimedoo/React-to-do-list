import Tasks from './Components/Tasks';
import TaskList from './Components/TaskList';
import './App.css';
import { createContext,useState } from 'react';



 export const TacheContext= createContext({});

export default function App () {
  const [Taches, setTaches] = useState(
    [
      { id: 1, title: 'Tache 01', priority: 'Important'},        
      { id: 2, title: 'Tache 02', priority: 'Urgent'}   
   ]
  )
  const state = {
    Taches: Taches,
    setTaches:setTaches
  }
  return (
    <>
    <TacheContext.Provider value={state}>
      <Tasks/>
      <TaskList/>
   </TacheContext.Provider>
    </>
  )


}





//     const [Tasks,setTask] = useState(
//       [
//   { id: 1, title: 'Tache 01', priority: 'Important'},        
//   { id: 2, title: 'Tache 02', priority: 'Urgent'}   
//     ]
// )
// const state= {
//   title: Tasks,
//   changeTask:setTask
// }
// return (
//     <>
//     <TacheContext.Provider value={state}>
//       <TaskList />
//       <Task/>
//     </TacheContext.Provider>
//     </>
//   )