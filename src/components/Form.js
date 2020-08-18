import React, {useState} from 'react';

export default function Form(props) {

    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
         
        alert("form submit value is " + name);
        props.addTask(name)
        setName("");
    }
function handleChange(e) {
    console.log(e.target.value);    
    const newTask = e.target.value;
    setName(newTask);
    console.log(name);

}



    return(
        <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          onChange = {handleChange}
          value = {name}
        />
        <button 
            type="submit" 
            className="btn btn__primary btn__lg"
            onClick = {handleSubmit}
        >
          Add
        </button>
      </form>
    )
}