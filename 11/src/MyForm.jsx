import React from 'react';

// BEGIN (write your solution here)
const MyForm = () => {
  const [values, setValues] = React.useState({ acceptRules: false, address: '', city: '', country: '', email: '', password: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const change = (event) => {
    const { name, type, value, checked } = event.target;
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };
  if (submitted) return (
    <div>
      <button type="button" className="btn btn-primary" onClick={() => setSubmitted(false)}>Back</button>
      <table className="table"><tbody>
        {Object.keys(values).sort().map((key) => <tr key={key}><td>{key}</td><td>{String(values[key])}</td></tr>)}
      </tbody></table>
    </div>
  );
  return (
    <form name="myForm" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
      <div className="col-md-6 mb-3"><label htmlFor="email" className="col-form-label">Email</label><input type="email" name="email" className="form-control" id="email" placeholder="Email" value={values.email} onChange={change} /></div>
      <div className="col-md-6 mb-3"><label htmlFor="password" className="col-form-label">Password</label><input type="password" name="password" className="form-control" id="password" placeholder="Password" value={values.password} onChange={change} /></div>
      <div className="col-md-6 mb-3"><label htmlFor="address" className="col-form-label">Address</label><textarea type="text" className="form-control" name="address" id="address" placeholder="1234 Main St" value={values.address} onChange={change} /></div>
      <div className="col-md-6 mb-3"><label htmlFor="city" className="col-form-label">City</label><input type="text" className="form-control" name="city" id="city" value={values.city} onChange={change} /></div>
      <div className="col-md-6 mb-3"><label htmlFor="country" className="col-form-label">Country</label><select id="country" name="country" className="form-control" value={values.country} onChange={change}><option value="">Choose</option><option value="argentina">Argentina</option><option value="russia">Russia</option><option value="china">China</option></select></div>
      <div className="col-md-6 mb-3"><div className="form-check"><label className="form-check-label" htmlFor="rules"><input id="rules" type="checkbox" name="acceptRules" className="form-check-input" checked={values.acceptRules} onChange={change} />Accept Rules</label></div></div>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  );
};

export default MyForm;
// END
