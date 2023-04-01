import _ from './Form.module.css';
import { useForm } from 'react-hook-form';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return  (
    <form className={_.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={_.wrap}>
        <label className={_.label} htmlFor='email'>E-mail</label>
        <input
          {...register('email', {
              required: 'Заполните это поле',
              pattern: {
                value: /^.+@.+\..+$/,
                message: 'Некорректный e-mail'
              }
          })}
          className={_.input}
          id='email'
          type='text'
          aria-invalid={!!errors.email}
        />

        {errors.email && <p className={_.error}>{errors.email.message}</p>}
      </div>

      
      <div className={_.wrap}>
        <label className={_.label} htmlFor='password'>Пароль</label>
        <input
          {...register('password', {
              required: 'Заполните это поле',
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/,
                message: 'От 6 символов: заглавные и прописные буквы, цифры и спецсимволы'
              }
          })}
          className={_.input}
          id='password'
          type='password'
          aria-invalid={!!errors.password}
        />

        {errors.password && <p className={_.error}>{errors.password.message}</p>}
      </div>

      
      <div className={_.wrapCheckbox}>
        <input
          {...register('save')}
          className={_.checkbox}
          id='save'
          type='checkbox'
        />
        <label className={_.labelCheckbox} htmlFor='save'>Запомнить пароль</label>
      </div>

      <button className={_.submit} type='submit'>Войти</button>
    </form>
  );
};
