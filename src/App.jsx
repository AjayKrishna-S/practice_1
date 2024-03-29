
import './App.css';
import { RouterProvider ,Outlet, createBrowserRouter } from 'react-router-dom';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Footer from './assets/footer/Footer';
import Home from './pages/home/Home.jsx';
import Chairman from './pages/Chairman/Chairman.jsx';
import Governing from './pages/governing/Governing.jsx';
import AboutCollege from './pages/aboutCollege/AboutCollege.jsx';
import Director from './pages/director/Director.jsx';
import Marquee from './components/marquee/Marquee.jsx';
import Trustees from './pages/trustees/Trustees.jsx';
import Advisor from './pages/advisor/Advisor.jsx';
import ProgramStructure from './pages/program structure/ProgramStructure.jsx';
import CurriculamAndElectives from './pages/curriculam&electives/CurriculamAndElectives.jsx';
import CurriculamAndAdmin from './pages/curriculamAndAdmin/CurriculamAndAdmin.jsx';

function App() {
  
  const Layout = ()=>{
    return(
      <div className='components'>
        <Header />
        <Nav />
        <Carousel />
        <Marquee />
        <div style={{ display: 'flex' , justifyContent: 'space-between' }}>
          <Outlet />
        </div>
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        
          <Layout />
       
      ,
      children:[
        {
          path: "/",
          element: <Home />
        }
        ,
        {
          path:"/chairman",
          element:<Chairman />
       },
      {
        path:"/governingcouncil",
        element:<Governing />
      },
      {
        path:"/aboutcollege",
        element:<AboutCollege />
      },
      {
        path:"/director",
        element:<Director />
      },
      {
        path:"/trustees",
        element:<Trustees />
      },
      {
        path:"/advisor",
        element:<Advisor />
      },
      {
        path:"/programstructure",
        element:<ProgramStructure />
      },
      {
        path:"/curriculumandelectives",
        element:<CurriculamAndElectives />
      },
      {
        path:"/curriculamandadmin",
        element:<CurriculamAndAdmin />
      }
      ]
    }
  ])



  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
