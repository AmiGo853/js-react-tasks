import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
const TodoBox = () => {
  const [tasks, setTasks] = React.useState([]);
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    axios.get(routes.tasksPath()).then(({ data }) => setTasks(data));
  }, []);

  const add = async (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    const { data } = await axios.post(routes.tasksPath(), { text });
    setTasks((current) => [data, ...current]);
    setText('');
  };

  const toggle = async (task) => {
    const url = task.state === 'active' ? routes.finishTaskPath(task.id) : routes.activateTaskPath(task.id);
    const { data } = await axios.patch(url);
    setTasks((current) => current.map((item) => item.id === task.id ? data : item));
  };

  const active = tasks.filter((task) => task.state === 'active');
  const finished = tasks.filter((task) => task.state === 'finished');
  return (
    <div>
      <div className="mb-3"><form className="todo-form mx-3" onSubmit={add}>
        <div className="d-flex col-md-3">
          <input type="text" value={text} required className="form-control me-3" placeholder="I am going..." onChange={(event) => setText(event.target.value)} />
          <button type="submit" className="btn btn-primary">add</button>
        </div>
      </form></div>
      {active.length > 0 && <div className="todo-active-tasks">{active.map((task) => <Item key={task.id} task={task} onClick={toggle} />)}</div>}
      {finished.length > 0 && <div className="todo-finished-tasks">{finished.map((task) => <Item key={task.id} task={task} onClick={toggle} />)}</div>}
    </div>
  );
};

export default TodoBox;
// END
