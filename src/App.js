import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Final from './components/Final/Final'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='Final' element={<Final />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
