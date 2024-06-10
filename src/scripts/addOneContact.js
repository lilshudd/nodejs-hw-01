import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    contacts.push(createFakeContact());

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('One contact has been added.');
  } catch (error) {
    console.error('Error reading or writing the file', error);
  }
};

addOneContact();
