const fields = {
    name: {
        type: "text",
        name: "name",
        required: true,
        label: "User name",
        placeholder: "User name",
        pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        title: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    },
   
    number: {
        type: "tel",
        name: "number",
        required: true,
        label: "Phone",
        placeholder: "Phone",
        title: "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    },
};

export default fields;