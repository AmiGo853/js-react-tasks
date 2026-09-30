import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
const TodoBox = () => {
  const [text, setText] = React.useState('');
  const [tasks, setTasks] = React.useState([]);
  const add = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    setTasks((current) => [{ id: uniqueId(), text }, ...current]);
    setText('');
  };
  const remove = (id) => setTasks((current) => current.filter((task) => task.id !== id));
  return (
    <div>
      <div className="mb-3"><form className="d-flex" onSubmit={add}>
        <div className="me-3"><input type="text" value={text} required className="form-control" placeholder="I am going..." onChange={(event) => setText(event.target.value)} /></div>
        <button type="submit" className="btn btn-primary">add</button>
      </form></div>
      {tasks.map((task) => <Item key={task.id} task={task} onRemove={remove} />)}
    </div>
  );
};

export default TodoBox;
// END
