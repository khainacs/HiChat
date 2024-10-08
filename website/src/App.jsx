import { useState } from 'react';
import loadable from '@loadable/component'; // Thêm dòng này
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
const Login = loadable(() => import("./pages/Login"));
const Home = loadable(() => import("./pages/Home"));
const LoadableLogin = loadable(() => import('./pages/Login')); // Đường dẫn đến file chứa Login
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/login"
          element={
            <Suspense fallback={<CircularProgress />}>
              <LoadableLogin />
            </Suspense>
          }
        />

        <Route
          index
          element={
            <Suspense fallback={<CircularProgress />}>
              <Home title="Trang chủ" />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
