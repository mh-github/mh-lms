import React from "react";
// import Home from './pages/Home';
import About from "./pages/About";
// import Contact from './pages/Contact';
import { Routes, Route } from "react-router-dom";
import { RouteConstants } from "./route-constants";
import NewBorrowing from "./components/borrowings/NewBorrowing";

const AppRoutes = () => {
  return (
    <Routes>
      {/* INFO: Below syntax is from react router 5 */}
      {/*<Route exact path="/" component={Home} /> */}
      {/* <Route exact path="/borrowings/new" component={NewBorrowing} /> */}
      {/* Add more routes as needed 
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        */}
      {/* INFO: For Updated version 6 */}
      {/* INFO: Bydefault used About component for base URL */}
      <Route path={RouteConstants.baseUrl} element={<About />} />
      <Route path={RouteConstants.borrowing} element={<NewBorrowing />} />
    </Routes>
  );
};

export default AppRoutes;
