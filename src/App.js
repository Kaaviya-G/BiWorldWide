import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import Contacts from './Screens/Contacts';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contacts" element={<Contacts />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
