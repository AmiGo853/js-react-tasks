import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
const Component = () => {
  const [items, setItems] = React.useState([]);
  const add = (delta) => setItems((current) => [{ id: uniqueId(), value: get(current, '[0].value', 0) + delta }, ...current]);
  const remove = (id) => setItems((current) => current.filter((item) => item.id !== id));
  return (
    <div>
      <div className="btn-group font-monospace" role="group">
        <button type="button" className="btn btn-outline-success" onClick={() => add(1)}>+</button>
        <button type="button" className="btn btn-outline-danger" onClick={() => add(-1)}>-</button>
      </div>
      {items.length > 0 && <div className="list-group">{items.map(({ id, value }) => <button key={id} type="button" className="list-group-item list-group-item-action" onClick={() => remove(id)}>{value}</button>)}</div>}
    </div>
  );
};

export default Component;
// END
