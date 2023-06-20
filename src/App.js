    import Navbar from './Navbar';
    import './App.css';
    import Home from './Components/home';
    import { Routes, Route, Navigate } from "react-router-dom"; 
    import VideoComponent from './Components/VideoComponent';

    function App() {

      return (<>
        <Navbar/>
        <Routes> 
          <Route path='/' element={<Navigate to='/1' />}></Route>  
          <Route exact path=':pageId' element={<Home/>}></Route>      
          <Route exact path=':pageId/:videoId' element={<VideoComponent/>}></Route>
        </Routes>
        </>
      );
    }

    export default App;
