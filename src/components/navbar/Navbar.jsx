import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LogoutThunkCreator } from '../../reducers/reducer';

const NavBar = () => {
  const isAuth = !!useSelector((state) => state.isAuth);

  const dispatch = useDispatch();

  function onclick() {
    dispatch(LogoutThunkCreator());
  }
  return (
    <Navbar expand="lg" className="bg-primary bg-opacity-25 p-0">
      <Container fluid>
        <Navbar.Brand as={Link} to="/1" className="fw-bolder">
          <img alt="" src="public/logo.png" width="40" height="40" className="d-inline-block align-top" />
          <Navbar.Text className="ps-4 fs-3">Блог Васи Пупкина</Navbar.Text>
        </Navbar.Brand>

        <Button as={Link} to="/1" variant="outline-secondary" onClick={onclick} className={`${isAuth ? '' : 'd-none'}`}>
          Выход
        </Button>
        <Button as={Link} to="/login" variant="outline-secondary" className={`${isAuth ? 'd-none' : ''}`}>
          Вход
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;
