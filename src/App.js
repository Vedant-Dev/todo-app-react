import './App.css';
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Todo from './ToDo';
import List from '@material-ui/core/List';

function App() {
  const [toDo, setToDo] = useState([
    'This is my first task'
    ]);
  const addTask = (event) => {
    event.preventDefault()
    setToDo([...toDo,input]);
    setInput('');
  }

  const [input, setInput] = useState('');
  return (
    <div className="App">
      <h1>Hellow World 🚀🚀</h1>
      <form autoComplete="on">
       <TextField value={input} onChange={event => setInput(event.target.value)} id="outlined-basic" label="📝Enter Your Task" variant="outlined" />
      <Button disabled={!input} type="submit" onClick={addTask} variant="contained" color="primary">Add ToDo</Button>
      </form>
        <List>
          {toDo.map(t => {return <Todo text={t}/>})}
        </List>
    </div>
  );
}

export default App;
