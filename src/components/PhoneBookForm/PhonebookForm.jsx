import { useState } from 'react';
import PropTypes from 'prop-types';

import FormField from 'components/shared/FormFields/FormField';
import fields from './fields';

import initialState from './InitialState';
import styles from './phonebook.module.css';

const PhonebookForm = ({ onSubmit }) => {
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

  const { name, number } = state;

  return (
    <div className={styles.wrap}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Phonebook</h2>
        <FormField value={name} handleChange={handleChange} {...fields.name} />

        <FormField
          value={number}
          handleChange={handleChange}
          {...fields.number}
        />
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default PhonebookForm;

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
