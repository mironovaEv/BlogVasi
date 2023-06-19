import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import NavBar from './components/navbar/Navbar';
const Home = lazy(() => import('./components/screens/home/Home'));
const Login = lazy(() => import('./components/screens/login/Login'));

const App = () => (
  <>
    <NavBar />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  </>
);

export default App;
