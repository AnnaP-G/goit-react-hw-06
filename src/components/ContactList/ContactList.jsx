import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  const noContacts = filteredContacts.length === 0 && filter.trim() !== "";

  return (
    <div>
      {noContacts && <p>No contacts found.</p>}
      <ul className={css.contactList}>
        {filteredContacts.map(({ name, number, id }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
