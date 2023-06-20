import Card from 'react-bootstrap/Card';

import LoginForm from './loginForm/LoginForm';

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
          <LoginForm />
        </Card.Body>
      </Card>
    </div>
  </div>
);
export default Login;
