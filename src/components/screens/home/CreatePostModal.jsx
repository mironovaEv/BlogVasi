/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { AddPostThunkCreator } from '../../../reducers/reducer';

const CreatePostModal = ({ show, onHide }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(AddPostThunkCreator(data));
    reset();
    onHide();
  };
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Создание поста</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-3 py-0">
        <Form>
          <Form.Group className="mb-3 mt-3" controlId="formGroupName">
            <Form.Label>Заголовок поста</Form.Label>
            <Form.Control
              {...register('title', {
                required: 'Поле обязательно к заполнению',
              })}
              type="text"
              placeholder=""
            />
            <div className="mt-1 text-danger">
              {errors?.title && <p className="mb-0">{errors?.title?.message || 'Ошибка!'}</p>}
            </div>
          </Form.Group>
          <Form.Group className="mb-3 mt-3" controlId="formGroupName">
            <Form.Label>Текст поста</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register('content', {
                required: 'Поле обязательно к заполнению',
              })}
              type="text"
              placeholder=""
            />
            <div className="mt-1 text-danger">
              {errors?.content && <p className="mb-0">{errors?.content?.message || 'Ошибка!'}</p>}
            </div>
          </Form.Group>
          <Form.Group className="mb-3 mt-3" controlId="formGroupName">
            <Form.Control {...register('picture')} type="text" placeholder="Ссылка на изображение" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" type="button" onClick={onHide}>
          Отмена
        </Button>
        <Button variant="outline-primary" className="blue-btn" type="submit" onClick={handleSubmit(onSubmit)}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePostModal;
