import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import s from './ContactList.module.css';
import ContactListItem from './ContactListItem';
import * as phonebookOperation from '../../redux/phonebook/phonebook-operation';
import { getVisibleContact } from '../../redux/phonebook/phonebook-selectors';

export default function ContactList() {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookOperation.deleteContact(id));

  useEffect(() => {
    dispatch(phonebookOperation.fetchContact());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          id={id}
          key={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}
