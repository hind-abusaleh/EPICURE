import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MainContainer } from './globalStyels';
import { Footer, Header } from './sections/index'
import { Home , Restaurants, RestaurantPage, DishPage} from './pages/index'
import "react-toastify/dist/ReactToastify.css";
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
      </Routes>
      <Footer/>
      </MainContainer>
  </Router>
    
  );
}

export default App;
