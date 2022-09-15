const {nanoid} = require('nanoid');
const fs = require('fs/promises');
const path = require('path'); 


const contactsPath = path.join(__dirname, "contacts.json");
const updateContacts = async(contacts) => await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

const getAll = async () => {
    const contacts = await fs.readFile(contactsPath, 'utf-8');
    return JSON.parse(contacts)
};

const getContactById = async (id) => {
    const contacts = await getAll();
    const contactId = String(id);
    const getContact = contacts.find(contact => contact.id === contactId)
    return getContact || null;
};


const removeContact = async (id) => {
    const contacts = await getAll();
    const contactId = String(id);
    const index = contacts.findIndex(contact => contact.id === contactId)
    if (index === -1) {
        return null
    };
    const [removeContact] = contacts.splice(index, 1);
    await updateContacts(contacts);
    return removeContact;
};

const addContact = async({ name, email, phone }) =>{
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone
    };
    const contacts = await getAll();
    contacts.push(newContact)
    // updateContacts(contacts);
    return newContact;
};

module.exports = {
    getAll,
    getContactById,
    removeContact,
    addContact,
};