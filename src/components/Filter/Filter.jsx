import PropTypes from 'prop-types';
import FormField from 'components/shared/FormFields/FormField';

const ContactsFilter = ({ handleChange }) => {
  return (
    <div>
      <h2>Find contact by name</h2>
      <FormField name="filter" handleChange={handleChange} />
    </div>
  );
};

export default ContactsFilter;

ContactsFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
