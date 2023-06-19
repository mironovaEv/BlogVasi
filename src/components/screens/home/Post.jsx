import Card from 'react-bootstrap/Card';

const Post = () => (
  <Card style={{ width: '40rem' }}>
    <Card.Body>
      <div className="d-flex justify-content-between">
        <Card.Title>Заголовок поста</Card.Title>
        <Card.Text className="text-muted">1 час назад</Card.Text>
      </div>
      <Card.Text>Текст поста</Card.Text>
    </Card.Body>
    <Card.Footer className="bg-white">#</Card.Footer>
  </Card>
);

export default Post;
