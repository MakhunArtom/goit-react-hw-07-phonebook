import { useDeleteContactMutation } from '../../Redux/sliceContacts';
import { ContactIt, Item } from './ContactsItems.styled';
import { IconButton } from 'components/IconButton/IconButton';
import { SpinerDelete } from 'components/Spiner/Spiner';
import { MdDeleteOutline } from 'react-icons/md';

export const ContactsItems = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item>
      <ContactIt>
        {name}: {phone}
      </ContactIt>
      <IconButton
        type="button"
        onClick={() => deleteContact(id)}
        aria-label="Delete contact"
      >
        {isDeleting ? <SpinerDelete /> : <MdDeleteOutline size="20px" />}
      </IconButton>
    </Item>
  );
};
