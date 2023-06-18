import Navbar from './Navbar';
import './App.css';
import Home from './home';
import { Routes, Route, Navigate } from "react-router-dom"; 
import VideoComponent from './VideoComponent';

function App() {



  return (<>
    <Navbar/>
    <Routes> 
      <Route path='/' element={<Navigate to='/1' />}></Route>  
      <Route path=':pageId' element={<Home/>}></Route>      
      <Route exact path=':pageId/:videoId' element={<VideoComponent/>}></Route>
    </Routes>
    </>
  );
}

export default App;
