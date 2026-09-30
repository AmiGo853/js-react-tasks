import React from 'react';

// BEGIN (write your solution here)
export default ({ title, text }) => {
  if (title === undefined && text === undefined) return null;
  return (
    <div className="card">
      <div className="card-body">
        {title !== undefined && <h4 className="card-title">{title}</h4>}
        {text !== undefined && <p className="card-text">{text}</p>}
      </div>
    </div>
  );
};
// END
