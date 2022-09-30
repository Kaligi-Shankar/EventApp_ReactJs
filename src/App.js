import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import LandingPage from './components/landingPage';
import InputForm from './components/inputForm';
import EventPage from './components/eventPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Create' element={<InputForm/>}/>
        <Route path='/eventpage' element={<EventPage/>}/>
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
