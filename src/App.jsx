import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import NavBar from './components/navbar/Navbar';
import AuthRoute from './route/privatRoute';
const HomeContainer = lazy(() => import('./components/screens/home/HomeContainer'));
const Login = lazy(() => import('./components/screens/login/Login'));
const PostContainer = lazy(() => import('./components/screens/post/PostContainer'));

const App = () => (
  <>
    <NavBar />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomeContainer />}>
          <Route path=":number" element={<HomeContainer />} />
        </Route>
        <Route exact path="/login" element={<AuthRoute />}>
          <Route exact path="/login" element={<Login />} />
        </Route>

        <Route exact path="/post">
          <Route path=":id" element={<PostContainer />} />
        </Route>
      </Routes>
    </Suspense>
  </>
);

export default App;
