import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import NavBar from './components/navbar/Navbar';
const Home = lazy(() => import('./components/screens/home/Home'));

const App = () => (
  <>
    <NavBar />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Suspense>
  </>
);

export default App;
