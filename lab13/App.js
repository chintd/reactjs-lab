import logo from './logo.svg';
import './App.css';
import Section from './components/UI/Section';
import TaskForm from './components/NewTask/TaskForm';
import Tasks from './components/Tasks/Tasks';
import useHttp from './hooks/useHttp';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [tasks,setTasks]= useState([]);
  const {isLoading, error, sendRequest: fetchTask} = useHttp();
  const dataHandler =useCallback((taskdata)=>{
    const loadedData =[];
    for (const properties in taskdata){
      loadedData.push({
        id: properties,
        text : taskdata[properties].text
      })
    }
    setTasks(loadedData);
  })

  useEffect(()=>{
    fetchTask({url:"https://tasks-76ed3-default-rtdb.firebaseio.com/tasks.json"},dataHandler)
  },[fetchTask,dataHandler])
  function addTaskHandler(task){
    setTasks(preState => preState.concat(task))
  }
  return (
    <>
      <TaskForm onAddTask={addTaskHandler}/>
    <Section>
       <Tasks tasks={tasks} isLoading={isLoading} error={error}/>
    </Section>
    </>
  );
}

export default App;
