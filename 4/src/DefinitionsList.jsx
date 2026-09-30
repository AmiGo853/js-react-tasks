import React from 'react';

// BEGIN (write your solution here)
const DefinitionsList = ({ data }) => data.length === 0 ? null : (
  <dl>
    {data.map(({ id, dt, dd }) => (
      <React.Fragment key={id}>
        <dt>{dt}</dt>
        <dd>{dd}</dd>
      </React.Fragment>
    ))}
  </dl>
);

export default DefinitionsList;
// END
