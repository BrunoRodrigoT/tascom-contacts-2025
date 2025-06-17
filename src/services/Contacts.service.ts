import type { IContact } from "../@types/Contact"

export default class ContactsService {
    private static storage = 'contacts'
    static get(): IContact[] {
        const contacts = localStorage.getItem(this.storage)
        return contacts ? JSON.parse(contacts) : []
    }

    static getOne(id: string): IContact | undefined {
        const contacts = this.get()
        return contacts.find((contact: IContact) => contact.id === id)
    }

    static post(contact: IContact) {
        const contacts = this.get()
        contacts.push(contact)
        localStorage.setItem(this.storage, JSON.stringify(contacts))
    }

    static delete(id: string) {
        const contacts = this.get()
        const filteredContacts = contacts.filter((contact: IContact) => contact.id !== id)
        localStorage.setItem(this.storage, JSON.stringify(filteredContacts))
    }

    static async update(id: string, contact: IContact) {
        try {
            const contacts = this.get()
            const filteredContacts = contacts.filter((contact: IContact) => contact.id !== id)
            filteredContacts.push(contact)
            localStorage.setItem(this.storage, JSON.stringify(filteredContacts))
        } catch (error) {
            console.error(error)
        }
    }
}