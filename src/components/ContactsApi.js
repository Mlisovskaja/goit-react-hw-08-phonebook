import authInstance from "./Api";

export const getAllContacts = async () => {
  const { data } = await authInstance.get('/contacts');
  return data;
};

export const handleAddContact = async data => {
  const { data: result } = await authInstance.post('/contacts', data);
  return result;
};

export const handleDeleteContact = async id => {
  const { data } = await authInstance.delete(`/contacts/${id}`);
  return data;
};
