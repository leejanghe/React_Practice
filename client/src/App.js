import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import TabPage from './components/tab/TabPage';
import Home from './router/Home';
import ImageMarkerTest from './router/ImageMarkerTest';
import InputState from './router/InputState';
import LottieTest from './router/LottieTest';
import Mypage from './router/Mypage';
import UseState from './router/UseState';
import ZoomImage from './router/ZoomImage';

function App() {
  return (
    <Router>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>

    <Routes>
      <Route path="test1" element={<UseState/>}/>
    </Routes>

    <Routes>
      <Route path="test2" element={<InputState/>}/>
    </Routes>

    <Routes>
      <Route path="test3" element={<LottieTest/>}/>
    </Routes>
    <Routes>
      <Route path="test4" element={<ImageMarkerTest/>}/>
    </Routes>
    <Routes>
      <Route path="test5" element={<ZoomImage/>}/>
    </Routes>
    <Routes>
      <Route path="test6" element={<Mypage/>}/>
    </Routes>
    <Routes>
      <Route path="test7" element={<TabPage/>}/>
    </Routes>
    </Router>
  );
}

export default App;
