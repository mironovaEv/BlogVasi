/* eslint-disable react/prop-types */
import dateFormat from 'dateformat';
import { Card, Container } from 'react-bootstrap';

const Post = ({ title, content, picture, createdDate }) => (
  <Container className="d-flex justify-content-center">
    <Card className="mt-4 mb-4" style={{ width: '55rem' }}>
      <div className="d-flex justify-content-between row">
        <Card.Title className="ps-4 pt-3 pe-3 pe-md-0 fs-1 col-md-10">{title}</Card.Title>
        <Card.Text className="text-muted col-md-2 pt-md-4 pe-4 ps-4 ps-md-0 pt-1 d-flex justify-content-md-center">
          {dateFormat(createdDate)}
        </Card.Text>
      </div>

      <Card.Body>{content}</Card.Body>
      <img className="m-5 mt-2 mb-2" src={picture} />
    </Card>
  </Container>
);

export default Post;
