import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
import NewBorrowing from './components/borrowings/NewBorrowing';

const AppRoutes = () => {
  return (

      <Routes>
        {/*<Route exact path="/" component={Home} /> */}
        <Route exact path="/borrowings/new" component={NewBorrowing} />
        {/* Add more routes as needed 
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        */}
      </Routes>

  );
};

export default AppRoutes;
