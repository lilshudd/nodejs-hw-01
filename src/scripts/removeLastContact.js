import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log('Last contact has been removed.');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.error('Error reading or writing the file', error);
  }
};

removeLastContact();
