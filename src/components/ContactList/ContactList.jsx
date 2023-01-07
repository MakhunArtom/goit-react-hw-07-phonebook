import { Spiner } from 'components/Spiner/Spiner';
import { ListBox } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../Redux/sliceContacts';
import { getFilter } from '../../Redux/sliceFilter';
import { ContactsItems } from 'components/ContactsItems/ContactsItems';

export const ContactList = () => {
  // Redux отримуєм з сховища дані
  const { data: contacts, isFetching } = useGetContactsQuery();

  const filter = useSelector(getFilter);

  // фільтруємо контакти, filter нормалізуємо,
  //  щоб на кажній ітерації не викликати ловерКейс

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
    <ListBox>
      {isFetching && <Spiner />}
      <ul>
        {contacts &&
          filteredContacts.map(contact => (
            <ContactsItems key={contact.id} {...contact} />
          ))}
      </ul>
    </ListBox>
  );
};
