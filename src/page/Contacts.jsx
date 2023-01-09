import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Modal } from 'components/Modal/Modal';
import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading, selectShowModal } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const showModal = useSelector(selectShowModal);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <HelmetProvider>
        <Helmet>Your Contacts</Helmet>
        <ContactForm />
        <ContactFilter />
        <div>{isLoading && <Loader/>}</div>
        <ContactList />
        {showModal && <Modal />}
      </HelmetProvider>
    </>
  );
};

export default Contacts;
