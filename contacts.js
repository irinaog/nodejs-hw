const { appendFile } = require('fs');
const fs = require('fs/promises');
const path = require('path');

const contactsPath = './db/contacts.json';

function listContacts() {
   const data =  fs.readFile(contactsPath, 'utf-8');
    data.then(contacts => console.log(contacts.json()))
    .catch(err=>console.log(err))
};
function getContactById(contactId) {
    console.log(contactId)
    fs.readFile(contactsPath, 'utf-8').then(data => {
        const contacts = JSON.parse(data);
        const getContact = contacts.find(contact => contact.id == contactId);
        console.log(getContact);
    })
   
}

function removeContact(contactId) {
    console.log(contactId)
    // const data = fs.writeFile(contactsPath)
};

function addContact(name, email, phone) {
    const newContact = {
        id: "15",
        name: `${name}`,
        email: `${email}`,
        phone: `${phone}`
    };
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};