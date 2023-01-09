import { useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/contacts/selectors';
import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css'

export const ContactList = () => {
  const items = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);

  let foundContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter)
  );

  return (
    <div className={css.list_box}>
      <ul className={css.list}>
        {items.length > 0 ? (
          foundContacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))
        ) : (
          <p>Contact list is empty</p>
        )}
      </ul>
    </div>
  );
};
