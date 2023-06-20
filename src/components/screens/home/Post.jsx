import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Post = () => (
  <Card style={{ width: '40rem' }}>
    <Card.Body>
      <div className="d-flex justify-content-between">
        <Card.Title>Заголовок поста</Card.Title>
        <Card.Text className="text-muted">1 час назад</Card.Text>
      </div>
      <Card.Text>Текст поста</Card.Text>
    </Card.Body>
    <Card.Footer className="bg-white d-flex justify-content-between">
      <Button variant="outline-secondary" className="d-flex px-2">
        <img width="20" height="20" className="p-0" src="public/comment.png"></img>
      </Button>
      <Button variant="outline-secondary" className="d-flex p-1 ">
        <img width="15" height="15" className="m-1 " src="public/share.png"></img>
      </Button>
    </Card.Footer>
  </Card>
);

export default Post;
