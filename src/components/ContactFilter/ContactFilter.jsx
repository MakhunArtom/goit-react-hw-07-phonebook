import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/slice';
import css from './ContactFilter.module.css';

export const ContactFilter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.box}>
      <form className={css.form}>
        <label className={css.label}>
          <span className={css.text}>Find contacts by name:</span>
          <input
            className={css.input}
            type="name"
            onChange={onFilterChange}
          ></input>
        </label>
      </form>
    </div>
  );
};
