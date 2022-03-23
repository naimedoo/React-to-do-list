import TaskList from './Components/TaskList';
import Task from './Components/Taxk';
import './App.css';
import { createContext,useState } from 'react';

export const TitreContext= createContext({});

export default function App () {
    const [Tasks,setTask] = useState(
      [
  { id: 1, title: 'Tache 01', priority: 'Important'},        
  { id: 2, title: 'Tache 02', priority: 'Urgent'}   
    ]
)
const titleTask = {
  title: Tasks,
  changeTask:setTask
}
return (
    <>
    <TitreContext.Provider value={titleTask}>
      <TaskList />
      <Task/>
    </TitreContext.Provider>
    </>
  )
}