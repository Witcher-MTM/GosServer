const User_Contacts = require('../models/User_Contacts');
class ContactsController {
    async addContacts(req, res) {
        if (Array.isArray(req.body.contacts)) {
            console.log("save contacts")
            const contactsWithID = req.body.contacts.map(contact => ({ ...contact, ID: req.body.ID }));
            User_Contacts.insertMany(contactsWithID)
                .then(savedContacts => {
                    console.log('Контакты успешно сохранены');
                })
                .catch(error => {
                    console.error('Ошибка при сохранении контактов:', error);
                });
        } else {
            const contactWithID = { ...req.body.contacts, ID: req.body.ID };

            User_Contacts.create(contactWithID)
                .then(savedContact => {
                    console.log('Контакт успешно сохранен');
                })
                .catch(error => {
                    console.error('Ошибка при сохранении контакта:', error);
                });
        }
    }
}

module.exports = new ContactsController();