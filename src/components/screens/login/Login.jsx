import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => (
  <div className="d-flex justify-content-around align-items-center">
    <img src="public/login.jpg" width="600" height="600" />
    <div className="d-flex justify-content-center ">
      <Card
        style={{ width: '30rem', height: 'max-content' }}
        className="text-center bg-primary bg-opacity-25 border-0 shadow-sm align-middle"
      >
        <Card.Title className="fs-2 fw-bolder mt-2 text-secondary">Вход</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Login" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="outline-secondary" className="d-flex">
              Войти
            </Button>{' '}
          </Form>
        </Card.Body>
      </Card>
    </div>
  </div>
);
export default Login;
