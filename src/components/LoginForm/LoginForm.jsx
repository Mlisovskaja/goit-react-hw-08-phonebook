import { useState } from 'react';

import FormField from 'components/shared/FormFields/FormField';
import fields from './fields';
import initialState from './InitialState';

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <FormField value={email} handleChange={handleChange} {...fields.email} />
      <FormField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
