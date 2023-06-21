/* eslint-disable react/prop-types */
import dateFormat from 'dateformat';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Post = ({ id, title, picture, createdDate }) => (
  <Card as={Link} to={`/post/${id}`} style={{ width: '50rem' }} className="mt-3 col text-decoration-none">
    <Card.Body>
      <div className="d-flex justify-content-between">
        <Card.Title className="fs-4">{title}</Card.Title>
        <Card.Text className="text-muted">{dateFormat(createdDate, 'mmm d, yyyy')}</Card.Text>
      </div>

      <img src={picture} />
    </Card.Body>
  </Card>
);

export default Post;
