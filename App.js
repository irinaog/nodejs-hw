const contacts = require('./db');

const invokeAction = async ({ action, contactId, name, email, phone })=>{
    switch (action) {
        case 'getAll':
            const contactsList = await contacts.getAll();
            console.log(contactsList)
            break;
        case 'getContact':
            const contact = await contacts.getContactById(contactId);
            console.log(contact)
            break;
        case 'addContact':
            const newContact = await contacts.addContact({ name, email, phone });
            console.log(newContact);
            break;
        case 'removeContact':
            const removeContact = await contacts.removeContact(contactId);
            console.log(removeContact)
            break;
        
        default:
      console.warn("\x1B[31m Unknown action type!");
    }
};
// invokeAction({action:'getAll'});
// invokeAction({action:'getContact', contactId: 4});
// invokeAction({action:'removeContact', contactId:4});
// invokeAction({action:'addContact', name:'Mary', email:"@gmail.com", phone:"(692)802-2949"});
