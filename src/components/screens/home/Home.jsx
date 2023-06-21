/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import Post from './Post';
import Button from 'react-bootstrap/Button';

const Home = ({ posts, currentPage, totalCountPage }) => {
  let active = currentPage;
  console.log(posts);
  let items = [];
  for (let number = 1; number <= totalCountPage; number++) {
    items.push(
      <Pagination.Item href={`/${number}`} key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <Container className="container-sm d-flex justify-content-center  mt-4 ">
      <div>
        <div className="d-flex justify-content-end">
          <Button type="button" variant="outline-secondary">
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
          <Pagination>{items}</Pagination>
        </div>
      </div>
    </Container>
  );
};

export default Home;
