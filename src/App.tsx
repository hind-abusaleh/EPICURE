import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MainContainer } from './globalStyels';
import { Footer, Header } from './sections/index'
import { Home , Restaurants} from './pages/index'

function App() {
  return (
    <Router>  
      <MainContainer>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurants' element={<Restaurants/>}/>
      </Routes>
      <Footer/>
      </MainContainer>
  </Router>
    
  );
}

export default App;
