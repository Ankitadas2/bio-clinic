
import './App.css';
import Services from './Components/Services/Services';

import {
  BrowserRouter ,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Details from './Components/Details/Details';

import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Doctors from './Components/Doctors/Doctors';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app">
     <AuthProvider>
      <BrowserRouter>
      <Header></Header>
       <Switch>
       <Route exact path="/">
           <Home></Home>
         </Route>
         <Route exact path="/home">
           <Home></Home>
         </Route>
         <Route exact path="/service">
           <Services></Services>
         </Route>
         <Route exact path="/doctor">
           <Doctors></Doctors>
         </Route>
         <PrivateRoute path="/details/:serviceId">
           <Details></Details>
         </PrivateRoute>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route exact path="/about">
           <About></About>
         </Route>
         <Route exact path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </BrowserRouter> 
     </AuthProvider>
       
     
    </div>
  );
}

export default App;
