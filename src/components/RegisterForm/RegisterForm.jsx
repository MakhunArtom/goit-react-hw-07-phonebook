import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      signup({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.box}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          <span className={css.text}>Username</span>
          <input className={css.input} type="text" name="name" />
        </label>
        <label className={css.label}>
          <span className={css.text}>Email</span>
          <input className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          <span className={css.text}>Password</span>
          <input className={css.input} type="password" name="password" />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
