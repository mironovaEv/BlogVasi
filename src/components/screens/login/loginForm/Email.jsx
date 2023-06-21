/* eslint-disable react/prop-types */
import Form from 'react-bootstrap/Form';

const Email = ({ register, errors }) => (
  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Control
      type="text"
      placeholder="Email"
      {...register('email', {
        required: 'Поле обязательно к заполнению',
      })}
    />
    <div className="mt-1 text-danger align-content-start">
      {errors?.email && <p className="mb-0">{errors?.email?.message || 'Ошибка!'}</p>}
    </div>
  </Form.Group>
);

export default Email;
