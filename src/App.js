import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Err404 from "./pages/Err404";
import Quiz from "./pages/Quiz"

import './styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/quiz'  element={ <Quiz />} />
          <Route path="/" element={ <Home /> } />
          <Route path='*' element={ <Err404 /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
