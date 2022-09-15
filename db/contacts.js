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

const addContact = async ({ name, email, phone }) => {
    const contacts = await getAll();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone
    };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
};

module.exports = {
    getAll,
    getContactById,
    removeContact,
    addContact,
};

// [
//   {
//     "id": "1",
//     "name": "Allen Raymond",
//     "email": "nulla.ante@vestibul.co.uk",
//     "phone": "(992) 914-3792"
//   },
//   {
//     "id": "2",
//     "name": "Chaim Lewis",
//     "email": "dui.in@egetlacus.ca",
//     "phone": "(294) 840-6685"
//   },
//   {
//     "id": "3",
//     "name": "Kennedy Lane",
//     "email": "mattis.Cras@nonenimMauris.net",
//     "phone": "(542) 451-7038"
//   },
//   {
//     "id": "4",
//     "name": "Wylie Pope",
//     "email": "est@utquamvel.net",
//     "phone": "(692) 802-2949"
//   },
//   {
//     "id": "5",
//     "name": "Cyrus Jackson",
//     "email": "nibh@semsempererat.com",
//     "phone": "(501) 472-5218"
//   },
//   {
//     "id": "6",
//     "name": "Abbot Franks",
//     "email": "scelerisque@magnis.org",
//     "phone": "(186) 568-3720"
//   },
//   {
//     "id": "7",
//     "name": "Reuben Henry",
//     "email": "pharetra.ut@dictum.co.uk",
//     "phone": "(715) 598-5792"
//   },
//   {
//     "id": "8",
//     "name": "Simon Morton",
//     "email": "dui.Fusce.diam@Donec.com",
//     "phone": "(233) 738-2360"
//   },
//   {
//     "id": "9",
//     "name": "Thomas Lucas",
//     "email": "nec@Nulla.com",
//     "phone": "(704) 398-7993"
//   },
//   {
//     "id": "10",
//     "name": "Alec Howard",
//     "email": "Donec.elementum@scelerisquescelerisquedui.net",
//     "phone": "(748) 206-2688"
//   }
// ]