import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error('Error reading the file', error);
  }
};

console.log(await getAllContacts());
