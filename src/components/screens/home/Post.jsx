/* eslint-disable react/prop-types */
import dateFormat from 'dateformat';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Post = ({ id, title, picture, createdDate }) => {
  return (
    <Card
      as={Link}
      to={`/post/${id}`}
      style={{ minWidth: '50rem' }}
      className="mt-3 col bg-primary bg-opacity-10 text-decoration-none border-0 shadow-sm short-post"
    >
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title className="fs-4">{title}</Card.Title>
          <Card.Text className="text-muted m-1">{dateFormat(createdDate, 'mmm d, yyyy')}</Card.Text>
        </div>
        <div className="post-img">
          <img src={picture} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
