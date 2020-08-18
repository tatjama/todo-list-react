import React from 'react';
import ToDo from './components/ToDo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

function App(props) {

  const tasks = props.tasks.map((task)=>{
    return <ToDo 
      name = {task.name}
      id = {task.id}
      completed = {task.completed}
      key = {task.id}
    />
    
  }) 

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form/>
      <div className="filters btn-group stack-exception">
       <FilterButton name = "all" pressed = "true"/>
       <FilterButton name = "Active" pressed = "false"/>
       <FilterButton name = "Completed" pressed = "false"/>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
       {tasks}
      </ul>
    </div>
  );
}

export default App;
