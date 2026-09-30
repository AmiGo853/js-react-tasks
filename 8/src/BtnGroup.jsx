import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const BtnGroup = () => {
  const [selected, setSelected] = React.useState(null);
  return (
    <div className="btn-group" role="group">
      <button type="button" className={cn('btn btn-secondary left', { active: selected === 'left' })} onClick={() => setSelected('left')}>Left</button>
      <button type="button" className={cn('btn btn-secondary right', { active: selected === 'right' })} onClick={() => setSelected('right')}>Right</button>
    </div>
  );
};

export default BtnGroup;
// END
