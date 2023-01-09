import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';
import { setShowModal } from 'redux/contacts/slice';
import { useEffect } from 'react';
import { selectUpdateContactId } from 'redux/contacts/selectors';
import css from './Modal.module.css';

export const Modal = () => {
  const dispatch = useDispatch();
  const showModal = () => dispatch(setShowModal(false));
  const id = useSelector(selectUpdateContactId);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        showModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const contact = {
      id: id,
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    dispatch(updateContact(contact));
    form.reset();
    showModal();
  };

  return (
    <div className={css.Overlay}>
      <div className={css.Modal}>
        <span className={css.close} onClick={showModal}>
          &times;
        </span>
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={css.label}>
            <p className={css.text}>Name</p>
            <input className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={css.label}>
            <p className={css.text}>Number</p>

            <input className={css.input}
              type="text"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.button} type="submit">
            Edit contact
          </button>
        </form>
      </div>
    </div>
  );
};
