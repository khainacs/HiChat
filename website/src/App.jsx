import { useState } from 'react';
import loadable from '@loadable/component'; // Thêm dòng này
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react'; 
import CircularProgress from '@mui/material/CircularProgress';

const Home = loadable(() => import("./pages/Home"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
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
