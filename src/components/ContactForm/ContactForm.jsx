import { nanoid } from 'nanoid';
import { useState } from 'react';

const ContactForm = ({ onHandelSubmit, notification }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInput = nanoid();
  const numberInput = nanoid();

  const onHandelChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onHandelSubmit(e);
        resetInput();
        notification(name);
      }}
    >
      <div>
        <label htmlFor={nameInput}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInput}
          onChange={onHandelChange}
        />
      </div>

      <div>
        <label htmlFor={numberInput}>Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInput}
          onChange={onHandelChange}
        />
      </div>

      <button>Add contact</button>
    </form>
  );
};

export default ContactForm;
