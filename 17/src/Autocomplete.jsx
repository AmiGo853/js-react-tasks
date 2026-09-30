import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
const Autocomplete = () => {
  const [term, setTerm] = React.useState('');
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    if (!term) {
      setCountries([]);
      return undefined;
    }
    let current = true;
    axios.get('/countries', { params: { term } }).then(({ data }) => {
      if (current) setCountries(data);
    });
    return () => { current = false; };
  }, [term]);

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input type="text" className="form-control" placeholder="Enter Country" value={term} onChange={(event) => setTerm(event.target.value)} />
      </form>
      {term && countries.length > 0 && <ul>{countries.map((country) => <li key={country}>{country}</li>)}</ul>}
    </div>
  );
};

export default Autocomplete;
// END
