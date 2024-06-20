import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import MainLayout from './Components/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        </Route>
        <Route path="*" element={<div><h1>Error 404:</h1> <h2>Page not found</h2></div>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
