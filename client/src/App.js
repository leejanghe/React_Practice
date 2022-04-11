import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './router/Home';
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
    </Router>
  );
}

export default App;
