import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import ToDo from './components/ToDo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

function App(props) {

  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map((task)=>{
    return <ToDo 
      id = {task.id}
      name = {task.name}      
      completed = {task.completed}
      key = {task.id}
      toggleTaskCompleted = {toggleTaskCompleted}
    />
    
  })   

  function addTask(name) {
    const newTask = {id: "todo-" + nanoid(), name: name, completed: false};
    console.log(newTask)
    setTasks([...tasks, newTask]);  
    console.log(tasks)  
  }
  const nounHeading = (tasks.length !== 1)? "tasks": "task";
  const headingTasks = ` ${tasks.length} ${nounHeading} remaining`;

  function toggleTaskCompleted(id) {
    const updateTaskComplete = tasks.map((task)=>{
      if(id === task.id){
        return{...task, completed: !task.completed }
      }
      return task
    });
    setTasks(updateTaskComplete);

  }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask = {addTask}/>
      <div className="filters btn-group stack-exception">
       <FilterButton name = "all" pressed = "true"/>
       <FilterButton name = "Active" pressed = "false"/>
       <FilterButton name = "Completed" pressed = "false"/>
        
      </div>
      <h2 id="list-heading">
       {headingTasks}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
       {taskList}
      </ul>
    </div>
  );
}

export default App;
