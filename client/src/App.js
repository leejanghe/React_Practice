import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './router/Home';
import InputState from './router/InputState';
import UseState from './router/UseState';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>

    <Routes>
      <Route path="test1" element={<UseState/>}/>
    </Routes>
    <Routes>
      <Route path="test2" element={<InputState/>}/>
    </Routes>
    </Router>
  );
}

export default App;
