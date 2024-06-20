import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="*" element={<div><h1>Error 404:</h1> <h2>Page not found</h2></div>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
