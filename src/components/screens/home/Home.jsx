/* eslint-disable react/prop-types */
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination';
import Post from './Post';
import Button from 'react-bootstrap/Button';
import CreatePostModal from './CreatePostModal';

const Home = ({ posts, currentPage, totalCountPage }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const isAuth = !!useSelector((state) => state.isAuth);
  let active = currentPage;
  let items = [];
  for (let number = 1; number <= totalCountPage; number++) {
    items.push(
      <Pagination.Item className="page-item" href={`/${number}`} key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <Container className="container-sm d-flex justify-content-center  mt-4 ">
      <div>
        <div className="d-flex justify-content-end">
          <Button
            type="button"
            variant="outline-secondary"
            onClick={() => setShow(true)}
            className={`${isAuth ? '' : 'd-none'} `}
          >
            Создать пост
          </Button>
        </div>
        {posts.map((value) => {
          return (
            <Post
              id={value.id}
              title={value.title}
              key={value.id}
              picture={value.picture}
              createdDate={value.createdDate}
            />
          );
        })}
        <div className="mt-4 d-flex justify-content-center">
          <Pagination className="pg-red">{items}</Pagination>
        </div>
      </div>
      <CreatePostModal show={show} onHide={handleClose} />
    </Container>
  );
};

export default Home;
