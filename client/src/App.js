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
import Table from './components/Table';
import Table2 from './components/Table2';
import Tabtab from './components/pracitce/Tabtab';
import UseEffectTest from './router/UseEffectTest';
import Debuger from './router/Debuger';
import StyleClassTest from './router/StyleClassTest';
import Reduxtest from './router/Reduxtest';
import Detail from './components/redux/Detail';
import Tooltip from './router/Tooltip';
import Ajaxreq from './router/Ajaxreq';

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
    <Routes>
      <Route path="test8" element={<Table/>}/>
    </Routes>
    <Routes>
      <Route path="test9" element={<Table2/>}/>
    </Routes>
    <Routes>
      <Route path="test10" element={<Tabtab/>}/>
    </Routes>
    <Routes>
      <Route path="test11" element={<UseEffectTest/>}/>
    </Routes>
    <Routes>
      <Route path="test12" element={<Debuger/>}/>
    </Routes>
    <Routes>
      <Route path="test13" element={<StyleClassTest/>}/>
    </Routes>
    {/* <Routes>
      <Route path="test14" element={<Reduxtest/>}/>
      <Route path="test14/:id" element={<Detail/>}/>
    </Routes> */}
    <Routes>
      <Route path="test15" element={<Tooltip/>}/>
    </Routes>
    <Routes>
      <Route path="test16" element={<Ajaxreq/>}/>
    </Routes>
    </Router>
  );
}

export default App;
