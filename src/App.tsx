import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainContainer } from './globalStyels';
import { Footer, Header } from './sections/index';
import { Home , Restaurants, RestaurantPage, DishPage, Chefs} from './pages/index';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>  
      <MainContainer>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurants' element={<Restaurants/>}/>
        <Route path='/restaurantPage' element={<RestaurantPage/>}/>
        <Route path='/dishpage' element={<DishPage/>}/>
        <Route path='/chefs' element={<Chefs/>}/>
      </Routes>
      <Footer/>
      <ToastContainer autoClose={false} theme="dark"/>
      </MainContainer>
  </Router>
    
  );
}

export default App;
